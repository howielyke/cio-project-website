import { NextRequest, NextResponse } from 'next/server';

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

    // For now, just log the email content and return success
    // In production, you would integrate with your preferred email service
    console.log('Sponsor inquiry received:');
    console.log(emailContent);
    console.log('Would send to: howie@sherpatechs.com');

    // Simulate email sending
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
