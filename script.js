
const words = [
"Ability - Skill to do something",
"Accept - To receive",
"Accident - Unexpected event",
"Achieve - To succeed",
"Action - Something you do",
"Active - Full of energy",
"Adventure - Exciting experience",
"Advice - Helpful suggestion",
"Afraid - Feeling fear",
"Agree - To have the same opinion",
"Amazing - Very surprising",
"Ancient - Very old",
"Answer - A reply",
"Appear - To become visible",
"Arrange - To put in order",
"Arrive - To reach a place",
"Art - Creative work",
"Attention - Careful notice",
"Available - Ready to use",
"Awake - Not sleeping",
"Balance - Equal position",
"Basic - Simple and important",
"Believe - To think something is true",
"Benefit - Something helpful",
"Bright - Full of light",
  "Air - The mixture of gases we breathe",
"Airport - A place where airplanes land and take off",
"Animal - A living creature",
"Apple - A sweet fruit",
"Apply - To make a request",
"April - The fourth month of the year",
"Area - A particular place",
"Army - A group of soldiers",
"Around - On every side",
"Arrive - To reach a place",
"Ask - To request information",
"Attack - To try to hurt",
"August - The eighth month",
"Aunt - Sister of your father or mother",
"Autumn - The season after summer",
"Baby - A very young child",
"Back - The rear part",
"Bad - Not good",
"Bag - A container for carrying things",
"Ball - A round object",
"Banana - A yellow fruit",
"Bank - A place to keep money",
"Bathroom - A room for washing",
"Beach - Sandy land beside the sea",
"Beautiful - Very attractive",
"Because - For the reason that",
"Become - To begin to be",
"Bed - Furniture for sleeping",
"Before - Earlier than",
"Begin - To start"
];


function showWord() {
  const random = words[Math.floor(Math.random() * words.length)];
  document.getElementById("result").innerHTML =
    "<h3>Today's Word</h3><p>" + random + "</p>";
}

showWord();

document.getElementById("nextWord").addEventListener("click", showWord);
document.getElementById("searchBtn").addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const found = words.find(word => word.toLowerCase().includes(input));

  if (found) {
    document.getElementById("result").innerHTML =
      "<h3>Search Result</h3><p>" + found + "</p>";
  } else {
    document.getElementById("result").innerHTML =
      "<h3>Word not found!</h3>";
  }
});
