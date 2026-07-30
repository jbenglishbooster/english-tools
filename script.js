const words = [
"Ability - Skill to do something",
"Accept - To receive",
"Achieve - To succeed",
"Adventure - Exciting experience",
"Beautiful - Very pretty",
"Brave - Courageous",
"Careful - Taking care",
"Challenge - Difficult task",
"Confidence - Belief in yourself",
"Creative - Full of new ideas",
"Decision - Choice",
"Education - Learning process",
"Energy - Strength and power",
"Friendly - Kind and nice",
"Happy - Feeling joy",
"Honest - Truthful",
"Knowledge - Information",
"Practice - Repeated learning",
"Success - Achievement of goals",
"Wisdom - Good judgment"
];

document.querySelector("button").addEventListener("click", function () {
  const random = words[Math.floor(Math.random() * words.length)];
  document.getElementById("result").innerHTML =
    "<h3>Today's Word</h3><p>" + random + "</p>";
});
