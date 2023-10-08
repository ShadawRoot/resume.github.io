import '@fortawesome/fontawesome-free/css/all.min.css';

import {
    AcademicCapIcon,
    CalendarIcon,
    DownloadIcon,
    FlagIcon,
    MapIcon,
    OfficeBuildingIcon,
    SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TextAnimation from '../components/TextAnimation'
import awsPic from '../images/favtech/aws.webp';
import dockerPic from '../images/favtech/docker.webp';
import gitPic from '../images/favtech/git.webp';
import githubPic from '../images/favtech/github.webp';
import haPic from '../images/favtech/homeassistant.webp';
import jetbrainPic from '../images/favtech/jetbrain.webp';
import javascriptPic from '../images/favtech/js.webp';
import mongoDB from '../images/favtech/mongoDB.webp';
import mysqlPic from '../images/favtech/mysql.webp';
import netlifyPic from '../images/favtech/netlify.webp';
import oraclePic from '../images/favtech/oracle.webp';
import pythonPic from '../images/favtech/python.webp';
import reactPic from '../images/favtech/react-js.webp';
import sshPic from '../images/favtech/ssh.webp';
import ubuntuPic from '../images/favtech/ubuntu.webp';
import vmwarePic from '../images/favtech/vmware.webp';
import heroImage from '../images/header-background.webp';
import mediaRobot from '../images/portfolio/mediarobot.webp';
import pyImageCompressor from '../images/portfolio/py-impage-compressor.webp';
import resumeWebsite from '../images/portfolio/resume_website.webp';
import topTen from '../images/portfolio/top10.webp';
import profilePic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
    About,
    ContactSection,
    ContactType,
    FavoriteTechItem,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Abdelilah LAMHAMDI',
    description: "My Professional Resume and Portfolio Website.",
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
    FavoriteTech: "favoritetech"

} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage,
    name: `I'm Abdelilah LAMHAMDI.`,
    description: (
        <>
            <p className="prose-sm text-stone-50 sm:prose-base lg:prose-lg">
                I'm working as <strong className="text-sky-500">Infra & System Consultant </strong> I am specialized in <i className="text-sky-200 fa-brands vmwarePic">CLOUD & ETHICAL HACKING </i> enthusiast. <br></br> Currently
                occuping the position at <strong className="text-sky-200">COMPANY</strong> as a Full Stack Infra Enginner.
            </p>


            <div className='lg:flex-row text-left bg-black w-4/5 p-2 rounded-lg'>
                <div className='text-stone-300'><TextAnimation /></div>
            </div>

            {/* <p className="prose-sm text-stone-300 sm:prose-base">
        
         <i className="text-yellow-500 fa-regular fa-face-laugh-wink"></i>
      </p> */}
        </>
    ),
    actions: [
        {
            href: 'https://github.com/ShadawRoot/resume.github.io/blob/main/src/images/CV_abdelilah_lamhamdi.pdf',
            text: 'Resume',
            primary: true,
            Icon: DownloadIcon,
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
    profileImageSrc: profilePic,
    description: `My experience spans over 15 years in IT fields (systems, IT infrastructure, storage, backup, networks, IS security, and project management) and I have a strong passion for them. 
My work involves integrating IT Infrastructure and architecture, and I am also intrigued by Ethical Hacking. 
DevOps self-studying has been underway since June 2022..`,
    aboutItems: [
        {label: 'Location', text: 'Center, Maroc', Icon: MapIcon},
        {label: 'Age', text: '40', Icon: CalendarIcon},
        {label: 'Nationality', text: 'Marocaine', Icon: FlagIcon},
        {label: 'Interests', text: 'IT, Gadgets, Diving', Icon: SparklesIcon},
        {label: 'Study', text: 'PASCAL PAOLI , France', Icon: AcademicCapIcon},
        {label: 'Employment', text: 'Freelancer', Icon: OfficeBuildingIcon},
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Spoken languages',
        skills: [
            {
                name: 'English',
                level: 7,
            },
            {
                name: 'French',
                level: 8,
            },
            {
                name: 'Arabic',
                level: 10,
            },
        ],
    },
    {
        name: 'Systems',
        skills: [
            {
                name: 'Linux (RedHAT, Debian)',
                level: 6,
            },
            {
                name: 'Windows (Desktop & Server)',
                level: 8,
            },
            {
                name: 'VMware (vSphere, vCenter, vRops)',
                level: 7,
            },

        ],
    },
    {
        name: 'Project Management',
        skills: [
            {
                name: 'Planning',
                level: 9,
            },
            {
                name: 'Budget',
                level: 6,
            },
            {
                name: 'Quality',
                level: 6,
            },
        ],
    },
    {
        name: 'Security SI',
        skills: [
            {
                name: 'SOC',
                level: 8,
            },
            {
                name: 'Endpoint Security',
                level: 7,
            },
            {
                name: 'PenTesting',
                level: 6,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Project1',
        description: 'React, Python, MySql based AI websites engine that building itself automatically. Building it own content, graphics, articles and also promoting it own content by google ads and self managing promoted campaigns based on statistics and income.',
        url: 'https://shadawroot.github.io/resume.github.io/',
        image: topTen,
    },
    {
        title: 'Project2',
        description: "Pure Python Bot. Which is extracting fresh data from marketplaces such as AliExpress and Amazon and then creating video based reviews. All videos uploaded by API to YouTube. Driving affiliated traffic and creating income automatically. Click Here for Video Sample.",
        url: 'https://shadawroot.github.io/resume.github.io/',
        image: mediaRobot,
    },
    {
        title: 'Project3',
        description: "This is my personal resume website. React, JS, TYPESCRIPT based. It based on open source code, however many key features added and fixed by me. More features will be added... Click Here for Source Code.",
        url: 'https://shadawroot.github.io/resume.github.io/',
        image: resumeWebsite,
    },
    {
        title: 'Project4',
        description: "Open-Source small weight Python based tool. This tool convert multiple images at once to modern formats such as webp. Can speed up any website with a single command.",
        url: 'https://shadawroot.github.io/resume.github.io/',
        image: pyImageCompressor,
    },

];

/**
 * FavoriteTechItem section
 */
export const FavoriteTechItems: FavoriteTechItem[] = [
    {
        title: 'Python 3+',
        image: pythonPic,
    },

    {
        title: 'GitHub',
        image: githubPic,
    },
    {
        title: 'Git',
        image: gitPic,
    },

    {
        title: 'React',
        image: reactPic,
    },
    {
        title: 'AWS',
        image: awsPic,
    },
    {
        title: 'Ubuntu',
        image: ubuntuPic,
    },
    {
        title: 'Home Assistant',
        image: haPic,
    },
    {
        title: 'Netlify',
        image: netlifyPic,
    },

    {
        title: "vmware",
        image: vmwarePic,
    },
    {
        title: 'Oracle Cloud',
        image: oraclePic,
    },
    {
        title: 'SSH',
        image: sshPic,
    },
    {
        title: 'Docker',
        image: dockerPic,
    },
    {
        title: 'MySql/SQL',
        image: mysqlPic,
    },
    {
        title: 'mongoDB',
        image: mongoDB,
    },
    {
        title: 'JavaScript',
        image: javascriptPic,
    },
    {
        title: "JetBrain IDE",
        image: jetbrainPic,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: '2010-2011',
        location: 'FENA Business School',
        title: 'MASTER2',
        content: <p>Master of Business Administration (MBA).</p>,
    },
    {
        date: '2009-2010',
        location: 'University Corsica Pasquale Paoli',
        title: 'MASTER1',
        content: <p>Integration of Information Systems</p>,
    },
        {
        date: '2004-2006',
        location: 'Specialized Institute of Applied Technology of Mohammedia',
        title: 'DUG (BAC+2)',
        content: <p>Network and Security of Information Systems</p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: 'Apr 2023 - Present',
        location: 'Toulouse, France',
        title: 'Senior Systems Microsoft/Linux/Virtualization Engineer.',
        content: (
            <ul className='ml-5 list-disc'>
                <li>Assurer la MCO de l’infrastructure système et réaliser les projets de mise à jour.</li>
                <li>Handle incidents, requests and infrastructure problems according to ITIL standards..</li>
            </ul>
        ),
    },
    {
        date: 'Feb 2022 -March 2023',
        location: 'Toulouse, France',
        title: 'Infrastructure Consultant',
        content: (
            <ul className='ml-8 list-disc'>
                <li>Provide L2/L3 support for Windows and VMware systems.</li>
                <li>Supervise infrastructures and intervene on production incidents.</li>          
            </ul>
        ),
    },
    {
        date: 'Jan 2016 - Dec 2022',
        location: 'Tanger, Morocco',
        title: 'Cloud and Systems Enginner',
        content: (
            <ul className='ml-5 list-disc'>
                <li>Provide L2/L3 support for Cloud Based on VMware & RHEV systems</li>
                <li>Supervise infrastructures and intervene on production incidents L2/L3.</li>
            </ul>
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
            name: 'Person1',
            text: "Without doubt one of the most talented programmers out there.  I always go back to Abdelilah when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional.",
            image: '/testimonials/hanan.webp',
            alt: "ITEM",
        },
        {
            name: 'Person2',
            text: "I've known Abdelilah for many years now, he's a very smart and talented guy. He always strives for the best in what he does, and you can be certain that he will not let you down.",
            image: '/testimonials/tzuriel.webp',
            alt: "ITEM",
        },
        {
            name: 'Person3',
            text: "Any problem, malfunction or other hardware or software related issue that so called experts can't find or refuse to handle with hundred of excuses such as: not worth it, impossible. Abdelilah probably will do quickly and hassle free. Very glad that I've met him and always able to direct to him some of my challenges. For sure, one of the most talented guys I've ever met.",
            image: '/testimonials/marina.webp',
            alt: "ITEM",
        },
    ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch.',
    description: 'You can get in touch with me by email or simply by filling the contact form.',
    items: [
        {
            type: ContactType.Email,
            text: 'abdelilah.lamhamdi@outlook.com',
            href: 'mailto:abdelilah.lamhamdi@outlook.com',
        },
        {
            type: ContactType.Location,
            text: 'Center, Toulouse',
            href: 'https://www.google.com/maps/place/toulouse',
        },
        {
            type: ContactType.Github,
            text: 'Abdelilah LAMHAMDI',
            href: 'https://github.com/ShadawRoot',
        },
    ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ShadawRoot'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/abdelilah-lamhamdi-82985733/'},
];
