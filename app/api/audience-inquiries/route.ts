
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export const dynamic = 'force-dynamic';

function getPrismaClient() {
  return new PrismaClient();
}

export async function POST(request: NextRequest) {
  const prisma = getPrismaClient();
  
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate inquiry type
    const validInquiryTypes = ['question', 'topic-suggestion', 'guest-recommendation', 'general'];
    if (!validInquiryTypes.includes(inquiryType)) {
      return NextResponse.json(
        { error: 'Invalid inquiry type' },
        { status: 400 }
      );
    }

    // Create audience inquiry
    const inquiry = await prisma.audienceInquiry.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        inquiryType,
        message: message.trim(),
      },
    });

    // Send email notification (only if Resend is configured)
    if (resend) {
      try {
        const inquiryTypeLabels: Record<string, string> = {
          'question': 'Question for the Hosts',
          'topic-suggestion': 'Topic Suggestion',
          'guest-recommendation': 'Guest Recommendation',
          'general': 'General Inquiry'
        };

        const inquiryTypeColors: Record<string, string> = {
          'question': '#3b82f6',
          'topic-suggestion': '#10b981',
          'guest-recommendation': '#8b5cf6',
          'general': '#f59e0b'
        };

        const inquiryLabel = inquiryTypeLabels[inquiryType] || 'Inquiry';
        const inquiryColor = inquiryTypeColors[inquiryType] || '#6b7280';

        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #dc2626; margin: 0;">The CIO Project</h1>
              <p style="color: #666; margin: 5px 0;">New Audience Inquiry</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: ${inquiryColor}1a; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid ${inquiryColor};">
              <h3 style="color: ${inquiryColor}; margin-top: 0; margin-bottom: 10px;">
                ${inquiryLabel}
              </h3>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px;">
              <h3 style="color: #0369a1; margin-top: 0;">Message</h3>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Submitted on ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        `;

        await resend.emails.send({
          from: 'The CIO Project <notifications@resend.dev>',
          to: ['Howie@SherpaTechs.com'],
          subject: `New ${inquiryLabel} from ${name}`,
          html: emailHtml,
        });

        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue with success response even if email fails
      }
    } else {
      console.log('Email notification skipped - Resend API key not configured');
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      id: inquiry.id,
    });
  } catch (error) {
    console.error('Error creating audience inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  const prisma = getPrismaClient();
  
  try {
    const inquiries = await prisma.audienceInquiry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Error fetching audience inquiries:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
