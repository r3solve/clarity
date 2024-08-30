import React, {useState} from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
// FaArrowCircleUp
export default function Navbar() {
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I help you today?', sender: 'chatbot' },
        { text: 'I need help with my account.', sender: 'user' },
        { text: 'Sure, I can assist with that.', sender: 'chatbot' },
      ]);
    
      // State to manage input value
      const [inputValue, setInputValue] = useState('');
    
      // Function to handle sending messages
      const handleSendMessage = () => {
        if (inputValue.trim()) {
          setMessages([...messages, { text: inputValue, sender: 'user' }]);
          setInputValue('');
    
          // Simulate chatbot response
          setTimeout(() => {
            setMessages([...messages, { text: inputValue, sender: 'user' }, { text: 'I have received your message.', sender: 'chatbot' }]);
          }, 1000);
        }
      };
    
      return (
        <div className="flex flex-col h-full">
          {/* Messages container */}
          <div className="flex-grow overflow-auto p-4 bg-gray-100 flex flex-col justify-end">
            <div className="flex flex-col space-y-4 mx-auto max-w-2xl">
              {/* Centered chat messages */}
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}
                    style={{ maxWidth: '75%' }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200">
            <div className="flex items-center max-w-3xl mx-auto">
              <input
                type="text"
                className="flex-grow p-2 border rounded-l-lg border-gray-300"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ maxWidth: 'calc(100% - 60px)' }}  // Adjust max width here
              />
              <FaArrowCircleUp
                size={40}
                color='green'
                className='ml-2 cursor-pointer'
                onClick={handleSendMessage}
              />
            </div>
          </div>
        </div>
      );
}
