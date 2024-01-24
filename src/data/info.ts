export const info = {
  baseUrl: 'https://moisesrodriguez.netlify.app',
  name: 'Moisés Rodríguez',
  jobDescription: 'Fullstack Developer',
  about:
    "I'm a Software Developer with a background in Physical Therapy. I'm passionate about technology, animals, sports and videogames. I'm a fast learner and I love to work in teams. I'm always looking for new challenges and opportunities to grow as a professional and as a person.",

  experience: [
    {
      name: 'Codurance (Remote) - Software Craftsperson',
      location: 'Barcelona, Spain',
      startDate: 'Aug 2023',
      endDate: 'Present',
      description: [],
    },
    {
      name: 'Codurance (Remote) - Software Craftsperson In Training',
      location: 'Barcelona, Spain',
      startDate: 'May 2023',
      endDate: 'Aug 2023',
      description: [],
    },

    {
      name: 'Swipoo (Remote) - Fullstack Developer',
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
    {
      name: 'ISDI Coders - Assistant Teacher',
      location: 'Madrid, Spain',
      startDate: 'Dec 2021',
      endDate: 'Apr 2022',
      description: [
        'Guide and mentor Bootcamp students learning web development. Assisting the principal teacher in resolving doubts, generating resources, and teaching about the tools, technologies, and good practices imparted in the class both in-person and online.',
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
      description: ['- Graduated with honors'],
    },
  ],

  socialMedia: {
    github: 'https://github.com/moisesrj97',
    email: 'mailto:moisesrj97@gmail.com',
    linkedin: 'https://www.linkedin.com/in/moisesrodriguezjurado/',
  },

  projects: [
    {
      title: 'Express-o-Matic',
      isFeatured: true,
      thumbnail: '/assets/images/express-o-matic.jpeg',
      githubUrl: 'https://github.com/moisesrj97/express-o-matic',
      liveUrl: 'https://github.com/moisesrj97/express-o-matic',
    },
    {
      title: 'dotenv-switch',
      isFeatured: true,
      thumbnail: '/assets/images/dotenv-switch.jpeg',
      githubUrl: 'https://github.com/moisesrj97/dotenv-switch',
      liveUrl: 'https://github.com/moisesrj97/dotenv-switch',
    },
    {
      title: 'Nats GUI',
      isFeatured: true,
      thumbnail: '/assets/images/nats-gui.jpeg',
      githubUrl: 'https://github.com/moisesrj97/nats-gui',
      liveUrl: 'https://github.com/moisesrj97/nats-gui',
    },
  ],
  talks: [
    {
      title: 'Storybook: Beyond the reusable component',
      date: new Date('2022-09-16'),
      place: "🇪🇸 Swipoo's Lightning Talks.",
      slides:
        'https://docs.google.com/presentation/d/1Qet9EsvvNQtAddBw-XVDNK3HRW27ti7m8GHNpeC3Ys8/edit?usp=sharing',
    },
    {
      title: 's3 pre-signed url',
      date: new Date('2022-10-28'),
      place: "🇪🇸 Swipoo's Lightning Talks.",
      slides:
        'https://docs.google.com/presentation/d/1zooyU-iIB2b992TkOah9FNRu_oLm223S6WJu-jltgrM/edit?usp=sharing',
    },
    {
      title: 'DDD - Hexagonal 101. Good practices at macro scale',
      date: new Date('2022-11-25'),
      place: '🇪🇸 ISDI Coders.',
      slides:
        'https://docs.google.com/presentation/d/1oSk1uZyfIqpn4Axc8aTUO5NKr8Karzf7sH2oNd3VB7A/edit?usp=sharing',
    },
    {
      title: 'DDD - Hexagonal 101. Clean architecture without dying trying',
      date: new Date('2023-03-10'),
      place: '🇪🇸 ISDI Coders.',
      slides:
        'https://docs.google.com/presentation/d/1KY5G3GLGLpF7CSnyN99JuVsX2kkgn2PDzy41rG7HL6k/edit?usp=sharing',
    },
    {
      title: 'Reinventadxs',
      date: new Date('2023-03-30'),
      place: '🇪🇸 MIL - My tech plan.',
      video: 'https://youtu.be/oypKfP5AZqA?t=1337',
      slides:
        'https://docs.google.com/presentation/d/1KcCzLxw6MBejIwln4rnyDaaAHkw34OE5Euwh-eydHJM/edit?usp=sharing',
    },
    {
      title:
        'Terraform - Because we are better at coding than we are at infrastructure',
      date: new Date('2023-04-21'),
      place: "🇪🇸 Swipoo's Lightning Talks.",
      slides:
        'https://docs.google.com/presentation/d/1qoiowrosbgZrdrbZz_c0OFOr2lmnZrE1G-q_NqZV-Zc/edit?usp=sharing',
    },
    {
      title: 'Kitchen Nightmares - Understanding Message Brokers',
      date: new Date('2023-12-15'),
      place: "🇪🇸 Codurance's Open Space",
    },
  ],
};
