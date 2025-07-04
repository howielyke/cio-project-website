
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface EpisodeFilters {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
}

export async function getEpisodes(filters: EpisodeFilters = {}) {
  const { search = '', category = '', page = 1, limit = 10 } = filters;
  
  try {
    const where = {
      AND: [
        search
          ? {
              OR: [
                { title: { contains: search, mode: 'insensitive' as const } },
                { guest: { contains: search, mode: 'insensitive' as const } },
                { description: { contains: search, mode: 'insensitive' as const } },
              ],
            }
          : {},
        category ? { category: { equals: category } } : {},
      ],
    };

    const episodes = await prisma.episode.findMany({
      where,
      orderBy: { publishDate: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    });

    return episodes;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
}

export async function getEpisodeBySlug(slug: string) {
  try {
    const episode = await prisma.episode.findUnique({
      where: { slug },
    });

    return episode;
  } catch (error) {
    console.error('Error fetching episode:', error);
    return null;
  }
}

export async function getFeaturedEpisodes() {
  try {
    const episodes = await prisma.episode.findMany({
      where: { featured: true },
      orderBy: { publishDate: 'desc' },
      take: 3,
    });

    return episodes;
  } catch (error) {
    console.error('Error fetching featured episodes:', error);
    return [];
  }
}
