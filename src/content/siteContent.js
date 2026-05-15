import newsCommunityImage from '../assets/Cecilia_fofo_Ashaley_pic_about .jpeg'
import newsEducationImage from '../assets/NEWDA LOGO.png'
import newsHealthcareImage from '../assets/NEWDA LOGO.png'

export const siteContent = {
  home: {
    latestNews: [
      {
        id: 1,
        title: 'Community Development Impact',
        excerpt: 'Cecilia fofo Ashaley is a mother with 9 years lived experience ...',
        image: newsCommunityImage,
        date: '2026-05-15',
        badge: 'New',
        link: '/blog/1'
      },
      {
        id: 2,
        title: '',
        excerpt: ' Loading...',
        image: newsEducationImage,
        date: '2026-05-10',
        link: '/blog/2'
      },
      {
        id: 3,
        title: '',
        excerpt: 'Loading...',
        image: newsHealthcareImage,
        date: '2026-05-05',
        link: '/blog/3'
      }
    ],
    impactCards: [
      {
        id: 'community',
        title: 'Community Development',
        description: 'Enhanced participation of women with disabilities in local development planning and community initiatives.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
        link: '/gallery/community'
      },
      {
        id: 'education',
        title: 'Education Initiatives',
        description: 'Increased access to education, vocational training, leadership development, and digital skills opportunities for women with disabilities.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
        link: '/gallery/education'
      },
      {
        id: 'Social Inclusion',
        title: 'Social Inclusion',
        description: 'Stronger peer support networks and solidarity among women with disabilities across communities',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
        link: '/gallery/healthcare'
      }
    ]
  },
  blog: {
    categories: ['All', 'Community Development', 'Education', 'Healthcare', 'Partnerships', 'Volunteers', 'Infrastructure'],
    posts: [
      {
        id: 1,
        title: 'New Community Center Opens in Rural District',
        excerpt: 'We are thrilled to announce the opening of our new community center, providing essential services to over 500 families.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        date: '2024-03-15',
        category: 'Community Development',
        author: 'NEWDA Team'
      },
      {
        id: 2,
        title: 'Education Program Reaches 1000 Students',
        excerpt: 'Our education initiative has successfully reached its milestone of enrolling 1000 students in quality learning programs.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        date: '2024-03-10',
        category: 'Education',
        author: 'NEWDA Team'
      },
      {
        id: 3,
        title: 'Healthcare Outreach Success Story',
        excerpt: 'Last month we provided free healthcare services to remote communities, screening over 300 individuals.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        date: '2024-03-05',
        category: 'Healthcare',
        author: 'NEWDA Team'
      },
      {
        id: 4,
        title: 'Partnership with Local Schools Announced',
        excerpt: 'NEWDA partners with 10 local schools to enhance educational infrastructure and provide learning materials.',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
        date: '2024-02-28',
        category: 'Partnerships',
        author: 'NEWDA Team'
      },
      {
        id: 5,
        title: 'Volunteer Training Program Launch',
        excerpt: 'Join our new volunteer training program designed to equip community members with essential skills.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
        date: '2024-02-20',
        category: 'Volunteers',
        author: 'NEWDA Team'
      },
      {
        id: 6,
        title: 'Water Well Project Completed',
        excerpt: 'Clean water now accessible to 200 families thanks to our new water well project in the eastern region.',
        image: 'https://images.unsplash.com/photo-1559436888-0b9e12ea0a99?w=800&q=80',
        date: '2024-02-15',
        category: 'Infrastructure',
        author: 'NEWDA Team'
      }
    ]
  },
  gallery: {
    categories: {
      community: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
          title: 'Community Workshop',
          description: 'Local community members participating in skill development workshop',
          category: 'Community Development'
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
          title: 'Community Meeting',
          description: 'Gathering to discuss community needs and solutions',
          category: 'Community Development'
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80',
          title: 'Resource Distribution',
          description: 'Distributing essential resources to community members',
          category: 'Community Development'
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&q=80',
          title: 'Infrastructure Development',
          description: 'Building sustainable infrastructure for communities',
          category: 'Community Development'
        }
      ],
      education: [
        {
          id: 5,
          url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
          title: 'Classroom Learning',
          description: 'Students engaged in interactive learning activities',
          category: 'Education'
        },
        {
          id: 6,
          url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
          title: 'Outdoor Education',
          description: 'Children participating in outdoor learning programs',
          category: 'Education'
        },
        {
          id: 7,
          url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
          title: 'Technology Training',
          description: 'Computer literacy training for students',
          category: 'Education'
        },
        {
          id: 8,
          url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
          title: 'Library Resources',
          description: 'Students accessing educational resources in library',
          category: 'Education'
        }
      ],
      healthcare: [
        {
          id: 9,
          url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
          title: 'Medical Checkup',
          description: 'Healthcare professionals providing medical examinations',
          category: 'Healthcare'
        },
        {
          id: 10,
          url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
          title: 'Health Outreach',
          description: 'Mobile health clinic reaching remote communities',
          category: 'Healthcare'
        },
        {
          id: 11,
          url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
          title: 'Vaccination Program',
          description: 'Community vaccination and immunization program',
          category: 'Healthcare'
        },
        {
          id: 12,
          url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
          title: 'Health Education',
          description: 'Teaching health and wellness practices to communities',
          category: 'Healthcare'
        }
      ]
    }
  }
}
