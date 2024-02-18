document.addEventListener("DOMContentLoaded", function() {
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  const chatbot = document.querySelector(".chatbot");
  const closeBtn = document.querySelector(".close-btn");

  // Toggle chatbot visibility
  chatbotToggler.addEventListener("click", function() {
    document.body.classList.toggle("show-chatbot");
  });

  // Close chatbot
  closeBtn.addEventListener("click", function() {
    document.body.classList.remove("show-chatbot");
  });

  // Send message
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.querySelector(".chat-input textarea");
  const chatbox = document.querySelector(".chatbox");

  sendBtn.addEventListener("click", async function() {
    const message = chatInput.value.trim();
    if (message !== "") {
      appendMessage(message, "outgoing");
      chatInput.value = "";
      
      // Display waiting animation
      appendMessage("Typing...", "waiting");
      
      // Call processUserMessage function to get bot-generated response
      const replyMessage = processUserMessage(message);
      
      // Hide waiting animation after 3 seconds
      setTimeout(function() {
        const waitingMessage = document.querySelector(".waiting");
        if (waitingMessage) {
          chatbox.removeChild(waitingMessage);
        }
        
        // Append bot's reply message
        appendMessage(replyMessage, "incoming");
      }, 2000); // Delay for 3 seconds
    }
  });

  function appendMessage(message, type) {
    const listItem = document.createElement("li");
    listItem.classList.add("chat", type);
    listItem.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatbox.appendChild(listItem);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function processUserMessage(message) {
    // User message processing logic
    // You can add your logic here to generate bot replies
    // For now, we'll just return a sample response
          const userMessage = [
      ["hi", "hey", "hello"],
      ["sure", "yes", "no"],
      ["are you genius", "are you nerd", "are you intelligent"],
      ["i hate you", "i dont like you"],
      ["how are you", "how is life", "how are things", "how are you doing"],
      ["how is corona", "how is covid 19", "how is covid19 situation"],
      ["what are you doing", "what is going on", "what is up"],
      ["how old are you"],
      ["who are you", "are you human", "are you bot", "are you human or bot"],
      ["who created you", "who made you", "who is your creator"],
      ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
      ["i love you"],
      ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
      ["bad", "bored", "tired"],
      ["help me", "tell me story", "tell me joke"],
      ["ah", "ok", "okay", "nice", "welcome"],
      ["thanks", "thank you"],
      ["what should i eat today"],
      ["bro"],
      ["what", "why", "how", "where", "when"],
      ["corona", "covid19", "coronavirus"],
      ["you are funny"],
      ["i dont know"],
      ["boring"],
      ["im tired"],
      ["miss you"]
    ];
    const botReply = [
      ["Hello!", "Hi!", "Hey!", "Hi there!"],
      ["Okay"],
      ["Yes I am! "],
      ["I'm sorry about that. But I like you dude."],
      ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
      ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
      ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
      ["I am always young."],
      ["I am just a bot", "I am a bot. What are you?"],
      ["Sabitha Kuppusamy"],
      ["I am nameless", "I don't have a name"],
      ["I love you too", "Me too"],
      ["Have you ever felt bad?", "Glad to hear it"],
      ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
      ["What about?", "Once upon a time..."],
      ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
      ["You're welcome"],
      ["Briyani", "Burger", "Sushi", "Pizza"],
      ["Dude!"],
      ["Yes?"],
      ["Please stay home"],
      ["Glad to hear it"],
      ["Say something interesting"],
      ["Sorry for that. Let's chat!"],
      ["Take some rest, Dude!"],
      [ "Okay!"]
      

    ];
    const alternative = [
      "Same here, dude.",
      "That's cool! Go on...",
      "Dude...",
      "Ask something else...",
      "Hey, I'm listening..."
    ];

    let product;
    let text = message.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text.replace(/[\W_]/g, " ")
               .replace(/ a /g, " ")
               .replace(/i feel /g, "")
               .replace(/whats/g, "what is")
               .replace(/please /g, "")
               .replace(/ please/g, "")
               .trim();
    let comparedText = compare(userMessage, botReply, text);
    product = comparedText ? comparedText : alternative[Math.floor(Math.random() * alternative.length)];
    return product;
  }

  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    if (item) return item;
    else return containMessageCheck(string);
  }

  function containMessageCheck(string) {
    let expectedReply = [
      ["Good Bye, dude", "Bye, See you!", "Dude, Bye. Take care of your health in this situation."],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return "Hello! I'm a bot. How can I help you?";
  }
});



// Function to toggle the chatbot visibility
function toggleChatbot() {
  const chatbot = document.querySelector('.chatbot');
  if (chatbot.style.display === 'block') {
    // If chatbot is currently visible, hide it
    chatbot.style.display = 'none';
  } else {
    // If chatbot is currently hidden, show it
    chatbot.style.display = 'block';
  }
}

// Call the function to show the chatbot after 5 seconds (5000 milliseconds)
setTimeout(toggleChatbot, 5000);

// Close chatbot when close button is clicked
document.querySelector('.chatbot-toggler').addEventListener('click', toggleChatbot);
