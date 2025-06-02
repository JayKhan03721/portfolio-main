export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building trust with clients by fostering open dialogue and collaboration ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm Very flexible with time and communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Web developer specializing in front-end, eager to expand into all areas of web development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a dynamic 3D animated game with interactive elements.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "A Replica of Zentry Webpage",
    des: "A replica of the Zentry webpage, showcasing a modern design and responsive layout with the use of GSAP.",
    img: "/p26.jpg",
    iconLists: ["/re.svg", "/vite.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://jaykhan03721.github.io/Zentry-replica/", // ✅ Live link placed here
  },
  {
    id: 2,
    title: "My Portfolio Website",
    des: "A portfolio website designed to showcase creativity, interactivity, and unique digital design.",
    img: "/Portfolio.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", ],
    link: "", // TODO: Add live link here later
  },
  {
    id: 3,
    title: "My First Project",
    des: "My first progect created using Vite + React",
    img: "/Nalico.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://jaykhan03721.github.io/TeamProject/", // TODO: Add live link here later
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/vite.svg", "/tail.svg", "/re.svg", "/three.svg", "/gsap.svg"],
    link: "https://jaykhan03721.github.io/Iphone/", // ✅ Live link placed here
  },
];


export const testimonials = [
  {
    quote:
    "Throughout my journey in web design and development, I’ve had the opportunity to work on a variety of creative projects that reflect both technical skill and artistic vision. From building fully responsive, interactive websites to crafting custom 3D experiences, each project has helped me grow and refine my craft.Notable achievements include designing animated user interfaces, developing cross-device experiences, and replicating high-profile websites to push my creative limits. These experiences continue to fuel my passion for creating meaningful digital experiences.",
    name: "Jamal Khan",
    title: "Creator of this portfolio",
    image: "/MyLOGO.png", // unique image path
  },
  {
    quote:
      " Attended Diamond Secondary School for 5 years, completing the CXC exams in May/June 2024. I successfully sat for 8 subjects, earning 6 Grade Ones, 1 Grade Two, and 1 Grade Three. I received a CXC Distinction and achieved straight A's in two subjects.",
    name: "Distinction Certificate",
    title: "Caribbean Examinations Council (CXC)",
    image: "/CXC.jpg", // unique image path
  },
  {
    quote:
      "Completed a hands-on training course under the instruction of Mr. Amar Ram from September to December 6, 2024. This program strengthened my practical skills and technical knowledge, culminating in a certificate awarded by the Board of Industrial Training, Guyana.",
    name: "Certificate in Automotive Electrical",
    title: "Board of Industrial Training Guyana",
    image: "/BIT.jpeg", // unique image path
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   image: "/MyLOGO.png", // unique image path
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   image: "/MyLOGO.png", // unique image path
  // },
];

export const companies = [
  {
    id: 1,
    name: "Front End Developer",
    img: "/MyLOGO.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CXC",
    img: "/CXC.jpg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "BIT",
    img: "/BIT.jpeg",
    nameImg: "/BITName.jpeg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Web Development Intern",
    desc: "Self-taught in HTML, CSS, JavaScript, React.js, and various front-end frameworks over the course of 3 months, with hands-on experience building and replicating web-based projects to sharpen design and development skills..",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Analysis Intern",
    desc: "Completed a 10-week internship at Bureau of Statistics – Guyana through a two-phase work-study program. Gained hands-on experience with statistical programming in R, while independently studying from R for Data Science (2e) and R Programming. Built skills in data analysis and visualization using real datasets.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Accountant Intern",
    desc: "Completed a 3-month internship at the Beharry Service Center which was focused on financial operations. Learned to use PBS accounting software, handled customer payments, and assisted with processing overtime payments for staff.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Experience",
    desc: "Experienced in using Canva, Kobo Toolbox, Excel, and PowerPoint, gained during my internship at the Bureau of Statistics. Additionally, worked with Figma and various JavaScript libraries during my time in the Beharry Digital Department. Developed a deeper understanding of Microsoft Word and Excel while interning as an Accountant at the Toyota Service Center.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
