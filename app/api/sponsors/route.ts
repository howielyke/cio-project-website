import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Create email content
    const emailContent = `
New Sponsorship Inquiry - The CIO Project

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company}
${title ? `- Title: ${title}` : ''}

${budget ? `Budget Range: ${budget}` : ''}

${message ? `Message:\n${message}` : ''}

Submitted on: ${new Date().toLocaleString()}
    `;

    // Send email using Resend
    await resend.emails.send({
      from: 'The CIO Project <onboarding@resend.dev>',
      to: ['howie@sherpatechs.com'],
      subject: `New Sponsorship Inquiry from ${company}`,
      text: emailContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Sponsor inquiry submitted successfully. We will contact you soon!',
    });

  } catch (error) {
    console.error('Error processing sponsor inquiry:', error);
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
