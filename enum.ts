import { PortpholioProps } from "./components/constant/type";

export const SideBarPersonalInfo = {
  portFolioImage: "/images/portfolioPhoto.webp",
  name: "Mahmudul Hasan Rafi",
  profession: "Graphic & UI/UX designer ",
  email: "mahmudulhasanrafi@gmail.com",
  phoneNumber: "+880 1233333333",
  birthDay: {
    day: "08",
    month: "June",
    monthValue: "06",
    year: "2000",
  },
  location: {
    locationTitle: "Dhaka, Bangladesh",
    mapLink: "https://maps.app.goo.gl/VvdiXUMdAnnYPanU8",
  },
};

export const SideBarFooterIcons = [
  {
    iconURL: "/images/fb.svg",
    link: "https://www.facebook.com/profile.php?id=100077351117773&mibextid=ZbWKwL",
  },
  {
    iconURL: "/images/whatsapp.svg",
    link: "https://api.whatsapp.com/send?phone=8801879225651",
  },
  {
    iconURL: "/images/twitter.svg",
    link: "",
  },
  {
    iconURL: "/images/linkedIn.svg",
    link: "",
  },
  {
    iconURL: "/images/dribbble.svg",
    link: "https://dribbble.com/mahmudul_rafi_8/about",
  },
];

export const PageInfo = [
  {
    name: "About",
    pageLink: "/",
  },
  {
    name: "Resume",
    pageLink: "/resume",
  },
  {
    name: "Portfolio",
    pageLink: "/portfolio",
  },
  {
    name: "Blogs",
    pageLink: "/blogs",
  },
  {
    name: "Contact",
    pageLink: "/contact",
  },
];

export const AboutMeInfo = {
  description: {
    paragraph1: `I am a creative professional with 6+ years of experience in graphic design and UI/UX, focused on crafting visually appealing, user-centered experiences. Pursuing a Bachelor's in Computer Science, I blend design with technology to create intuitive solutions that balance aesthetics and functionality.`,
    paragraph2: `Beyond my academic pursuits, I am privileged to mentor budding designers, helping them refine their skills in UI/UX and graphic design. This role allows me to inspire others while constantly evolving in my craft. My approach to design is rooted in creativity, innovation, and empathy, ensuring that each project tells a story and connects with its audience. I thrive in environments where creativity meets strategy, continuously exploring new trends and pushing the boundaries of design to create impactful, lasting impressions.`,
  },
  whatIamDoingList: [
    {
      iconUrl: "/images/ui.svg",
      title: "UI/UX Designer",
      description:
        "Approach design by combining creativity with user-centered research, crafting intuitive and visually engaging interfaces that enhance user experience at every touchpoint.",
    },
    {
      iconUrl: "/images/graphics.svg",
      title: "Graphics Designer",
      description:
        "Create visually compelling designs that communicate ideas clearly, combining creativity with a strong understanding of branding and aesthetics to deliver impactful visuals.",
    },
    {
      iconUrl: "/images/mentor.svg",
      title: "Graphic Design Mentor",
      description:
        "Guide aspiring graphic designers by fostering creativity, providing constructive feedback, and helping them refine their skills to create impactful and professional designs.",
    },
    {
      iconUrl: "/images/market.svg",
      title: "Marketing Consultant",
      description:
        "Elevate brands by creating strategic, visually compelling marketing materials that engage audiences, drive conversions, and amplify brand presence across platforms.",
    },
  ],
  testimonialsList: [
    {
      iconUrl: "/images/male.svg",
      name: "MD. Ariful Rahman",
      description:
        "Working with 'Mahmudul Hasan Rafi' has transformed our design projects with his creative vision and technical expertise. He fosters an inspiring environment that motivates the entire team",
    },
    {
      iconUrl: "/images/female.svg",
      name: "Sujana Jalal Prakrity",
      description:
        "Mentoring with Rafi was invaluable, as he simplified complex concepts and fueled my growth in graphic design. His passion for nurturing talent truly sets him apart.",
    },
  ],
  clientsList: [
    {
      iconUrl: "/images/creativeIt.webp",
      link: "https://www.creativeitinstitute.com/",
    },
    { iconUrl: "/images/seito.png", link: "https://seitointernational.com/" },
    { iconUrl: "/images/coradius.webp", link: "https://coradiusitcenter.com/" },
    {
      iconUrl: "/images/pencilTech.webp",
      link: "https://in.linkedin.com/company/penciltechnologies",
    },
  ],
};

