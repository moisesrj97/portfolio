export const info = {
  baseUrl: 'https://astro-portfolio-uzair.vercel.app',
  name: 'Moisés Rodríguez',
  jobDescription: 'Fullstack Developer',
  about: ``,

  experience: [
    {
      name: 'Codurance (Remote)',
      location: 'Barcelona, Spain',
      startDate: 'May 2023',
      endDate: 'Present',
      description: [],
    },

    {
      name: 'Swipoo (Remote)',
      location: 'Barcelona, Spain',
      startDate: 'Apr 2022',
      endDate: 'May 2023',
      description: [
        "- Developed new NextJS Swipoo's frontend page.",
        "- Migrated old Swipoo's frontend page.",
        "- Developed multiple endpoints for main Swipoo's backend service.",
        "- Developed Swipoo's headless CMS.",
        "- Developed Swipoo's document collection form, fully tested with Cypress.",
        '- Expanded DevOps implementations and infrastructure, integrating external monitoring tools.',
        '- Participate in DevOps and infrastructure management, using AWS tools such as EC2, EBS, S3, CodePipeline, etc.',
        '- Integrate different third-party services through SDKs, APIs, and WebHooks',
        '- Participate in the development of microservices and migration from monolith infrastructure.',
        '- Design, lead and participate in the development of a new enrollment service.',
        '- Design, lead and participate in the development of a new digital signature service.',
        '- Design, lead and participate in the development of a new notifications service.',
        '- Mentor new teach team integrants',
        '- Developed Slack bot in Golang',
        '- Lead the migration to IaC using Terraform and Terragrunt.',
      ],
    },
  ],

  education: [
    {
      name: 'Fullstack Development Bootcamp',
      location: 'ISDI Coders (before known as Skylab Coders Academy)',
      startDate: '2021',
      endDate: '2021',
      description: [
        '+1000 hours of intensive training in Fullstack (MERN Stack) Development.',
      ],
    },
    {
      name: 'MSc in Physical Therapy',
      location: 'University of Alcalá',
      startDate: '2019',
      endDate: '2021',
      description: [],
    },
    {
      name: 'Degree in Physical Therapy',
      location: 'University of Alcalá',
      startDate: '2015',
      endDate: '2019',
      description: [],
    },
  ],

  socialMedia: {
    facebook: '',
    twitter: '',
    github: 'https://github.com/moisesrj97',
    email: 'moisesrj97@gmail.com',
    linkedin: 'https://www.linkedin.com/in/moisesrodriguezjurado/',
  },

  // Change this and add tag system
  projects: [
    {
      title: 'Astro Portfolio',
      isFeatured: true,
      thumbnail: '/assets/images/astro-portfolio.png',
      githubUrl: 'https://github.com/uzzii-21/astro-portfolio',
      liveUrl: 'https://astro-portfolio-uzair.vercel.app/',
    },
  ],
};
