const personalDatas = [
  {
    owner: "0",
    name: "Nicolas Jose Tudela",
    label: "Sofware developer",
    picture: null,
    phone: "05491153254124",
    website: "nicolastudela.com",
    summary: `Software engineer with over 10 years of experience. Full stack software architect and developer specializing in numerous languages and technologies such as Javascript, ReactJs, Html, CSS and Java`
  }
];

const users = [
  {
    id: "0",
    personalData: personalDatas.find(pi => pi.owner === "0"),
    role: "ADMIN",
    email: "nicolastudela@gmail.com",
    profiles: [
      {
        network: "FACEBOOK",
        username: "nico.tudela",
        url: "http://www.facebook.com/nico.tudela"
      },
      {
        network: "INSTAGRAM",
        username: "tudelacade",
        url: "http://www.instagram.com/tudelacade/"
      },
      {
        network: "LINKEDIN",
        url: "http://www.linkedin.com/in/nicolas-tudela-85455a2b/"
      }
    ]
  }
];

const owner = {
  user: users[0],
  location: {
    city: "Buenos Aires",
    countryCode: "54",
    country: "Argentina"
  },
  resume: {
    workExperience: [
      {
        position: "Remote Freelance Software Engineer",
        website: "nicolastudela.com",
        current: true,
        startDate: new Date("2019-03-01"),
        summary:
          "Working on my personal site. It will be a site where people can understand who I am; And a way to share some of my programming skills ",
        highlights: [
          "Using lattest techologies in backend as the frontend",
          "Client-side app built without using CRA and using with react hooks",
          "components styled using css-in-js solutions",
          "Uses Graphql API",
          "I'm using apollo server to build the backend"
        ],
        scope: "FULL_STACK",
        programmingLanguages: ["Javascript"],
        technologies: [
          "React.js",
          "Node.js",
          "Apollo Server",
          "MongoDB",
          "CSS-IN-JS",
          "Emotion.js",
          "Styled System",
          "Material UI"
        ]
      }
    ],
    education: [
      {
        institution: "Instituto San Roque",
        area: "Accountancy Bachelor",
        startYear: 1997,
        endYear: 2001
      },
      {
        institution: "University of Buenos Aires",
        area: "Software Engineering",
        startYear: 2002,
        endYear: 2012
      }
    ],
    language: [
      {
        language: "English",
        fluency: "PROFICIENT"
      },
      {
        language: "Spanish",
        fluency: "NATIVE"
      }
    ],

    skills: [
      {
        name: "Javascript",
        level: "PROFICIENT",
        keywords: ["javascript", "fullstack"]
      },
      {
        name: "Functional Programming",
        level: "PROFICIENT",
        keywords: ["javascript", "fullstack", "java"]
      },
      {
        name: "React.js",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "HTML5/CSS",
        level: "PROFICIENT",
        keywords: ["frontend"]
      },
      {
        name: "SASS/LESS",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Jest",
        level: "PROFICIENT",
        keywords: ["javascript", "fullstack"]
      },
      {
        name: "Version Control ( GIT )",
        level: "PROFICIENT",
        keywords: ["fullstack"]
      },
      {
        name: "Team Leadership / Project Management",
        level: "PROFICIENT",
        keywords: ["fullstack", "non-programming"]
      },
      {
        name: "Node.js",
        level: "DEVELOPING",
        keywords: ["javascript", "backend", "fullstack"]
      },
      {
        name: "Kanban methodologies / Scrum Framework",
        level: "ADVANCED",
        keywords: ["fullstack", "non-programming"]
      },
      {
        name: "Webpack",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Babel",
        level: "PROFICIENT",
        keywords: ["javascript", "fullstack"]
      },
      {
        name: "CSS-IN-JS",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Create React App",
        level: "DEVELOPING",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Material UI",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Styled System / Emotion.js",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Now.sh",
        level: "DEVELOPING",
        keywords: ["fullstack", "non-programming"]
      },
      {
        name: "GraphQL",
        level: "DEVELOPING",
        keywords: ["javascript", "fullstack", "database"]
      },
      {
        name: "REST",
        level: "PROFICIENT",
        keywords: ["javascript", "fullstack", "non-programming"]
      },
      {
        name: "SQL",
        level: "PROFICIENT",
        keywords: ["database"]
      },
      {
        name: "Apollo Server",
        level: "NOVICE",
        keywords: ["javascript", "backend"]
      },
      {
        name: "Redux",
        level: "PROFICIENT",
        keywords: ["javascript", "frontend"]
      },
      {
        name: "Domain Modeling, TDD, Design Patterns, OOP",
        level: "PROFICIENT",
        keywords: ["javascript", "fullstack", "java"]
      },
      {
        name: "Java",
        level: "ADVANCED",
        keywords: ["backend", "fullstack", "java"]
      },
      {
        name: "MongoDB",
        level: "NOVICE",
        keywords: ["backend", "database"]
      },
      {
        name: "Next.js",
        level: "DEVELOPING",
        keywords: ["javascript", "frontend", "ssr"]
      }
    ]
  }
};

module.exports = owner;

// "
// advanced Understanding of the standard; You add your own ideas and perspective into what you do.
// "
// ADVANCED
// "
// meets the standard; Consistently meet the target proficiency level and ready to move on
// "
// PROFICIENT
// "
// aproaches the standard; Target proficiency level in familiar task and situations, but you need extra help
// "
// DEVELOPING
// "
// does not meet the standard
// "
// NOVICE
