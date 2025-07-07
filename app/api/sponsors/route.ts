
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

const prisma = new PrismaClient();

// Initialize Resend only if API key is available
let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, title, message, budget } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
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

    // Create sponsor inquiry
    const sponsor = await prisma.sponsor.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company.trim(),
        title: title?.trim() || null,
        message: message?.trim() || null,
        budget: budget || null,
      },
    });

    // Send email notification (only if Resend is configured)
    if (resend) {
      try {
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #dc2626; margin: 0;">The CIO Project</h1>
              <p style="color: #666; margin: 5px 0;">New Sponsorship Inquiry</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company}</p>
              ${title ? `<p><strong>Title:</strong> ${title}</p>` : ''}
            </div>
            
            ${budget ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #d97706; margin-top: 0;">Budget Range</h3>
              <p style="margin: 0;">${budget}</p>
            </div>
            ` : ''}
            
            ${message ? `
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px;">
              <h3 style="color: #0369a1; margin-top: 0;">Message</h3>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ''}
            
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
          subject: `New Sponsorship Inquiry from ${company}`,
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
      message: 'Sponsor inquiry submitted successfully',
      id: sponsor.id,
    });
  } catch (error) {
    console.error('Error creating sponsor inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const sponsors = await prisma.sponsor.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(sponsors);
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
