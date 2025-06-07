// Set any item to undefined to remove it from the site or to use the default value

import Gallery from "../pages/gallery.astro";

export const GLOBAL = {
  // Site metadata
  username: "minis by myconoid",
  rootUrl: "https://myconoid.com",
  shortDescription: "OSR-Styles minis for grognards",
  longDescription: "I'm myconoid, and I make little resin bad guys for you to murder!",
  
  // Social media links
  blueskyProfile: "https://bsky.app/profile/myconoid.com",
  
  // Common text names used throughout the site
  articlesName: "Articles",
  projectsName: "Projects",
  galleryname: "Gallery",
  viewAll: "View All",
  
  // Common descriptions used throughout the site
  noArticles: "No featured articles yet.",
  noProjects: "No featured projects yet.",

  // Blog metadata
  blogTitle: "My Brain Sitting on the Floor",
  blogShortDescription: "GRRRGGKDDKKGKGDDDDffggdhh",
  blogLongDescription: "Since my brain is not in my head and the world (as we know it) is ending, yeah fuck off",

  // Project metadata
  projectTitle: "Projects in Motion",
  projectShortDescription: "All the crap I'm working on",
  projectLongDescription: "All the crap I'm working on, in more detail I'm sure you are interested in.",

  // Profile image
  profileImage: "myc.png",

  // Menu items
  menu: {
    home: "/",
    gallery: "/gallery",
    about: "/about",
    contact: "/contact",
  }
};
