import { useState, useRef, useEffect } from 'react';
import { Bot, Send, Mic, Volume2, Sparkles, Plus, MessageSquare } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { aiService } from '../../services/aiService';
import { aiQuickActions } from '../../data/mockData';

const AITutor = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentQuestions, setRecentQuestions] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text) => {
    const question = text || input;
    if (!question.trim() || isTyping) return;

    setMessages((prev) => [...prev, { type: 'user', content: question }]);
    setInput('');
    setIsTyping(true);

    const response = await aiService.askQuestion(question);
    setIsTyping(false);

    setMessages((prev) => [...prev, { type: 'ai', content: response.answer }]);
    setRecentQuestions((prev) => [question, ...prev].slice(0, 5));
  };

  const handleVoice = () => {
    if (isListening) {
      setIsListening(false);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        handleSend('Photosynthesis kya hota hai?');
      }, 1500);
    } else {
      setIsListening(true);
    }
  };

  const handleQuickAction = (action) => {
    const prompts = {
      explain: 'Explain this concept in simple words',
      example: 'Give me an example of this concept',
      quiz: 'Create a quick quiz for me',
      translate: 'Translate this explanation to Hindi',
    };
    handleSend(prompts[action.id]);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold">AI Tutor</h1>
            <p className="text-xs text-ink-light">Ask any doubt, anytime</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={() => setMessages([])}>
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      <div className="mt-4 flex flex-1 gap-4 overflow-hidden">
        {/* Recent Questions (desktop) */}
        <div className="hidden w-64 shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
          <h2 className="text-sm font-semibold text-ink-light">Recent Questions</h2>
          {recentQuestions.length === 0 ? (
            <p className="text-sm text-ink-lighter">No questions yet</p>
          ) : (
            recentQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="flex items-start gap-2 rounded-lg p-3 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-ink-lighter" />
                <span className="line-clamp-2">{q}</span>
              </button>
            ))
          )}
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Bot className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Ask me anything!</h2>
                  <p className="mt-1 text-sm text-ink-light">
                    I can explain concepts, give examples, and help with homework
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {aiQuickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-purple-300 hover:bg-purple-50 dark:border-slate-600 dark:hover:bg-slate-700"
                    >
                      {action.icon} {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.type === 'user'
                      ? 'rounded-br-sm bg-primary-600 text-white'
                      : 'rounded-bl-sm bg-slate-100 dark:bg-slate-700'
                  }`}
                >
                  {msg.type === 'ai' && (
                    <div className="mb-1 flex items-center gap-1 text-xs text-ink-lighter">
                      <Bot className="h-3 w-3" />
                      AI Tutor
                    </div>
                  )}
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 dark:bg-slate-700">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-lighter" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-lighter [animation-delay:0.1s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-lighter [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Voice Status */}
          {isListening && (
            <div className="border-t p-3 text-center dark:border-slate-700">
              <div className="flex items-center justify-center gap-2 text-sm text-red-500">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                </span>
                Listening...
              </div>
            </div>
          )}

          {isProcessing && (
            <div className="border-t p-3 text-center dark:border-slate-700">
              <p className="text-sm text-ink-light">Processing...</p>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-3 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <button
                onClick={handleVoice}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isListening
                    ? 'bg-red-500 text-white'
                    : 'bg-slate-100 text-ink-light hover:bg-slate-200 dark:bg-slate-700'
                }`}
                aria-label="Voice input"
              >
                <Mic className="h-5 w-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask your doubt..."
                className="input flex-1"
                aria-label="Ask a question"
              />
              <Button onClick={() => handleSend()} disabled={!input.trim() || isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {aiQuickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-light hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                  {action.icon} {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;