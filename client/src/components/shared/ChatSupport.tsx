import { useState, useRef, useEffect } from "react";
import { chatResponses } from "@/lib/mockData";

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: string;
}

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! How can I help you with your cybersecurity needs today?",
      isUser: false,
      timestamp: "10:30 AM"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Helper function to get current time string
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    
    // Add user message
    const userMessage: ChatMessage = {
      text: inputText,
      isUser: true,
      timestamp: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = chatResponses[Math.floor(Math.random() * chatResponses.length)];
      
      const botMessage: ChatMessage = {
        text: randomResponse,
        isUser: false,
        timestamp: getCurrentTime()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Support Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-secondary hover:bg-secondary-dark text-white rounded-full p-3 shadow-lg z-20"
        aria-label="Chat Support"
      >
        <i className="bi bi-chat-dots-fill text-xl"></i>
      </button>

      {/* Chat Support Widget */}
      <div className={`fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-20 ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <i className="bi bi-headset text-xl mr-2"></i>
            <span className="font-medium">Support Chat</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
            aria-label="Close chat"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        
        <div className="h-80 overflow-y-auto p-4 bg-gray-50" id="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-3 ${msg.isUser ? 'justify-end' : ''}`}>
              {!msg.isUser && (
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-robot text-white"></i>
                </div>
              )}
              
              <div className={`${msg.isUser ? 'mr-2 bg-secondary-light text-white' : 'ml-2 bg-white'} p-3 rounded-lg shadow-sm max-w-[80%]`}>
                <p className="text-sm">{msg.text}</p>
                <span className={`text-xs ${msg.isUser ? 'text-white text-opacity-80' : 'text-gray-500'} mt-1 block`}>{msg.timestamp}</span>
              </div>
              
              {msg.isUser && (
                <div className="w-8 h-8 rounded-full bg-neutral-dark flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-3 border-t border-gray-200">
          <div className="flex">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..." 
              className="border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary flex-1" 
            />
            <button 
              onClick={handleSendMessage}
              className="bg-secondary hover:bg-secondary-dark text-white px-4 rounded-r-lg"
              aria-label="Send message"
            >
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
