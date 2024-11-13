function displayBabyName(response) {
  const typewriter = new Typewriter("#baby-name", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  typewriter.start();  // Ensure it starts typing
}

function generateBabyName(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context = "You are an expert in baby names. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a baby name based on ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let babyNameElement = document.querySelector("#baby-name");  // Ensure this matches the right div
  babyNameElement.classList.remove("hidden");
  babyNameElement.innerHTML = `<div class="generating">⏳ Generating a baby name based on ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayBabyName);
}

let babyNameFormElement = document.querySelector("#baby-name-generator-form");
babyNameFormElement.addEventListener("submit", generateBabyName);
