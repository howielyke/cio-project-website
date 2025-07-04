
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  formType?: string;
}

export async function createContact(data: ContactData) {
  try {
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        formType: data.formType || 'general',
      },
    });

    return contact;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
}

export async function getContacts() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
}
