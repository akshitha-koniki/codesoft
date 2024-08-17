let recentMessages = [];

function getResponse() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") return;

    appendMessage("user-message", "You: " + userInput);
    updateRecentMessages("You: " + userInput);

    let response = "Chatbot: I'm sorry, I didn't understand that. Can you please rephrase?";

    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Chatbot: Hello! How can I help you?";
    } else if (userInput.includes("how are you")) {
        response = "Chatbot: I'm just a bunch of code, but I'm functioning as expected! How about you?";
    } else if (userInput.includes("your name")) {
        response = "Chatbot: I am a simple rule-based chatbot. What's your name?";
    } else if (userInput.includes("bye") || userInput.includes("exit")) {
        response = "Chatbot: Goodbye! Have a great day!";
        appendMessage("chatbot-message", response);
        updateRecentMessages(response);
        setTimeout(() => location.reload(), 2000);
        return;
    }

    appendMessage("chatbot-message", response);
    updateRecentMessages(response);
    document.getElementById("userInput").value = "";
}

function appendMessage(className, message) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function updateRecentMessages(message) {
    recentMessages.push(message);
    const recentMessagesContainer = document.getElementById("recentMessages");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    recentMessagesContainer.appendChild(messageElement);
    recentMessagesContainer.scrollTop = recentMessagesContainer.scrollHeight;
}

function startNewChat() {
    recentMessages = [];
    document.getElementById("recentMessages").innerHTML = "";
    document.getElementById("chatbox").innerHTML = '<div class="chatbot-message">Chatbot: Hello! I am your chatbot. How can I assist you today?</div>';
}
