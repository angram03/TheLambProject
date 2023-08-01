import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // Toggle state for chatbot visibility
  const [isTyping, setIsTyping] = useState(false); // Toggle state for typing indicator

  const presetChoices = {
    "What does LAMB do?":
      "LAMB is designed to give you personalized city choices based on your preferences.",
    "How to begin?":
      "1. Create an account or log in.\n2. Input your city preferences.\n3. You're ready to go!\n\nSwipe left to discard a city and swipe right to accept a city. FYI : To view your currently accepted cities, go to the house icon. If you wish to learn more about the city before swiping right, click on the *More Info* button. ",
    "Who created it?":
      "The app was created by Lucia, Angelica, and Habeebah. They're pretty cool, huh?",
    Exit: "Thanks for stopping by! If you have any more questions, feel free to ask. Have a great day!",
  };

  useEffect(() => {
    // Send the introduction message when the component mounts
    const hasSeenIntroduction = localStorage.getItem("hasSeenIntroduction");
    if (!hasSeenIntroduction) {
      sendIntroductionMessage();
      localStorage.setItem("hasSeenIntroduction", "true");
    }
  }, []);

  const sendIntroductionMessage = () => {
    const introMessage = "Hello, I am BaaBot! How can I assist you?";
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "BaaBot", message: introMessage },
    ]);
  };

  const handleUserInput = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, { sender: "You", message }]);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (message === "Exit") {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "BaaBot", message: presetChoices["Exit"] },
        ]);
        setIsChatbotOpen(false); // Close the chatbot without exiting the page
      } else {
        const answer =
          presetChoices[message] ||
          "I'm sorry, I don't have a specific answer for that.";
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "BaaBot", message: answer },
        ]);

      }
    }, 1000); // Add a 1-second delay before displaying the answer
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {!isChatbotOpen && ( // Show the "Chatbot" button when chatbot is closed
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          FAQ
        </button>
      )}
      {isChatbotOpen && ( // Render the chatbot component only when isChatbotOpen is true
        <div className="bg-white p-2 rounded-lg shadow mb-2 max-w-xs overflow-y-auto">
          <div id="chatbox">
            {chatMessages.map((chat, index) => (
              <div key={index} className={`mb-2 ${chat.sender === "You" ? "text-right" : "text-left"}`}>
                <div className={`${chat.sender !== "You" ? "bg-blue-200" : "bg-gray-300"} rounded-lg px-3 py-1 inline-block max-w-xs shadow-md`}>
                  {chat.message}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left text-gray-800">
                <div className="bg-gray-300 text-gray-800 rounded-lg px-3 py-1 inline-block animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-1">
            {Object.keys(presetChoices).map((choice, index) => (
              <button
                key={index}
                onClick={() => handleUserInput(choice)}
                className={`px-3 py-1 ${
                  choice === "Exit" ? "bg-red-500" : "bg-gray-300"
                } text-gray-800 rounded-md shadow focus:outline-none focus:ring-2 ${
                  choice === "Exit" ? "focus:ring-red-400" : "focus:ring-gray-400"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
