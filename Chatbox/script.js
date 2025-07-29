function sendMessage() {
  const inputBox = document.getElementById("user-input");
  const userInput = inputBox.value.trim();
  if (userInput === "") return;

  addMessage(userInput, "user");

  const response = getBotResponse(userInput.toLowerCase());
  setTimeout(() => addMessage(response, "bot"), 500);

  inputBox.value = "";
}

function addMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender;
  messageDiv.innerText = message;
  document.getElementById("chat-box").appendChild(messageDiv);
  messageDiv.scrollIntoView({ behavior: "smooth" });
}

function getBotResponse(input) {
  if (input.includes("hi") || input.includes("hello")) {
    return "Hello! 👋 How can I help you today?";
  } else if (input.includes("how are you")) {
    return "I'm just code, but I'm functioning perfectly! 😄";
  } else if (input.includes("your name")) {
    return "I'm RuleBot, your simple rule-based chatbot!";
  } else if (input.includes("bye")) {
    return "Goodbye! 👋 Have a great day!";
  } else if (input.includes("help")) {
    return "Try asking: 'What's your name?', 'Hello', or 'Bye'";
  } else {
    return "Sorry, I didn't understand that. Try something else.";
  }
}
