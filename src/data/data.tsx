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
                I'm working as <strong className="text-sky-200">Infra & System Enginner </strong> & <i className="text-sky-200 fa-brands vmwarePic">CLOUD & ETHICAL HACKING </i> enthusiast. <br></br> Currently
                working at  <strong className="text-sky-200"> Confidential Company</strong> as a Full Stack Infra Enginner.
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
            href: 'https://drive.google.com/file/d/1M5jndPJIw2H-3_0ZJl39I8PsDZCZmLI-/view?usp=drive_link',
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
    description: `In my opinion, information technology is not just about binary digits, but more about building strong and authentic values in companies.
Authenticity, respect, innovation, sharing, and commitment are strong values in my opinion to cultivate in a dynamic, innovative, simple, sometimes complex, but always surprising universe.`,
    aboutItems: [
        {label: 'Location', text: 'Touulouse, France', Icon: MapIcon},
        {label: 'Age', text: '40', Icon: CalendarIcon},
        {label: 'Nationality', text: 'Marocaine', Icon: FlagIcon},
        {label: 'Interests', text: 'IT, Gadgets, Diving', Icon: SparklesIcon},
        {label: 'Study', text: 'Pascal Poali, France', Icon: AcademicCapIcon},
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
        name: 'Frontend development',
        skills: [
            {
                name: 'React',
                level: 7,
            },
            {
                name: 'JavaScript',
                level: 8,
            },
            {
                name: 'Typescript',
                level: 6,
            },

        ],
    },
    {
        name: 'Backend development',
        skills: [
            {
                name: 'Python',
                level: 9,
            },
            {
                name: 'Java',
                level: 4,
            },
            {
                name: 'Node.js',
                level: 3,
            },
        ],
    },
    {
        name: 'Mobile development',
        skills: [
            {
                name: 'React Native',
                level: 4,
            },
            {
                name: 'Flutter',
                level: 2,
            },
            {
                name: 'Swift',
                level: 2,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Top10',
        description: 'React, Python, MySql based AI websites engine that building itself automatically. Building it own content, graphics, articles and also promoting it own content by google ads and self managing promoted campaigns based on statistics and income.',
        url: 'https://github.com/georgekhananaev',
        image: topTen,
    },
    {
        title: 'MediaRobot',
        description: "Pure Python Bot. Which is extracting fresh data from marketplaces such as AliExpress and Amazon and then creating video based reviews. All videos uploaded by API to YouTube. Driving affiliated traffic and creating income automatically. Click Here for Video Sample.",
        url: 'https://www.youtube.com/watch?v=PeguOBRrJXM',
        image: mediaRobot,
    },
    {
        title: 'Resume Website',
        description: "This is my personal resume website. React, JS, TYPESCRIPT based. It based on open source code, however many key features added and fixed by me. More features will be added... Click Here for Source Code.",
        url: 'https://github.com/georgekhananaev/resume-website',
        image: resumeWebsite,
    },
    {
        title: 'py-image-compressor',
        description: "Open-Source small weight Python based tool. This tool convert multiple images at once to modern formats such as webp. Can speed up any website with a single command.",
        url: 'https://github.com/georgekhananaev/py-image-compressor',
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
        date: '2022-2023',
        location: 'HackerU Collage',
        title: 'Java, OCA',
        content: <p>Java Full-Stack studies with mobile applications development orientation and modern frameworks.</p>,
    },
    {
        date: '2020-2020',
        location: 'CampusIL',
        title: 'Python Course',
        content: <p>Python + Advanced Python Libraries such as Pandas, NumPy, Requests, FastAPI, Flask and more...</p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: 'Dec 2022 - Present',
        location: 'Bangkok, Thailand',
        title: 'Full Stack Developer & Tech Manager.',
        content: (
            <ul className='ml-5 list-disc'>
                <li>Python, React based development of internal company services and integrations.</li>
                <li>Responsible for management of creators, SEO, and all digital campaigns and services.</li>
            </ul>
        ),
    },
    {
        date: '2019 - 2022',
        location: 'Majestier, Singapore',
        title: 'Backend Software Developer',
        content: (
            <ul className='ml-8 list-disc'>
                <li>Developed from scratch Python based backend system which synchronizing multiple
                    e-commerce platforms & marketplaces such as eBay, Shopify, BigCommerce, WooCommerce
                    and more in real-time.
                </li>
                <li>Developed data analyzing tools, reports and other automatization's with Python.</li>
                <li>Often worked with AWS services such as RDS, VPS and Linux based servers.</li>
                <li>Maintained close relationships with our customers to understand the business needs.</li>

            </ul>
        ),
    },
    {
        date: '2016 - 2019',
        location: 'Kanzezol, Israel',
        title: 'DevOps Software Developer',
        content: (
            <ul className='ml-5 list-disc'>
                <li>Developed automatization's for our e-commerce stores by Python & VBA.</li>
                <li>Increased customer service efficiency by removing all routine tasks with automatization's.</li>
                <li>Very often did data-based decisions and adjusted the software accordingly.</li>
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
            name: 'Hanan Hananaev',
            text: "Without doubt one of the most talented programmers out there.  I always go back to George when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional.",
            image: '/testimonials/hanan.webp',
            alt: "ITEM",
        },
        {
            name: 'Tzuriel Nimni',
            text: "I've known George for many years now, he's a very smart and talented guy. He always strives for the best in what he does, and you can be certain that he will not let you down.",
            image: '/testimonials/tzuriel.webp',
            alt: "ITEM",
        },
        {
            name: 'Marina Rapaport',
            text: "Any problem, malfunction or other hardware or software related issue that so called experts can't find or refuse to handle with hundred of excuses such as: not worth it, impossible. George probably will do quickly and hassle free. Very glad that I've met him and always able to direct to him some of my challenges. For sure, one of the most talented guys I've ever met.",
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