export const Resume = {
  education: {
    title: "Education",
    icon: "/images/education.svg",
    infoList: [
      {
        degreeTitle: "Bachelor of Science in Computer Engineering",
        session: "January,2022 - Present",
        result: "CGPA: 3.00 out of 4.00",
        institution: "Daffodil International University, Dhaka",
      },
      {
        degreeTitle: "Higher Secondary School Certificate",
        session: "June,2017 - April,2019",
        result: "GPA: 5.00 out of 5.00",
        institution: "Govt. Science College, Tejgaon, Dhaka",
      },
      {
        degreeTitle: "Secondary School Certificate",
        session: "January,2015 - December,2016",
        result: "GPA: 5.00 out of 5.00",
        institution: "Bright School & College, Dhaka",
      },
    ],
  },
  experinces: {
    title: "Experiences",
    icon: "/images/experience.svg",
    infoList: [
      {
        institution: "Boro vai er Basha",
        position: "Mentor of Graphics Designing",
        workingPeriod: "March, 2022 - Present",
        desc: "As a mentor, I guide aspiring graphic designers in mastering design tools like Adobe Photoshop and Illustrator. I help students develop strong visual concepts and apply design theory to practical projects. I also provide feedback on their work to improve their technical and creative skills.",
      },
      {
        institution: "Creative IT",
        position: "UI/UX Designer",
        workingPeriod: "March, 2024 - Present",
        desc: "I work on creating intuitive user interfaces for both web and mobile platforms. My role involves collaborating with developers and product teams to improve user experience by conducting research and testing. I also design wireframes and prototypes to ensure seamless user interactions and responsive design.",
      },
      {
        institution: "Boro vai er Basha",
        position: "Graphics Designer",
        workingPeriod: "March, 2022 - May, 2023",
        desc: "In this role, I was responsible for designing promotional materials, including banners, posters, and social media content. I collaborated with the marketing team to align the visual designs with campaign goals. I also handled branding tasks, ensuring consistency across all visual content.",
      },
    ],
  },
  skills: [
    {
      title: "Graphics Designing",
      tools: [
        { icon: "/images/adobeIllus.svg", name: "Adobe Illustrator" },
        { icon: "/images/adobePs.svg", name: "Adobe Photoshop" },
        { icon: "/images/adobeEx.svg", name: "Adobe Express" },
        { icon: "/images/canva.svg", name: "Canva" },
        { icon: "/images/sketch.svg", name: "Sketch" },
      ],
    },
    {
      title: "UI/UX Designer",
      tools: [
        { icon: "/images/figma.svg", name: "Figma" },
        { icon: "/images/adobeXd.svg", name: "Adobe XD" },
        { icon: "/images/proto.svg", name: "Proto.io" },
        { icon: "/images/miro.svg", name: "Miro" },
      ],
    },
    {
      title: "Others",
      tools: [
        { icon: "/images/video.svg", name: "Video Editing" },
        { icon: "/images/addvertisement.svg", name: "Add Management" },
        { icon: "/images/socialMedia.svg", name: "Social Media Marketing" },
      ],
    },
  ],
};

export const Genre_List = {
  ALL: "All",
  GRAPHICS: "Graphics Designing",
  UI_UX: "UI/UX",
  OTHERS: "Others",
};
export const Portfolio: PortpholioProps = {
  menuList: [
    Genre_List.ALL,
    Genre_List.GRAPHICS,
    Genre_List.UI_UX,
    Genre_List.OTHERS,
  ],
  projectsList: [
    {
      imgUrl: "/images/project1.webp",
      projectName: "Nonfiction Book Cover",
      projectGenre: Genre_List.GRAPHICS,
      link: "https://dribbble.com/shots/17269408-Nonfiction-Book-cover",
    },
    {
      imgUrl: "/images/project2.webp",
      projectName: "Cook Book Cover",
      projectGenre: Genre_List.GRAPHICS,
      link: "https://dribbble.com/shots/17268975-Cook-Book-Cover",
    },
    {
      imgUrl: "/images/project3.webp",
      projectName: "How To Capture Success",
      projectGenre: Genre_List.GRAPHICS,
      link: "https://dribbble.com/shots/16179256-How-To-Capture-Success",
    },
    {
      imgUrl: "/images/project4.webp",
      projectName: "Cook Book Cover",
      projectGenre: Genre_List.GRAPHICS,
      link: "https://dribbble.com/shots/17268941-Cook-Book-Cover",
    },
    {
      imgUrl: "/images/project5.webp",
      projectName: "The Fierce Wolf",
      projectGenre: Genre_List.GRAPHICS,
      link: "https://dribbble.com/shots/17268871-The-Fierce-Wolf",
    },
    {
      imgUrl: "/images/project6.webp",
      projectName: "Non Fiction Book Cover",
      projectGenre: Genre_List.GRAPHICS,
      link: "https://dribbble.com/shots/16179250-Non-Fiction-Book-Cover",
    },
  ],
};
export const Blogs = [
  {
    imgUrl: "",
    date: "",
    title: "",
    shortDes: "",
  },
];
