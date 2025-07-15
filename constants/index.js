import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  // roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Ensure all imported assets exist in ../assets/index.js and are exported, e.g.:
// export { default as figma } from './figma.png';
// export { default as notion } from './notion.png';
// ...and so on for all assets used below.

export const navigation = [
  {
    id: "6",
    title: "Home",
    url: "#home",
  },
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "New account",
    url: "/sign-up",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/sign-in",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  // {
  //   id: "0",
  //   title: "Voice recognition",
  //   text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap1,
  //   colorful: true,
  // },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the platform more frequently.",
    date: "July 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personal customization",
    text: "Allow users to customize the instabot appearance and behavior, making it more engaging and fun to interact with.",
    date: "July 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Translation API:",
    text: "Reply in the customer’s language, even if they message in Spanish/French/etc.",
    date: "July 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for creators looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    // text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Free",
    description: "For individuals and small teams just getting started.",
    price: "0",
    features: [
      "Basic AI chatbot features",
      "Limited chat history",
      "Community support",
    ],
  },
  {
    id: "1",
    title: "Starter",
    description: "For growing teams that need more power and support.",
    price: "15",
    features: [
      "Everything in Free, plus:",
      "Extended chat history",
      "Priority email support",
      "Basic analytics",
    ],
  },
  {
    id: "2",
    title: "Professional",
    description: "For established teams that need advanced features and dedicated support.",
    price: "49",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Advanced AI capabilities",
      "Unlimited chat history",
      "Dedicated support channels",
    ],
  },
  {
    id: "3",
    title: "Enterprise",
    description: "For large organizations with custom needs.",
    price: null,
    features: [
      "Everything in Professional, plus:",
      "Custom AI models",
      "On-premise deployment options",
      "24/7 dedicated support",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "24/7 Story Reply Automation",
    text: "Never miss engagement on Stories, even while offline.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Keyword-Triggered Responses",
    text: "Set custom replies for FAQs e.g, price, collab.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AutoNation from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly automate their tasks like insta dm automation, story-reply automation.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: benefitCard5,
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: benefitCard6,
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];