document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value;

    if (message) {
        displayMessage(message, 'user');
        userInput.value = '';

        // Simulating AI response
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            displayMessage(aiResponse, 'ai');
        }, 1000);
    }
});

function displayMessage(message, sender) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

function getAIResponse(input) {
    // Simple AI response logic
    const responses = {
        "hi": "Hello! How can I help you?",
        "how are you?": "I'm just a program, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
    };
    return responses[input.toLowerCase()] || "I'm not sure how to respond to that.";
}
let chatHistory = [];

function displayMessage(message, sender) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
    
    // Save to chat history
    chatHistory.push({ sender, message });
    
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

// Optionally, add a function to clear chat history
function clearChatHistory() {
    chatHistory = [];
}
