'use client';

import { useState, useEffect, useRef } from 'react';
import { connorData } from '../api/connorData';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello there! What would you like to know?`
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      setMessages([
        {
          role: 'assistant',
     content: `Hello there! What would you like to know?`
    },
      ]);
      localStorage.removeItem('connorBotMessages');
    }
  }, [open]);

  useEffect(() => {
    localStorage.setItem('connorBotMessages', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateSystemPrompt = (data) => {
    const techList = Object.entries(data.skills)
      .map(([area, items]) => `${area}: ${items.join(', ')}`)
      .join(' | ');

    const projectDescriptions = data.projects
      .map((p) => `${p.title}: ${p.description}`)
      .join(' | ');

    return `You are a light-hearted AI assistant for Connor D. Wotkowicz — a full-stack developer based in ${data.basedIn}, originally from ${data.hometown}. You speak clearly and helpfully, and only answer using Connor's background and portfolio. Connor is a graduate of ${data.education.bootcamp}, with a ${data.education.degree}. His style blends frontend finesse with backend depth and a creative edge from music and visual design. Projects: ${projectDescriptions} | Design Style: ${data.designStyle} | Skills: ${techList} | Languages: ${data.languages.join(', ')} | Bio: ${data.bio} | Answer concisely and in a warm, helpful tone. If something’s outside your scope, reply: "That’s something Connor might need to explain himself."`;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage].slice(-8);
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const systemPrompt = generateSystemPrompt(connorData);
    console.log('SYSTEM PROMPT:', systemPrompt);

    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
   body: JSON.stringify({
  messages: newMessages,
  systemPrompt,
}),

      });

      const data = await res.json();
      console.log('GPT RESPONSE:', data);

      const reply = data.choices?.[0]?.message?.content;

      if (reply) {
        setMessages([...newMessages, { role: 'assistant', content: reply }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content:
              'Sorry, I couldn’t come up with a good answer for that. Try asking another way?',
          },
        ]);
      }
    } catch (err) {
      console.error('GPT Error:', err);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'There was a problem reaching GPT-4. Try again shortly!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      {!open && (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}

      {open && (
        <div className="chat-box">
          <header>
            <span>Ask the robot</span>
            
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </header>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="chat-msg assistant typing">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <footer>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me something…"
            />
            <button onClick={sendMessage}>➤</button>
          </footer>
        </div>
      )}
    </div>
  );
}
