import React, { useState, useEffect } from 'react';
import { Send, Bot, User, Brain, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import type { ChatMessage } from '../types';
import { createSessionId, buildApiUrl, fetchWithTimeout } from '../lib/api';

export const AssistantScreen = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: "Hello. I am Tanmesh's digital twin. I can answer questions about his technical stack, professional journey, or open-source contributions. How can I assist your inquiry today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactFeedback, setContactFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  useEffect(() => {
    const existingSessionId = window.localStorage.getItem('portfolio-chat-session-id');
    if (existingSessionId) {
      setSessionId(existingSessionId);
      return;
    }

    const nextSessionId = createSessionId();
    window.localStorage.setItem('portfolio-chat-session-id', nextSessionId);
    setSessionId(nextSessionId);
  }, []);

  const handleSend = async (presetMessage?: string) => {
    const messageToSend = (presetMessage ?? input).trim();
    if (!messageToSend || !sessionId || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', text: messageToSend }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetchWithTimeout(buildApiUrl('/api/chat'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data = await response.json() as { reply?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: data.reply ?? "I couldn't generate a reply right now. Please try again.",
        },
      ]);
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === 'AbortError';
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: timedOut
            ? "That request timed out. The assistant backend may be slow or unreachable right now — please try again."
            : "The FastAPI assistant backend is not reachable right now. Start the backend server and configure GEMINI_API_KEY if you want full AI responses with memory.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactFieldChange = (
    field: 'name' | 'email' | 'message',
    value: string,
  ) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    setContactFeedback(null);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      message: contactForm.message.trim(),
      source: 'assistant-direct-signal',
    };

    if (!payload.name || !payload.email || !payload.message || isSubmittingContact) {
      setContactFeedback({
        type: 'error',
        text: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    setIsSubmittingContact(true);
    setContactFeedback(null);

    try {
      const response = await fetchWithTimeout(buildApiUrl('/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json() as { detail?: string };

      if (!response.ok) {
        throw new Error(data.detail ?? `Contact request failed with status ${response.status}`);
      }

      setContactForm({
        name: '',
        email: '',
        message: '',
      });
      setContactFeedback({
        type: 'success',
        text: 'Message transmitted successfully. It has been stored in MongoDB.',
      });
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === 'AbortError';
      const errorMessage = timedOut
        ? 'That request timed out. Please try again in a moment.'
        : error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again.';

      setContactFeedback({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <section className="lg:col-span-7 flex flex-col gap-8">
        <header>
          <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-4">
            Architecting <br/><span className="text-secondary">Intelligence.</span>
          </h1>
          <p className="text-lg text-on-primary-container max-w-xl leading-relaxed">
            Explore my engineering depth through this neural interface. Ask about my work with LLMs, backend infrastructure, or specific projects like ReqScan AI.
          </p>
        </header>

        <div className="glass-panel rounded-xl border border-outline-variant/15 flex flex-col h-[600px] shadow-xl relative overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 bg-surface-container-high/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center">
                <Brain className="text-surface w-6 h-6" />
              </div>
              <div>
                <p className="font-headline font-bold text-sm tracking-wide">PORTFOLIO AGENT v1.0</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Operational</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'cta-gradient' : 'bg-surface-container-highest'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-surface" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl border ${
                  msg.role === 'user' ? 'bg-secondary/10 border-secondary/20 rounded-tr-none' : 'bg-surface-container-low border-outline-variant/5 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-surface-container-highest">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl border bg-surface-container-low border-outline-variant/5 rounded-tl-none">
                  <p className="text-sm leading-relaxed text-on-primary-container">Thinking through Tanmesh&apos;s portfolio context...</p>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {["What's your LLM experience?", "View Github activity", "Tech Stack"].map(q => (
              <button
                key={q}
                onClick={() => void handleSend(q)}
                disabled={isLoading || !sessionId}
                className="px-4 py-2 rounded-full bg-surface-container-highest border border-outline-variant/20 text-xs text-on-surface-variant hover:bg-secondary/10 hover:text-secondary transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="p-6 pt-0">
            <div className="relative group">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && void handleSend()}
                className="w-full bg-surface-container-highest border-b border-outline-variant/30 px-6 py-4 rounded-t-xl focus:outline-none focus:border-secondary transition-colors text-sm placeholder:text-on-surface-variant/50"
                placeholder="Inquire about infrastructure, AI, or experience..."
                aria-label="Chat message"
                type="text"
                disabled={isLoading || !sessionId}
              />
              <button
                onClick={() => void handleSend()}
                disabled={isLoading || !sessionId}
                aria-label="Send message"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-secondary hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-on-surface-variant/40 tracking-widest uppercase">Inference provided by FastAPI + Gemini + portfolio RAG memory</p>
          </div>
        </div>
      </section>

      <section className="lg:col-span-5 flex flex-col gap-8">
        <div className="glass-panel rounded-lg p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-headline font-bold mb-2">Direct Signal</h2>
            <p className="text-on-primary-container text-sm mb-8">Initiate a direct communication channel for collaborations or professional opportunities.</p>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="space-y-1">
                <label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Identification</label>
                <input
                  id="contact-name"
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors placeholder:text-outline-variant"
                  placeholder="Your Name"
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => handleContactFieldChange('name', e.target.value)}
                  disabled={isSubmittingContact}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Digital Address</label>
                <input
                  id="contact-email"
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors placeholder:text-outline-variant"
                  placeholder="Email@domain.com"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => handleContactFieldChange('email', e.target.value)}
                  disabled={isSubmittingContact}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Payload</label>
                <textarea
                  id="contact-message"
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors resize-none placeholder:text-outline-variant"
                  placeholder="Your message or project scope..."
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => handleContactFieldChange('message', e.target.value)}
                  disabled={isSubmittingContact}
                ></textarea>
              </div>
              {contactFeedback && (
                <p
                  className={`text-sm ${
                    contactFeedback.type === 'success' ? 'text-secondary' : 'text-red-400'
                  }`}
                >
                  {contactFeedback.text}
                </p>
              )}
              <button
                className="w-full py-4 cta-gradient rounded-full font-bold text-surface text-sm tracking-widest uppercase hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                type="submit"
                disabled={isSubmittingContact}
              >
                {isSubmittingContact ? 'Transmitting...' : 'Transmit Message'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a href="mailto:joshi.tanmesh@gmail.com" className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-colors group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Mail className="text-secondary w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/tanmeshjoshi" target="_blank"
              rel="noopener noreferrer"  className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-colors group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Linkedin className="text-secondary w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">LinkedIn</span>
          </a>
          <a href="https://github.com/Tanmesh1" target="_blank"
              rel="noopener noreferrer" className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-colors group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Github className="text-secondary w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">GitHub</span>
          </a>
          <div className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-tertiary/5 to-transparent">
            <span className="text-2xl font-headline font-bold text-tertiary">12ms</span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant text-center font-bold">Avg Response Latency</span>
          </div>
        </div>
      </section>
    </div>
  );
};
