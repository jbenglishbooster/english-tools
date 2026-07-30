const words = [
  "Beautiful - Very pretty",
  "Brave - Courageous",
  "Happy - Feeling joy",
  "Honest - Truthful",
  "Knowledge - Information"
];

document.querySelector("button").addEventListener("click", function () {
  const random = words[Math.floor(Math.random() * words.length)];
  document.getElementById("result").innerHTML =
    "<h3>Today's Word</h3><p>" + random + "</p>";
});
