// moe-kyaw-aung-certifications.ts

export type CertificateCategory =
  | "Programming Languages and Fundamentals"
  | "Web Development and Frameworks"
  | "Mobile and Application Development"
  | "Databases and Data Management"
  | "Data Science, AI, and Machine Learning"
  | "Security and Networking"
  | "Blockchain and Cryptocurrency"
  | "Testing and Software Engineering"
  | "Marketing and Business";

export interface Certificate {
  course: string;
  grantedDate: string;      // ISO format: YYYY-MM-DD
  certificateId: string;
}

export interface CertificateGroup {
  category: CertificateCategory;
  items: Certificate[];
}

export interface DeveloperProfile {
  fullName: string;
  platform: string;
  ownerId?: string;
  lastUpdated: string;
  certifications: CertificateGroup[];
}

export const moeKyawAungProfile: DeveloperProfile = {
  fullName: "Moe Kyaw Aung",
  platform: "Programming Hub",
  lastUpdated: "2025-02-18",
  certifications: [
    {
      category: "Programming Languages and Fundamentals",
      items: [
        { course: "C Advanced", grantedDate: "2025-02-18", certificateId: "1739835716200" },
        { course: "C Programming", grantedDate: "2024-06-28", certificateId: "1719565555041" },
        { course: "C++", grantedDate: "2025-02-18", certificateId: "1739898552380" },
        { course: "Dart", grantedDate: "2025-02-18", certificateId: "1739837288483" },
        { course: "Elm Programming", grantedDate: "2025-02-18", certificateId: "1739880694089" },
        { course: "Fundamentals", grantedDate: "2024-06-28", certificateId: "1719559651210" },
        { course: "Go Programming", grantedDate: "2025-01-16", certificateId: "1736963255065" },
        { course: "Java", grantedDate: "2024-06-28", certificateId: "1719564789922" },
        { course: "Java Advanced", grantedDate: "2025-02-18", certificateId: "1739836107562" },
        { course: "JavaScript", grantedDate: "2025-02-18", certificateId: "1739833486440" },
        { course: "Julia", grantedDate: "2025-02-18", certificateId: "1739880960103" },
        { course: "Kotlin", grantedDate: "2025-02-18", certificateId: "1739833265595" },
        { course: "Kotlin Advanced", grantedDate: "2025-02-18", certificateId: "1739885336702" },
        { course: "LISP", grantedDate: "2025-01-08", certificateId: "1736301162621" },
        { course: "Lua", grantedDate: "2025-02-18", certificateId: "1739835829362" },
        { course: "Perl", grantedDate: "2025-02-18", certificateId: "1739833829993" },
        { course: "Python", grantedDate: "2025-02-18", certificateId: "1739855719117" },
        { course: "Python 3", grantedDate: "2025-02-18", certificateId: "1739897104314" },
        { course: "Python Advanced", grantedDate: "2025-02-18", certificateId: "1739855683537" },
        { course: "R Programming", grantedDate: "2025-02-18", certificateId: "1739833212942" },
        { course: "Ruby", grantedDate: "2025-02-18", certificateId: "1739898669357" },
        { course: "Rust Programming", grantedDate: "2025-02-18", certificateId: "1739881058674" },
        { course: "Scala", grantedDate: "2024-06-29", certificateId: "1719634964896" },
        { course: "Shell Script", grantedDate: "2025-02-18", certificateId: "1739836933470" },
        { course: "Swift", grantedDate: "2025-02-18", certificateId: "1739832920562" },
        { course: "Typescript", grantedDate: "2024-07-15", certificateId: "1721000188069" },
        { course: "VB 6", grantedDate: "2025-02-18", certificateId: "1739833123656" },
        { course: "VB.Net", grantedDate: "2024-06-26", certificateId: "1719417917622" }
      ]
    },
    {
      category: "Web Development and Frameworks",
      items: [
        { course: "Angular JS", grantedDate: "2024-06-30", certificateId: "1719743636145" },
        { course: "Backbone JS", grantedDate: "2025-02-18", certificateId: "1739856370071" },
        { course: "Bootstrap Framework", grantedDate: "2025-02-18", certificateId: "1739880857365" },
        { course: "Building a Website", grantedDate: "2025-02-18", certificateId: "1739896759762" },
        { course: "Bulma CSS", grantedDate: "2025-02-18", certificateId: "1739835479177" },
        { course: "CSS", grantedDate: "2024-06-26", certificateId: "1719344297123" },
        { course: "Django", grantedDate: "2024-06-26", certificateId: "1719418019151" },
        { course: "Electron JS", grantedDate: "2025-02-18", certificateId: "1739897730494" },
        { course: "Ember JS", grantedDate: "2024-07-02", certificateId: "1719938075595" },
        { course: "Express JS", grantedDate: "2025-02-18", certificateId: "1739836875831" },
        { course: "Foundation Framework", grantedDate: "2025-02-18", certificateId: "1739881026057" },
        { course: "Gatsby", grantedDate: "2025-02-18", certificateId: "1739837222747" },
        { course: "HTML", grantedDate: "2025-02-18", certificateId: "1739881119420" },
        { course: "HTML Advanced", grantedDate: "2024-06-28", certificateId: "1719549107753" },
        { course: "JQuery", grantedDate: "2024-07-04", certificateId: "1720080513258" },
        { course: "Laravel", grantedDate: "2024-06-30", certificateId: "1719743755535" },
        { course: "Meteor JS", grantedDate: "2025-02-18", certificateId: "1739833905330" },
        { course: "Next JS", grantedDate: "2025-02-18", certificateId: "1739836430783" },
        { course: "Node JS", grantedDate: "2024-06-29", certificateId: "1719634746994" },
        { course: "React Development", grantedDate: "2025-02-18", certificateId: "1739836044174" },
        { course: "React Native", grantedDate: "2025-02-18", certificateId: "1739836534125" },
        { course: "Svelte web apps", grantedDate: "2025-02-17", certificateId: "1739756178407" },
        { course: "Vue JS", grantedDate: "2025-02-18", certificateId: "1739834822653" },
        { course: "WordPress Development", grantedDate: "2024-06-28", certificateId: "1719559838128" }
      ]
    },
    {
      category: "Mobile and Application Development",
      items: [
        { course: "Android development", grantedDate: "2022-06-20", certificateId: "1655668351341" },
        { course: "Flutter", grantedDate: "2025-02-18", certificateId: "1739833967447" },
        { course: "Ionic app development", grantedDate: "2024-06-26", certificateId: "1719416827654" },
        { course: "iOS app development", grantedDate: "2025-01-16", certificateId: "1736963166388" },
        { course: "Kotlin for Android", grantedDate: "2025-02-18", certificateId: "1739833075958" },
        { course: "SwiftUI", grantedDate: "2025-01-16", certificateId: "1736963475199" },
        { course: "Unity", grantedDate: "2025-02-18", certificateId: "1739835787785" }
      ]
    },
    {
      category: "Databases and Data Management",
      items: [
        { course: "Java hibernate", grantedDate: "2024-07-04", certificateId: "1720080471315" },
        { course: "Java Servlets and JSP", grantedDate: "2025-02-18", certificateId: "1739872416588" },
        { course: "Mongo DB", grantedDate: "2025-02-18", certificateId: "1739893030909" },
        { course: "PostgreSQL", grantedDate: "2025-02-18", certificateId: "1739856470604" },
        { course: "RDBMS", grantedDate: "2025-02-18", certificateId: "1739833186026" },
        { course: "Redis", grantedDate: "2025-02-18", certificateId: "1739856417618" }
      ]
    },
    {
      category: "Data Science, AI, and Machine Learning",
      items: [
        { course: "Artificial Intelligence", grantedDate: "2025-02-18", certificateId: "1739872038601" },
        { course: "Big Data Analytics", grantedDate: "2025-02-18", certificateId: "1739832702563" },
        { course: "ChatGPT", grantedDate: "2025-02-18", certificateId: "1739835091264" },
        { course: "Computer Vision using Python", grantedDate: "2025-02-18", certificateId: "1739856569087" },
        { course: "Data Science", grantedDate: "2024-06-26", certificateId: "1719417020917" },
        { course: "Machine Learning", grantedDate: "2025-02-18", certificateId: "1739898444003" },
        { course: "Machine learning using Python", grantedDate: "2025-02-18", certificateId: "1739836464234" },
        { course: "MATLAB", grantedDate: "2025-02-18", certificateId: "1739835621215" },
        { course: "Natural Language Processing (NLP)", grantedDate: "2025-02-18", certificateId: "1739835285209" },
        { course: "R Programming", grantedDate: "2025-02-18", certificateId: "1739833212942" },
        { course: "Statistical Analysis", grantedDate: "2025-02-18", certificateId: "1739833742680" }
      ]
    },
    {
      category: "Security and Networking",
      items: [
        { course: "AWS cloud computing", grantedDate: "2025-02-18", certificateId: "1739872219283" },
        { course: "Cryptography", grantedDate: "2025-02-18", certificateId: "1739897444326" },
        { course: "Cyber Security", grantedDate: "2024-06-28", certificateId: "1719559807330" },
        { course: "Deno", grantedDate: "2025-02-18", certificateId: "1739834969115" },
        { course: "DevOps", grantedDate: "2025-01-16", certificateId: "1736964408824" },
        { course: "Docker", grantedDate: "2025-02-17", certificateId: "1739756105374" },
        { course: "Ethical Hacking", grantedDate: "2025-02-18", certificateId: "1739837560681" },
        { course: "Git", grantedDate: "2024-06-28", certificateId: "1719565433236" },
        { course: "Hacking Advanced", grantedDate: "2025-02-18", certificateId: "1739837372601" },
        { course: "IPv4 & Networking", grantedDate: "2025-02-18", certificateId: "1739880755950" },
        { course: "Linux", grantedDate: "2025-02-18", certificateId: "1739832797741" }
      ]
    },
    {
      category: "Blockchain and Cryptocurrency",
      items: [
        { course: "Blockchain", grantedDate: "2025-02-18", certificateId: "1739898874546" },
        { course: "Hyperledger Fabric", grantedDate: "2025-02-18", certificateId: "1739880935050" },
        { course: "Make Your Own Cryptocurrency", grantedDate: "2025-02-18", certificateId: "1739834558700" },
        { course: "Solidity", grantedDate: "2025-02-18", certificateId: "1739832612619" }
      ]
    },
    {
      category: "Testing and Software Engineering",
      items: [
        { course: "Assembly 8086", grantedDate: "2025-02-18", certificateId: "1739836280776" },
        { course: "Data Structure and Algorithms", grantedDate: "2025-02-18", certificateId: "1739837079915" },
        { course: "Kivy Framework", grantedDate: "2025-02-18", certificateId: "1739837854104" },
        { course: "Robotic Process Automation", grantedDate: "2025-02-18", certificateId: "1739893800025" },
        { course: "Selenium automated testing", grantedDate: "2025-02-18", certificateId: "1739898318104" },
        { course: "Software Engineering", grantedDate: "2025-02-18", certificateId: "1739836592265" },
        { course: "Software Testing", grantedDate: "2025-02-18", certificateId: "1739881946090" }
      ]
    },
    {
      category: "Marketing and Business",
      items: [
        { course: "Digital Marketing", grantedDate: "2025-02-18", certificateId: "1739898606284" },
        { course: "Digital Marketing Advanced", grantedDate: "2024-06-29", certificateId: "1719635013116" },
        { course: "Edge Computing", grantedDate: "2024-06-28", certificateId: "1719563380542" },
        { course: "Google Ads Measurements", grantedDate: "2025-02-18", certificateId: "1739881242969" },
        { course: "Google Display Ads", grantedDate: "2025-02-18", certificateId: "1739856891521" },
        { course: "Google Shopping ads", grantedDate: "2025-02-18", certificateId: "1739856936031" },
        { course: "GraphQL", grantedDate: "2025-02-18", certificateId: "1739835213403" },
        { course: "Growth Hacking", grantedDate: "2025-02-18", certificateId: "1739836337814" },
        { course: "IOT", grantedDate: "2025-02-18", certificateId: "1739836671489" },
        { course: "IT Basics", grantedDate: "2022-06-20", certificateId: "1655669020843" },
        { course: "Material Design", grantedDate: "2025-02-18", certificateId: "1739882348313" },
        { course: "SEO", grantedDate: "2025-02-18", certificateId: "1739833767089" },
        { course: "Social Media Marketing", grantedDate: "2025-02-18", certificateId: "1739898404925" },
        { course: "Tableau", grantedDate: "2024-06-28", certificateId: "1719565631868" }
      ]
    }
  ]
};