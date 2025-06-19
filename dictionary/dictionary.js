const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const button = document.getElementById("searchbtn");

button.addEventListener("click", () => {
  let inpWord = document.getElementById("inpword").value;

  // Fetch data from the API
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      // Clear the previous content in the result element
      result.innerHTML = "";

      // Create a div for the word and its details
      const wordDiv = document.createElement("div");
      wordDiv.classList.add("word");

      // Create an h3 element for the word
      const wordHeading = document.createElement("h3");
      wordHeading.textContent = inpWord;
      wordDiv.appendChild(wordHeading);

      // Create a button for sound (assuming sound is a function)
      const soundButton = document.createElement("button");
      soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      soundButton.addEventListener("click", () => {
        // Call your sound function here
        // Example: soundFunction(inpWord);
      });
      wordDiv.appendChild(soundButton);
      // Iterate through meanings and definitions
      data[0].meanings.forEach((meaning) => {
        // Create a div for each part of speech
        const meaningDiv = document.createElement("div");

        // Create a paragraph for the part of speech
        const posParagraph = document.createElement("p");
        posParagraph.textContent = meaning.partOfSpeech;
        meaningDiv.appendChild(posParagraph);

        // Iterate through definitions for this part of speech
        meaning.definitions.forEach((definitionObj) => {
          // Create a paragraph for the definition
          const definitionParagraph = document.createElement("p");
          definitionParagraph.classList.add("wordmeaning");
          definitionParagraph.textContent = definitionObj.definition;
          meaningDiv.appendChild(definitionParagraph);

          // Create a paragraph for the example
          const exampleParagraph = document.createElement("p");
          exampleParagraph.classList.add("wordexample");
          exampleParagraph.textContent = definitionObj.example;
          meaningDiv.appendChild(exampleParagraph);
        });

        // Append the part of speech and definitions to the result
        wordDiv.appendChild(meaningDiv);
      });

      // Append the wordDiv to the result element
      result.appendChild(wordDiv);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});