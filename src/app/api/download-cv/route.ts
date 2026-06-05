import { NextResponse } from 'next/server';
import { portfolioData } from '@/data/portfolioData';

export async function GET() {
  try {
    // Create CV content
    const cvContent = `MUHAMMAD AQIL FAHMI
IT PROGRAMMER DEVELOPER
${portfolioData.location} | ${portfolioData.phone} | ${portfolioData.email}

PROFESSIONAL SUMMARY
${portfolioData.shortBio}

TECHNICAL SKILLS
Languages: ${portfolioData.skills.languages.join(', ')}
Frameworks: ${portfolioData.skills.frameworks.join(', ')}
Databases: ${portfolioData.skills.databases.join(', ')}
Tools: ${portfolioData.skills.tools.join(', ')}

SOFT SKILLS
${portfolioData.softSkills.join(', ')}

EDUCATION
${portfolioData.education.map(edu => `${edu.degree} - ${edu.institution} (${edu.period})`).join('\n')}

CERTIFICATIONS
${portfolioData.certifications.join('\n')}

LANGUAGES
${portfolioData.languages.join('\n')}

PROJECT EXPERIENCE
${portfolioData.projects.map(proj => `${proj.title} (${proj.startDate} - ${proj.endDate})\n${proj.description}`).join('\n\n')}

EXPERIENCE
${portfolioData.experience.map(exp => `${exp.position} at ${exp.company} (${exp.period})\n${exp.description}`).join('\n\n')}
`;

    // Return file as downloadable response
    return new NextResponse(cvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': 'attachment; filename="Muhammad_Aqil_Fahmi_CV.txt"',
        'Content-Length': Buffer.byteLength(cvContent).toString(),
      },
    });
  } catch (error) {
    console.error('Error downloading CV:', error);
    return NextResponse.json(
      { error: 'Gagal download CV' },
      { status: 500 }
    );
  }
}
