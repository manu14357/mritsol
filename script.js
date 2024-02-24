
function processUserMessage(message) {
    const userMessage = message.toLowerCase();

    // Intents data with patterns and corresponding responses
    const intentsData = {
        "greeting": {
            "patterns": ["hi", "how are you?", "is anyone there?", "hello", "good day", "what's up", "how are ya", "heyy", "whatsup", "??? ??? ??"],
            "responses": ["Hello!", "Good to see you again!", "Hi there, how can I help?"]
        },
        "goodbye": {
            "patterns": ["cya", "see you", "bye bye", "see you later", "goodbye", "i am leaving", "bye", "have a good day", "talk to you later", "ttyl", "i got to go", "gtg"],
            "responses": ["Sad to see you go :(", "Talk to you later", "Goodbye!", "Come back soon"]
        },
        // Add other intents data similarly
        // ...
    };

    // Iterate through intents data to find a match
    for (const intent in intentsData) {
        const patterns = intentsData[intent].patterns;
        const responses = intentsData[intent].responses;
        
        // Check if the user message matches any pattern in the current intent
        if (patterns.some(pattern => userMessage.includes(pattern))) {
            // Return a random response from the matched intent
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    // If no matching intent is found, return a default response
    return "I'm not sure what you mean. Can you please elaborate?";
}










// Close chatbot when close button is clicked
document.querySelector('.chatbot-toggler1 .close-btn').addEventListener('click', function() {
  const chatbot = document.querySelector('.chatbot');
  chatbot.style.display = 'none';
});



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
    // Intents data with patterns and corresponding responses
    const intentsData = {
      "greeting": {
        "patterns": ["hi", "how are you?", "is anyone there?", "hello", "good day", "what's up", "how are ya", "heyy", "whatsup", "??? ??? ??"],
        "responses": ["Hello!", "Good to see you again!", "Hi there, how can I help?"]
      },
      "goodbye": {
        "patterns": ["cya", "see you", "bye bye", "see you later", "goodbye", "i am leaving", "bye", "have a good day", "talk to you later", "ttyl", "i got to go", "gtg"],
        "responses": ["Sad to see you go :(", "Talk to you later", "Goodbye!", "Come back soon"]
      },
      "creator": {
        "patterns": ["what is the name of your developers", "what is the name of your creators", "what is the name of the developers", "what is the name of the creators", "who created you", "your developers", "your creators", "who are your developers", "developers", "you are made by", "you are made by whom", "who created you", "who create you", "creators", "who made you", "who designed you"],
        "responses": ["College students"]
      },
      "name": {
        "patterns": ["name", "your name", "do you have a name", "what are you called", "what is your name", "what should I call you", "whats your name?", "what are you", "who are you", "who is this", "what am i chatting to", "who am i taking to", "what are you"],
        "responses": ["You can call me Mind Reader.", "I'm Mind Reader", "I am a Chatbot.", "I am your helper"]
      },
      "hours": {
        "patterns": ["timing of college", "what is college timing", "working days", "when are you guys open", "what are your hours", "hours of operation", "when is the college open", "college timing", "what about college timing", "is college open on saturday", "tell something about college timing", "what is the college  hours", "when should i come to college", "when should i attend college", "what is my college time", "college timing", "timing college"],
        "responses": ["College is open 8am-5pm Monday-Saturday!"]
      },
      "number": {
        "patterns": ["more info", "contact info", "how to contact college", "college telephone number", "college number", "What is your contact no", "Contact number?", "how to call you", "College phone no?", "how can i contact you", "Can i get your phone number", "how can i call you", "phone number", "phone no", "call"],
        "responses": ["You can contact at: NUMBER"]
      },
      "course": {
        "patterns": ["list of courses", "list of courses offered", "list of courses offered in", "what are the courses offered in your college?", "courses?", "courses offered", "courses offered in (your univrsity(UNI) name)", "courses you offer", "branches?", "courses available at UNI?", "branches available at your college?", "what are the courses in UNI?", "what are branches in UNI?", "what are courses in UNI?", "branches available in UNI?", "can you tell me the courses available in UNI?", "can you tell me the branches available in UNI?", "computer engineering?", "computer", "Computer engineering?", "it", "IT", "Information Technology", "AI/Ml", "Mechanical engineering", "Chemical engineering", "Civil engineering"],
        "responses": ["Our university offers Information Technology, computer Engineering, Mechanical engineering,Chemical engineering, Civil engineering and extc Engineering."]
      },
      "fees": {
        "patterns": ["information about fee", "information on fee", "tell me the fee", "college fee", "fee per semester", "what is the fee of each semester", "what is the fees of each year", "what is fee", "what is the fees", "how much is the fees", "fees for first year", "fees", "about the fees", "tell me something about the fees", "What is the fees of hostel", "how much is the fees", "hostel fees", "fees for AC room", "fees for non-AC room", "fees for Ac room for girls", "fees for non-Ac room for girls", "fees for Ac room for boys", "fees for non-Ac room for boys"],
        "responses": ["For Fee detail visit <a target=\"_blank\" href=\"LINK\"> here</a>"]
      },
      "location": {
        "patterns": ["where is the college located", "college is located at", "where is college", "where is college located", "address of college", "how to reach college", "college location", "college address", "wheres the college", "how can I reach college", "whats is the college address", "what is the address of college", "address", "location"],
        "responses": ["<a target=\"_blank\" href=\"ADD YOU GOOGLE MAP LINK HERE\"> here</a>"]
      },
      "hostel": {
        "patterns": ["hostel facility", "hostel servive", "hostel location", "hostel address", "hostel facilities", "hostel fees", "Does college provide hostel", "Is there any hostel", "Where is hostel", "do you have hostel", "do you guys have hostel", "hostel", "hostel capacity", "what is the hostel fee", "how to get in hostel", "what is the hostel address", "how far is hostel from college", "hostel college distance", "where is the hostel", "how big is the hostel", "distance between college and hostel", "distance between hostel and college"],
        "responses": ["For hostel detail visit <a target=\"_blank\" href=\"ADD YOUR HOSTEL DETAIL PDF LINK OR ANY INFORMATION LINK OR ADD YOU OWN ANSWERS\"> here</a>"]
      },
      "event": {
        "patterns": ["events organised", "list of events", "list of events organised in college", "list of events conducted in college", "What events are conducted in college", "Are there any event held at college", "Events?", "functions", "what are the events", "tell me about events", "what about events"],
        "responses": ["For event detail visit <a target=\"_blank\" href=\"ADD YOUR FUNCTIONS LINK OR YOUR OWN RESPONSE\"> here</a>"]
      },
      "document": {
        "patterns": ["document to bring", "documents needed for admision", "documents needed at the time of admission", "documents needed during admission", "documents required for admision", "documents required at the time of admission", "documents required during admission", "required documents", "which document required", "documents", "documents for admission", "documents to submit", "what documents are required"],
        "responses": ["For document detail visit <a target=\"_blank\" href=\"ADD YOUR DOCUMENTS DETAIL PDF LINK OR ANY INFORMATION LINK OR ADD YOU OWN ANSWERS\"> here</a>"]
      },
      "admission": {
        "patterns": ["admission process", "admission procedure", "admission", "admission related questions", "how to take admission", "how to get admission", "process of admission", "procedure of admission", "how can I take admission", "how can I get admission", "how can I enroll", "how to enroll", "how to enroll in college", "how can I enroll in college", "how to take admission in UNI", "how can I get admission in UNI", "process of admission in UNI", "procedure of admission in UNI", "what is the admission process in UNI", "what is the procedure of admission in UNI", "how to take admission in college", "how to get admission in college", "process of admission in college", "procedure of admission in college", "what is the admission process in college", "what is the procedure of admission in college"],
        "responses": ["For admission detail visit <a target=\"_blank\" href=\"ADD YOUR ADMISSION DETAIL PDF LINK OR ANY INFORMATION LINK OR ADD YOU OWN ANSWERS\"> here</a>"]
      },
      "scholarship": {
        "patterns": ["is there any scholarship", "scholarship for sc", "scholarship for st", "scholarship for obc", "scholarship for general", "is there any scholarship", "is there scholarship", "what is the scholarship", "how much is the scholarship", "scholarship detail", "scholarship", "is there any scholarship for girl", "scholarship for girls", "scholarship for boys", "is there any scholarship for boy"],
        "responses": ["For scholarship detail visit <a target=\"_blank\" href=\"ADD YOUR SCHOLARSHIP DETAIL PDF LINK OR ANY INFORMATION LINK OR ADD YOU OWN ANSWERS\"> here</a>"]
      },
      "other": {
        "patterns": ["Other information", "any other information", "something else", "do you have any other information", "tell me about more", "more information", "other queries", "any other queries", "any other information", "anything else", "can you provide me with any other information", "do you have any other queries", "do you have any other questions"],
        "responses": ["Sure, please let me know your query."], "patterns": [
      "hod",
      "hod name",
      "who is the hod"
   ],
   "responses": [
      "HODs differ for each branch, please be more specific like: (HOD it)"
   ],"patterns": [
      "ragging",
      "is ragging practice active in college",
      "does college have any antiragging facility",
      "is there any ragging cases",
      "is ragging done here",
      "ragging against",
      "antiragging facility",
      "ragging juniors",
      "ragging history",
      "ragging incidents"
   ],
   "responses": [
      "We are Proud to tell you that our college provides ragging free environment, and we have strict rules against ragging"
   ],"patterns": [
      "what can you do",
      "what are the thing you can do",
      "things you can do",
      "what can u do for me",
      "how u can help me",
      "why i should use you"
   ],
   "responses": [
      "I can answer to low-intermediate questions regarding college",
      "You can ask me questions regarding college, and i will try to answer them"
   ],"patterns": [
      "okk",
      "okie",
      "nice work",
      "well done",
      "good job",
      "thanks for the help",
      "Thank You",
      "its ok",
      "Thanks",
      "Good work",
      "k",
      "ok",
      "okay"
   ],
   "responses": [
      "I am glad I helped you",
      "welcome, anything else i can assist you with?"
   ], "patterns": [
      "sports and games",
      "give sports details",
      "sports infrastructure",
      "sports facilities",
      "information about sports",
      "Sports activities",
      "please provide sports and games information"
   ],
   "responses": [
      "Our university encourages all-round development of students and hence provides sports facilities in the campus. For more details visit<a target=\"_blank\" href=/\"(LINK IF HAVE)\">here</a>"
   ],"patterns": [
      "holidays",
      "when will semester starts",
      "when will semester end",
      "when is the holidays",
      "list of holidays",
      "Holiday in these year",
      "holiday list",
      "about vacations",
      "about holidays",
      "When is vacation",
      "When is holidays",
      "how long will be the vacation"
   ],
   "responses": [
      "Academic calender is given to you by your class-soordinators after you join your respective classes"
   ],"patterns": [
      "fuck",
      "bitch",
      "shut up",
      "hell",
      "stupid",
      "idiot",
      "dumb ass",
      "asshole",
      "fucker"
   ],
   "responses": [
      "please use appropriate language",
      "Maintaining decency would be appreciated"
   ],"patterns": [
      "I love you",
      "Will you marry me",
      "Do you love me"
   ],
   "responses": [
      "I am not program for this, please ask appropriate query"
   ],"patterns": [
      "what are the different committe in college",
      "different committee in college",
      "Are there any committee in college",
      "Give me committee details",
      "committee",
      "how many committee are there in college"
   ],
   "responses": [
      "For the various committe in college contact this number: ADD NUMBER"
   ],"patterns": [
      "college dress code",
      "college dresscode",
      "what is the uniform",
      "can we wear casuals",
      "Does college have an uniform",
      "Is there any uniform",
      "uniform",
      "what about uniform",
      "do we have to wear uniform"
   ],
   "responses": [
      "ENTER YOUR OWN UNIVERSITY UNIFORM CIRCULER"
   ],"patterns": [
      "max number of students",
      "number of seats per branch",
      "number of seats in each branch",
      "maximum number of seats",
      "maximum students intake",
      "What is college intake",
      "how many stundent are taken in each branch",
      "seat allotment",
      "seats"
   ],
   "responses": [
      "For IT, Computer and extc 60 per branch and seat may be differ for different department."
   ],"patterns": [
      "What facilities college provide",
      "College facility",
      "What are college facilities",
      "facilities",
      "facilities provided"
   ],
   "responses": [
      "Our university's Engineering department provides fully AC Lab with internet connection, smart classroom, Auditorium, library,canteen"
   ],"patterns": [
      "scholarship",
      "Is scholarship available",
      "scholarship engineering",
      "scholarship it",
      "scholarship ce",
      "scholarship mechanical",
      "scholarship civil",
      "scholarship chemical",
      "scholarship for AI/ML",
      "available scholarships",
      "scholarship for computer engineering",
      "scholarship for IT engineering",
      "scholarship for mechanical engineering",
      "scholarship for civil engineering",
      "scholarship for chemical engineering",
      "list of scholarship",
      "comps scholarship",
      "IT scholarship",
      "mechanical scholarship",
      "civil scholarship",
      "chemical scholarship",
      "automobile scholarship",
      "first year scholarship",
      "second year scholarship",
      "third year scholarship",
      "fourth year scholarship"
   ],
   "responses": [
      "Many government scholarships are supported by our university. For details and updates visit <a target=\"_blank\" href=\"(SCHOLARSHIP DETAILS LINK)\">here</a>"
   ],"patterns": [
      "what is the process of admission",
      "what is the admission process",
      "How to take admission in your college",
      "What is the process for admission",
      "admission",
      "admission process"
   ],
   "responses": [
      "Application can also be submitted online through the Unversity's  <a target=\"_blank\" href=\"LINK OF ADMISSION DOCUMENT\">website</a>"
   ],"patterns": [
      "exam dates",
      "exam schedule",
      "When is semester exam",
      "Semester exam timetable",
      "sem",
      "semester",
      "exam",
      "when is exam",
      "exam timetable",
      "exam dates",
      "when is semester"
   ],
   "responses": [
      "Here is the Academic Calendar  <a target=\"_blank\" href=\"YOUR ACADEMIC CALENDER\">website</a>"
   ],"patterns": [
      "what is the name of principal",
      "whatv is the principal name",
      "principal name",
      "Who is college principal",
      "Where is principal's office",
      "principal",
      "name of principal"
   ],
   "responses": [
      "XYZ is college principal and if you need any help then call your branch hod first.That is more appropriate"
   ],"patterns": [
      "Who is extc HOD",
      "Where is  extc HOD",
      "extc hod",
      "name of extc hod"
   ],
   "responses": [
      "Different school wise hod are different.So be more clear with your school or department"
   ],"patterns": [
      "Who is computer HOD",
      "Where is computer HOD",
      "computer hod",
      "name of computer hod"
   ],
   "responses": [
      "All engineering departments have only one hod XYZ who available on (PLACE NAME)"
   ],"patterns": [
      "Who is HOD",
      "Where is HOD",
      "it hod",
      "name of it hod"
   ],
   "responses": [
      "All engineering departments have only one hod XYZ who available on (Place name)"
   ],"patterns": [
      "What is college placement",
      "Which companies visit in college",
      "What is average package",
      "companies visit",
      "package",
      "About placement",
      "placement",
      "recruitment",
      "companies"
   ],
   "responses": [
      "To know about placement visit <a target=\"_blank\" href=\"PLACEMENT INFORMATION LINK FROM YOUR UNIVERSITY WEBSITE IF THEY HAVE\">here</a>"
   ],"patterns": [
      "food menu",
      "food in canteen",
      "Whats there on menu",
      "what is available in college canteen",
      "what foods can we get in college canteen",
      "food variety",
      "What is there to eat?"
   ],
   "responses": [
      "we serve Franky, Locho, Alu-puri, Kachori, Khavsa, Thaali and many more on menu"
   ],"patterns": [
      "food facilities",
      "canteen facilities",
      "canteen facility",
      "is there any canteen",
      "Is there a cafetaria in college",
      "Does college have canteen",
      "Where is canteen",
      "where is cafetaria",
      "canteen",
      "Food",
      "Cafetaria"
   ],
   "responses": [
      "Our university has canteen with variety of food available"
   ],"patterns": [
      "how is college infrastructure",
      "infrastructure",
      "college infrastructure"
   ],
   "responses": [
      "Our University has Excellent Infrastructure. Campus is clean. Good IT Labs With Good Speed of Internet connection"
   ],"patterns": [
      "is there any library",
      "library facility",
      "library facilities",
      "do you have library",
      "does the college have library facility",
      "college library",
      "where can i get books",
      "book facility",
      "Where is library",
      "Library",
      "Library information",
      "Library books information",
      "Tell me about library",
      "how many libraries"
   ],
   "responses": [
      "There is one huge and spacious library.timings are 8am to 6pm and for more visit <a target=\"blank\" href=\"ADD LIBRARY DETAIL LINK\">here</a>"
   ],
   
      }
        
        // Add other intents data similarly
        // ...
    };

    // Check if the message matches any intent
    for (const intent in intentsData) {
        const patterns = intentsData[intent].patterns;
        const responses = intentsData[intent].responses;
        
        // Check if any pattern in the intent matches the user message
        if (patterns.some(pattern => message.toLowerCase().includes(pattern))) {
            // If a matching pattern is found, return a random response from the intent
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    // If no matching intent is found, return a default response
    return "I'm not sure what you mean. Can you please elaborate?";
}



  function processUserMessag(message) {
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
      ["miss you"],
      
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
setTimeout(toggleChatbot, 500000);

// Close chatbot when close button is clicked
document.querySelector('.chatbot-toggler').addEventListener('click', toggleChatbot);



