
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Create sample episodes
  const episodes = await prisma.episode.createMany({
    data: [
      {
        title: 'The Future of Enterprise AI: A Strategic Perspective',
        slug: 'future-enterprise-ai-strategic-perspective',
        guest: 'Sarah Chen',
        guestBio: 'Sarah Chen is the Chief Information Officer at TechCorp, where she leads digital transformation initiatives across the organization. With over 15 years of experience in enterprise technology, she specializes in AI implementation and cloud architecture.',
        guestPhoto: 'https://i.pinimg.com/originals/33/83/6f/33836f20f7b841a5669fe1c4ab3e5e6d.jpg',
        description: 'In this episode, we explore how enterprise AI is reshaping business operations and strategic decision-making. Sarah shares insights on successful AI implementation, common pitfalls to avoid, and the future of intelligent automation in large organizations.',
        audioUrl: 'https://example.com/audio/episode-1.mp3',
        duration: '42:15',
        category: 'AI/ML',
        publishDate: new Date('2024-01-15'),
        showNotes: `
Episode Highlights:
• The current state of enterprise AI adoption
• Key challenges in AI implementation
• Best practices for building AI teams
• ROI measurement for AI initiatives
• Future trends in enterprise AI

Resources Mentioned:
• "AI for Business Leaders" book
• TechCorp AI Framework
• Enterprise AI Maturity Model

Connect with Sarah:
• LinkedIn: @sarahchen-cio
• Twitter: @sarahchen_tech
        `,
        featured: true,
      },
      {
        title: 'Cloud Security in the Modern Enterprise',
        slug: 'cloud-security-modern-enterprise',
        guest: 'Michael Rodriguez',
        guestBio: 'Michael Rodriguez serves as the Chief Information Security Officer at SecureCloud Inc. He has spent over 12 years focusing on cloud security architecture and zero-trust implementations.',
        guestPhoto: 'https://stock.pincel.app/wp-content/uploads/2023/11/00048-Professional_studio_headshot_of_a_young_Hispanic_man_wearing_a_navy_blue_suit_and_bold_blue_tie_against_a_neutral_white_backgro-1.jpg',
        description: 'Michael discusses the evolving landscape of cloud security, sharing strategies for implementing zero-trust architectures and managing security in multi-cloud environments.',
        audioUrl: 'https://example.com/audio/episode-2.mp3',
        duration: '38:22',
        category: 'Security',
        publishDate: new Date('2024-01-08'),
        showNotes: `
Episode Highlights:
• Zero-trust architecture principles
• Multi-cloud security strategies
• Identity and access management
• Compliance in cloud environments
• Security automation and orchestration

Resources Mentioned:
• NIST Cybersecurity Framework
• Zero Trust Architecture Guide
• Cloud Security Alliance Best Practices

Connect with Michael:
• LinkedIn: @mrodriguez-ciso
• Blog: cloudsecurityinsights.com
        `,
        featured: true,
      },
      {
        title: 'Leading Digital Transformation at Scale',
        slug: 'leading-digital-transformation-scale',
        guest: 'Jennifer Walsh',
        guestBio: 'Jennifer Walsh is the Chief Digital Officer at GlobalTech Solutions, where she oversees digital transformation initiatives across 40+ countries. She has a proven track record of leading large-scale technology implementations.',
        guestPhoto: 'https://static.wixstatic.com/media/cbf553_403130b349f54dd6882ab98a99f945d5~mv2.jpg/v1/fill/w_2268,h_3024,al_c,q_90/Jennifer%20Walsh.jpg',
        description: 'Jennifer shares her experience leading digital transformation at a global scale, discussing change management, technology adoption, and building digital cultures across diverse organizations.',
        audioUrl: 'https://example.com/audio/episode-3.mp3',
        duration: '45:18',
        category: 'Leadership',
        publishDate: new Date('2024-01-01'),
        showNotes: `
Episode Highlights:
• Global digital transformation challenges
• Change management strategies
• Building digital-first cultures
• Technology adoption frameworks
• Measuring transformation success

Resources Mentioned:
• Digital Transformation Playbook
• Global Change Management Framework
• Digital Culture Assessment Tool

Connect with Jennifer:
• LinkedIn: @jwalsh-cdo
• Speaking engagements: jenniferwalsh.com
        `,
        featured: true,
      },
      {
        title: 'The Evolution of Enterprise Data Architecture',
        slug: 'evolution-enterprise-data-architecture',
        guest: 'David Kim',
        guestBio: 'David Kim is the Chief Data Officer at DataFirst Corp, specializing in modern data architecture and analytics platforms. He has been instrumental in building data-driven organizations.',
        guestPhoto: 'https://pixu.ai/pixu/images/stock/__a7/a72yl2w0.jpg',
        description: 'David discusses the evolution of enterprise data architecture, from traditional data warehouses to modern data lakes and the emerging data mesh paradigm.',
        audioUrl: 'https://example.com/audio/episode-4.mp3',
        duration: '41:33',
        category: 'Cloud',
        publishDate: new Date('2023-12-25'),
        showNotes: `
Episode Highlights:
• Modern data architecture patterns
• Data mesh implementation
• Real-time analytics platforms
• Data governance at scale
• Building data-driven cultures

Resources Mentioned:
• Data Mesh Architecture Guide
• Modern Data Stack Tools
• Data Governance Framework

Connect with David:
• LinkedIn: @dkim-cdo
• Blog: enterprisedata.tech
        `,
        featured: false,
      },
      {
        title: 'Innovation Management in Large Organizations',
        slug: 'innovation-management-large-organizations',
        guest: 'Lisa Thompson',
        guestBio: 'Lisa Thompson is the Chief Innovation Officer at InnovateTech, where she leads innovation labs and emerging technology research. She has over 18 years of experience in technology innovation.',
        guestPhoto: 'https://stock.pincel.app/wp-content/uploads/2023/11/00114-Professional_studio_headshot_of_an_African_American_woman_with_a_high_ponytail_black_suit_dark_backdrop-375x500.jpg',
        description: 'Lisa explores how large organizations can foster innovation while maintaining operational excellence, discussing innovation labs, emerging technologies, and building innovative cultures.',
        audioUrl: 'https://example.com/audio/episode-5.mp3',
        duration: '43:45',
        category: 'Innovation',
        publishDate: new Date('2023-12-18'),
        showNotes: `
Episode Highlights:
• Innovation lab methodologies
• Emerging technology evaluation
• Corporate innovation strategies
• Building innovation cultures
• Balancing innovation and operations

Resources Mentioned:
• Innovation Lab Playbook
• Emerging Tech Radar
• Corporate Innovation Framework

Connect with Lisa:
• LinkedIn: @lthompson-cio
• Innovation blog: innovatetech.com/blog
        `,
        featured: false,
      },
      {
        title: 'Building Resilient IT Infrastructure',
        slug: 'building-resilient-it-infrastructure',
        guest: 'Robert Anderson',
        guestBio: 'Robert Anderson is the Chief Technology Officer at ResilienTech, focusing on building fault-tolerant systems and disaster recovery strategies. He has extensive experience in infrastructure architecture.',
        guestPhoto: 'https://i.pinimg.com/736x/5b/b3/43/5bb34340cbd575f0df2e9f33f56bf76d.jpg',
        description: 'Robert discusses strategies for building resilient IT infrastructure, covering disaster recovery, business continuity, and designing systems for high availability.',
        audioUrl: 'https://example.com/audio/episode-6.mp3',
        duration: '39:28',
        category: 'Cloud',
        publishDate: new Date('2023-12-11'),
        showNotes: `
Episode Highlights:
• Resilient infrastructure design
• Disaster recovery planning
• Business continuity strategies
• High availability architectures
• Cost optimization for resilience

Resources Mentioned:
• Infrastructure Resilience Guide
• Disaster Recovery Templates
• Business Continuity Planning

Connect with Robert:
• LinkedIn: @randerson-cto
• Tech blog: resilienttech.com
        `,
        featured: false,
      },
    ],
    skipDuplicates: true,
  });

  // Create sample sponsors
  const sponsors = await prisma.sponsor.createMany({
    data: [
      {
        name: 'CloudTech Solutions',
        logo: 'https://png.pngtree.com/png-clipart/20210725/original/pngtree-cloud-tech-logo-png-image_6556557.jpg',
        website: 'https://cloudtechsolutions.com',
        tier: 'platinum',
        description: 'Leading cloud infrastructure and security solutions for enterprise.',
        active: true,
      },
      {
        name: 'DataFlow Analytics',
        logo: 'https://i.pinimg.com/originals/18/03/c3/1803c3006b669cd18721ac9b8a6b2de6.jpg',
        website: 'https://dataflowanalytics.com',
        tier: 'gold',
        description: 'Advanced analytics and business intelligence platforms.',
        active: true,
      },
      {
        name: 'SecureIT Pro',
        logo: 'https://media.licdn.com/dms/image/D4D0BAQGThpgEZH8GkQ/company-logo_200_200/0/1708541482055/secureit_logo?e=2147483647&v=beta&t=ZQomPN0_w9GYgXaDvC8eExjaGNjlVL60pAyolTZEUWg',
        website: 'https://secureitpro.com',
        tier: 'gold',
        description: 'Enterprise cybersecurity and compliance solutions.',
        active: true,
      },
      {
        name: 'InnovateLabs',
        logo: 'https://i.pinimg.com/736x/ff/62/ae/ff62aec2ee63596c82685afeb4fca241.jpg',
        website: 'https://innovatelabs.com',
        tier: 'silver',
        description: 'Innovation consulting and emerging technology research.',
        active: true,
      },
      {
        name: 'TechBridge Consulting',
        logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHCplKVKr6DAw/company-logo_200_200/company-logo_200_200/0/1697147310865/techbridge_consulting_group_llc_logo?e=2147483647&v=beta&t=HojYAjvFRTaYInXg2HZHaiha44fxWWcO91qQLqyCIvw',
        website: 'https://techbridgeconsulting.com',
        tier: 'silver',
        description: 'Strategic technology consulting for digital transformation.',
        active: true,
      },
      {
        name: 'AIFirst Corp',
        logo: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064413715112',
        website: 'https://aifirstcorp.com',
        tier: 'gold',
        description: 'Artificial intelligence and machine learning solutions.',
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Database seeding completed successfully!');
  console.log(`Created ${episodes.count} episodes`);
  console.log(`Created ${sponsors.count} sponsors`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
