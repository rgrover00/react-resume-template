import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  TimelineItemCompany,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'A website about Ronnie Grover',
  description: "look for what you cant see",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Ronnie`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Stay-at-Home Dad Developer</strong>, actively seeking 
        <strong className="text-stone-100">  new projects and work opportunities</strong>
      </p> 
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">

      If you have a <strong className="text-stone-100">project or role</strong> in mind, I would  <strong className="text-stone-100"> love</strong>{' '} to discuss it with you
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://storage.googleapis.com/www.ronniegrover.com/rg-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I bring the power of cloud expertise and a decade of systems administration experience to small and medium sized businesses. As a certified Professional Google Workspace Administrator and a certified AWS Cloud Practioner I bring a dynamic approach to solving IT business challenges with web design, development and automation. I help companies optimize their online presence, streamline SaaS applications, and bridge the gap between IT and business goals.`,
 
  aboutItems: [
    {label: 'Location', text: 'TX | SC', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian / Italian / Irish / British', Icon: FlagIcon},
    {label: 'Interests', text: 'Family, Development, Gym', Icon: SparklesIcon},
    {label: 'Study', text: 'CIT Networking, Google Workspace Admin, AWS Certified Cloud Practitioner', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Solidx', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'HTML',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'Express',
        level: 4,
      },
    ],
  },
  {
    name: 'Dad developer',
    skills: [
      {
        name: 'Luck',
        level: 1,
      },
      {
        name: 'Believe',
        level: 3,
      },
      {
        name: 'Evolve',
        level: 7,
      },
    ],
  },
  {
    name: 'Super Grover developer',
    skills: [
      {
        name: 'Luck',
        level: 7,
      },
      {
        name: 'Believe',
        level: 1,
      },
      {
        name: 'Evolve',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Petro Plumbing Mockup',
    description: 'Plumbing Company Demo',
    url: 'https://petroplumbing.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: '2D Grover Adventures',
    description: 'Grover World (WIP)',
    url: 'https://2d-grover.pages.dev/',
    image: porfolioImage2,
  },
  {
    title: 'Cookies for Skylar',
    description: '(Coming Soon - V2) - Website for my amazing niece Skylar',
    url: 'https://sky.solidxit.com/',
    image: porfolioImage3,
  },
  {
    title: 'Brianna Rahn',
    description: 'Social Media Influencer',
    url: 'https://test.solidxit.com/',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2013',
    location: 'Middletown, New York',
    title: 'Computer Information Technology - Networking',
    content: <p>Understanding network components (routers, switches, firewalls), different network types (LAN, WAN, wireless), and network protocols (TCP/IP). How to protect networks from threats, implement security measures, and perform vulnerability assessments. Configuration, troubleshooting, and maintaining networks. Involving hardware and software setup, performance optimization, and user support.</p>,
  },
  {
    date: 'September 2023',
    location: 'Google Cloud Platform (GCP)',
    title: 'Professional Google Workspace Administrator',
    content: <p>Transforms business objectives into tangible Google Workspace configurations, policies, and security practices as they relate to users, content, and integrations. Through their understanding of their organization's infrastructure, Google Workspace Administrators let people work together, communicate, and access data in a secure and efficient manner.</p>,
  },
  {
    date: 'September 2023',
    location: 'Amazon Web Services (AWS)',
    title: 'AWS Certified Cloud Practitioner',
    content: <p>Technical professional who manages an organization's cloud computing architecture. They design, deploy, and maintain cloud-based solutions, and work with other IT professionals to ensure the cloud environment is secure, available, and operates as expected.</p>,
  },
];

export const experience: TimelineItemCompany[] = [
  {
    date: 'August 2018 - May 2023',
    company: '11:11 Systems',
    title: 'IT Manager',
    content: (
      <div>
        • Spearheaded the development and implementation of the IT department for a high-growth cloud-solution provider, ensuring smooth operations of IT infrastructure, computer systems, security measures, communication systems, and devices.<div> <br /></div>

        • Designed and implemented automation workflows utilizing Okta, Jamf, Active Directory, Google Workspace, and other essential business systems to streamline employee lifecycle processes. Increased efficiency and accuracy by automating repetitive IT tasks.<div> <br /></div>

        • Partner across business departments to identify, evaluate, and resolve technical issues related to IT systems and integrations. Develop and implement automation workflows to facilitate user provisioning, deprovisioning, and role based access control.<div> <br /></div>

        • Collaborate with IT leadership and the security team to implement and enforce security measures, compliance requirements, and data protection.
      </div>
    ),
  },
  {
    date: 'May 2016 - May 2018',
    company: 'ConvergeOne',
    title: 'Network Engineer',
    content: (
      <div>
        • Troubleshooted, diagnosed, and resolved critical network outages for government agencies, minimizing downtime and ensuring the continuity of essential services.<div> <br /></div>
        • Traveled extensively to government sites across New York, performing on-site installation, configuration, and optimization of complex network infrastructure.<div> <br /></div>
        • Executed network upgrades and migrations for government entities, adhering to strict security protocols and change management procedures.<div> <br /></div>
        • Provided on-call support for government clients, ensuring rapid response to critical network incidents outside standard business hours.
      </div>
    ),
  },
  {
    date: 'May 2012 - May 2016',
    company: 'Charter Communications',
    title: 'Commercial Tech Ops Support',
    content: (
      <div>
        • Streamlined technical support processes, reducing average response time by 20% and increasing customer satisfaction by 15%. Utilized foundational web development skills to help coordinate logistical requirements, ensuring timely delivery of materials and reducing operational downtime by 10%.<div> <br /></div>
        • Conducted thorough hardware inventory of all projects, ensuring accurate tracking and effective allocation to local points of contact, resulting in improved efficiency and streamlined operations.<div> <br /></div>
        • Utilized technical skills in software testing and analysis to identify and resolve compatibility issues, ensuring smooth operations for end users.<div> <br /></div>
        • Served as the main point of contact for Tier-1 and Tier-2 support staff, handling all technical issues and escalations.
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jeff Polczynski',
      text: 'Ronnie is the IT Manager everyone dreams of: can-do attitude, quick to respond, friendly, motivated, and always gets things resolved. There has been multiple times I had to asked Ronnie and team for some oddball request for help with an impossible due date. Time and again, he took my walk-up request, formulated it into a ticket, and solved my problem quicker than should be possible',
      image: 'https://storage.googleapis.com/www.ronniegrover.com/images/linkedin01.png',
    },
    {
      name: 'Andrew Cruz',
      text: 'Ronnie is an excellent leader and mentor. He leads by example and is not above getting in the trenches and working side by side with his team. He is very knowledgeable and is an asset to any organization he is apart of.',
      image: 'https://storage.googleapis.com/www.ronniegrover.com/images/linkedin02.png',
    },
  ],
};

/**
 * Contact section 
 */

export const contact: ContactSection = {
  headerText: 'Get in touch, or schedule a meeting',
  description: 'As stay-at-home dad developer I have a deep understanding of the challenges faced by small businesses, entrepreneurs, and individuals, making everything more relatable and better suited to meeting your specific needs.',
  items: [
    {
      type: ContactType.Email,
      text: 'rkg@ronniegrover.com',
      href: 'mailto:rkg@ronniegrover.com',
    },
    {
      type: ContactType.Location,
      text: 'OK | NY | TX | SC',
      href: 'https://www.google.ca/maps/place/Mid+Del+Taco+Inc/@35.4494386,-97.4409019,19.5z/data=!4m6!3m5!1s0x87b21620e38f1a41:0xf52603da124d63e6!8m2!3d35.4494486!4d-97.4404811!16s%2Fg%2F1tc_95b_?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@ronniekgrover',
      href: 'https://www.instagram.com/ronniekgrover/',
    },
    {
      type: ContactType.Github,
      text: 'rgrover',
      href: 'https://github.com/rgrover00',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rgrover00'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ronniegrover/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ronniekgrover/'},
  {label: 'Calendar', Icon: CalendarDaysIcon, href: 'https://cal.com/ronniegrover'},
];
