// Write a “Person” class to hold all the details.

class Person {
  constructor(
    name,
    role,
    email,
    phone,
    location,
    languages,
    interest,
    certifications,
    summary,
    technologies,
    education
  ) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.languages = languages;
    this.interest = interest;
    this.certifications = certifications;
    this.summary = summary;
    this.technologies = technologies;
    this.education = education;
  }
}

const myPerson = new Person(
  "Manupriyan B S",
  "Software developer",
  "manupriyan722@gmail.com",
  "9344073414",
  {
    address: "no 2/c1,4th street siva sakthi nagar,Korattur",
    postalCode: "600080",
    city: "Chennai",
    District: "Chennai",
    State: "Tamilnadu",
  },
  ["Tamil , English"],
  ["Playing badminton", "Reading crime novels"],
  "Next js complete course on udemy",
  "Passionate and highly skilled UI Developer with close to 2 years of experience in creating visually stunning and user-friendly web and mobile interfaces. Proficient in front-end technologies such as HTML, CSS, JavaScript, and react.js. Dedicated to delivering pixel-perfect designs and exceptional user experiences. Seeking to contribute my expertise to a dynamic team and drive innovation in UI development",
  {
    frontEndTechnologies: ["html", "css", "javascript", "typescript"],
    uiFrameworks: ["React js", "Next js"],
    versionControl: "git",
    uiTestingLibraries: ["jest", "react tesing library"],
    stateManagement: "redux toolkit",
    reactComponentLibraries: "material ui",
  },
  {
    college: "Ramakrishna mission vivekananda college",
    degree: "B.sc Computer science",
    duration: "2016-2019",
    cgpa: "6.5",
  }
);

console.log(myPerson);
