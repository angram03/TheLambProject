import React, { useState, useEffect } from "react";

const MAX_MESSAGES = 5; // Set the maximum number of messages to display

const Chatbot = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const presetChoices = {
    "What does LAMB do?":
      "LAMB is designed to give you personalized city choices based on your preferences. LAMB is typically used by young adults relocating for the first time who may feel like lambs in a new city.",
    "How to begin?":
      "1. Create an account or log in.\n2. Input your city preferences.\n3. You're ready to go!\n\nSwipe left to discard a city and swipe right to accept a city. FYI : To view your currently accepted cities, go to the house icon. If you wish to learn more about the city before swiping right, click on the *More Info* button. ",
    "Who created LAMB?":
      "The app was created by Lucia, Angelica, and Habeebah. They're pretty cool, huh?",
    Exit: "Thanks for stopping by! If you have any more questions, feel free to ask. Have a great day!",
  };

  const sendIntroductionMessage = () => {
    const introMessage = "Hello, I am BaaBot! How can I assist you?";
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "BaaBot", message: introMessage },
    ]);
  };

  useEffect(() => {
    if (isChatbotOpen) {
      sendIntroductionMessage();
    }
  }, [isChatbotOpen]);

  const handleUserInput = (message) => {
    setChatMessages((prevMessages) => [
      ...prevMessages.slice(-MAX_MESSAGES + 1), // Keep only the last `MAX_MESSAGES` messages
      { sender: "You", message },
    ]);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (message === "Exit") {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "BaaBot", message: presetChoices["Exit"] },
        ]);
        setIsChatbotOpen(false);
      } else {
        const answer =
          presetChoices[message] ||
          "I'm sorry, I don't have a specific answer for that.";
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "BaaBot", message: answer },
        ]);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <img
            className="object-contain max-h-20 mb-4"
            src="images/sheep.png"
            alt="BaaBot"
          />
          <p>FAQ</p>
        </button>
      )}
      {isChatbotOpen && (
        <div className="bg-white p-2 rounded-lg shadow mb-2 max-w-lg overflow-y-auto">
          <div className="flex justify-end">
            <button
              onClick={() => setIsChatbotOpen(false)}
              className="text-red-600 text-2xl font-bold focus:outline-none"
            >
              &times;
            </button>
          </div>
          <div className="flex justify-center items-center mb-2">
            <div
              className="rounded-full bg-blue-500 w-12 h-12 flex justify-center items-center"
            >
              <img
                className="object-contain h-8"
                src="images/sheep.png"
                alt="BaaBot"
              />
            </div>
            <p className="text-gray-800 ml-2 font-semibold">BaaBot</p>
          </div>
          <hr className="my-2 border-gray-400" style={{ borderColor: "#015239" }} /> {/* Horizontal line with dark green color */}
          <div id="chatbot">
            {chatMessages.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  chat.sender === "You" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`${
                    chat.sender !== "You"
                      ? "bg-blue-500 text-white" // Dark green background for conversation bubble
                      : "bg-gray-300 text-black" // Light green background for user messages
                  } rounded-lg px-3 py-1 inline-block max-w-xs shadow-md`}
                >
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
                  choice === "Exit"
                    ? "focus:ring-red-400"
                    : "focus:ring-gray-400"
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
