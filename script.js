// Voice recognition setup (unchanged from previous example)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function startVoiceRecognition() {
  recognition.start();
}

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  displayMessage("User (Voice)", transcript);
  
  handleMultipleQuestions(transcript);
};

recognition.onerror = function(event) {
  displayMessage("System", "Sorry, I couldn't understand. Try again.");
};

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  displayMessage("User", userInput);

  handleMultipleQuestions(userInput);

  document.getElementById("user-input").value = "";
}

function handleMultipleQuestions(input) {
  // Split the input by sentences (using ., ?, !)
  const questions = input.split(/[.!?]+/).filter(Boolean);

  questions.forEach(question => {
    const response = generateAIResponse(question.trim());
    setTimeout(() => displayMessage("Jarvis", response), 500);
  });
}

function displayMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(input){
    switch (input) {
        case "kasi ho":
        return "maein thek hu"    
    }

    switch (input) {
        case "what is the diffrence between weather and climate":
         return "Weather is the short-term atmospheric conditions (like rain or sunshine) at a specific time and place, while climate is the long-term average of weather patterns in a region over decades."   
    }
    switch (input) {
        case "maein kahani maein kya banao":
        return "biryani , pulao , dal chawal, etc"    
    }
    switch (input) {
        case "calculate the difference between Earth and Moon":
            return "From the diameter of Earth (12800 km) and its measured diameter in millimeters (4.5 mm) the scale of the image below is 12800/4.5 = 2840 km/mm. The separation from the center of Earth to the Moon 'dot' is 126.5 mm or 126.5 mm x 2840 km/mm = 359,000 km."
    }
    switch (input) {
        case "hi":
          return " hellow"  
    }

    switch (input) {
      case "what is your name":
        return "my name is jarves"
    }
}




