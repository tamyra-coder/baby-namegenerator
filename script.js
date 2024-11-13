function displayBabyName(response) {
  console.log(response.data);  // Log the entire response to check its structure
  const babyNameText = response.data.answer;  // Ensure this is the correct key from the API response
  
  const typewriter = new Typewriter("#baby-name", {
    strings: [babyNameText],  // Typewriter needs an array of strings
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  typewriter.start();
}

function generateBabyName(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".baby-name-input");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context = "You are an expert in baby names. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a baby name based on ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let babyNameElement = document.querySelector("#baby-name");  // Ensure this matches the right div
  babyNameElement.classList.remove("hidden");
  babyNameElement.innerHTML = `<div class="generating">⏳ Generating a baby name based on your preferences...</div>`;

  axios.get(apiURL)
    .then(displayBabyName)
    .catch(error => {
      console.error("Error fetching baby name:", error);
      babyNameElement.innerHTML = "An error occurred. Please try again later.";
    });
}

let babyNameFormElement = document.querySelector("#baby-name-form");
babyNameFormElement.addEventListener("submit", generateBabyName);

