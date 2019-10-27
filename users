
const users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function fancyFormat(userInput) {
  let allStringOutput = [];
  userInput.forEach((u) => {


    let userString = `${u.fname} -> ${u.lname} knows ${u.languages.map(l => l)} is interested in ${collectStringsForInterests(u)} `;
    allStringOutput.push(userString);
    //  u.languages.map(l => console.log(l))
  })
  return allStringOutput;
}

console.log(fancyFormat(users));
// fancyFormat();

function collectStringsForInterests(user) {
  const output = [];
  let outputString = "";

  let vals = Object.values(user.interests);
  vals.forEach(outer => {
    outputString += `${(outer.map(inner => inner))} ,`;
  })
  return outputString;
}

