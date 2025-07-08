import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
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

    // Create email content
    const inquiryTypeLabels: Record<string, string> = {
      'question': 'Question for the Hosts',
      'topic-suggestion': 'Topic Suggestion',
      'guest-recommendation': 'Guest Recommendation',
      'general': 'General Inquiry'
    };

    const inquiryLabel = inquiryTypeLabels[inquiryType] || 'Inquiry';

    const emailContent = `
New Audience Inquiry - The CIO Project

Contact Information:
- Name: ${name}
- Email: ${email}

Inquiry Type: ${inquiryLabel}

Message:
${message}

Submitted on: ${new Date().toLocaleString()}
    `;

    // For now, just log the email content and return success
    // In production, you would integrate with your preferred email service
    console.log('Audience inquiry received:');
    console.log(emailContent);
    console.log('Would send to: howie@sherpatechs.com');

    // Simulate email sending
    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully. We will get back to you soon!',
    });

  } catch (error) {
    console.error('Error processing audience inquiry:', error);
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
