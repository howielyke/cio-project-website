
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getSponsors() {
  try {
    const sponsors = await prisma.sponsor.findMany({
      where: { active: true },
      orderBy: [
        { tier: 'asc' },
        { createdAt: 'desc' },
      ],
    });

    return sponsors;
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    return [];
  }
}

export async function getSponsorById(id: string) {
  try {
    const sponsor = await prisma.sponsor.findUnique({
      where: { id },
    });

    return sponsor;
  } catch (error) {
    console.error('Error fetching sponsor:', error);
    return null;
  }
}
