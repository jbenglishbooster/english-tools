
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
"Bright - Full of light"
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
