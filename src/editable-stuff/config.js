// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tofik",
  middleName: "",
  lastName: "Mohammed",
  message: " “Sometimes the idea behind a program is one small creative effort.” Dan Bricklin",
  icons: [
    {
      image: "fa-github",
      url: " https://github.com/tofi-124",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/tofik.mohammed.925602",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/tofik_prv/",
    },
    {
      image: "fa-linkedin",
      url: " https://www.linkedin.com/in/tofik-mohammed-700289189/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/tofikmohammed.jpg"),
  imageSize: 375,
  message:
    "I am a professional Full Stack Web Developer with expertise in a variety of platforms and languages, including HTML and Javascript, CSS, and frameworks such as React and Node, as well as SQL and PSQL. In addition, a dedicated programmer with a curious mind and strong problem-solving abilities, as well as demonstrated collaboration, communication, and interpersonal skills.",
  resume: "https://resume.io/r/jRVeXqn0J",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tofi-124",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/tofikmohammed.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/tofikmohammed.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "Node/Express", value: 85 },
    { name: "PSQL/SQL", value: 90 },
    { name: "Ruby/Rails", value: 85 },
    { name: "Jquery", value: 85 },
    { name: "Ajax", value: 85 },
    { name: "C/C++", value: 70 },
    { name: "Java", value: 70 },
  ],
  softSkills: [
    { name: "Teamwork", value: 99 },
    { name: "Problem solving", value: 95 },
    { name: "Creativity", value: 90 },
    { name: "Collaboration", value: 99 },
    { name: "Time management", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Accountability", value: 95 },
    { name: "Empathy", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm seeking for full-stack web development opportunities right now! Please write me at if you know of any open openings, if you have any websites you want me to build, or if you simply want to say hello",
  email: "tofik@tofweb.services",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
