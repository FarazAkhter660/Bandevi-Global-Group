import React, { useEffect, useRef, useState } from "react";
import { Bot, X, Send, Sparkles, ArrowUpRight, RotateCcw } from "lucide-react";

const starters = [
  "I need a website for my business",
  "Can you help automate my operations?",
  "I need a CRM or ERP system",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I’m Bandevi’s AI Project Advisor. Tell me what you’re trying to build or improve, and I’ll help you explore the right technology solution."
    }
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, busy, open]);

  async function sendMessage(value = input) {
    const text = value.trim();
    if (!text || busy) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-10) })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The assistant is unavailable.");
      setMessages((current) => [...current, { role: "assistant", content: data.answer }]);
    } catch (error) {
      setMessages((current) => [...current, {
        role: "assistant",
        content: error.message || "I couldn't connect just now. Please try again, or email sales@bandeviglobalgroup.com."
      }]);
    } finally {
      setBusy(false);
    }
  }

  function resetChat() {
    setMessages([{
      role: "assistant",
      content: "Hi! I’m Bandevi’s AI Project Advisor. Tell me what you’re trying to build or improve, and I’ll help you explore the right technology solution."
    }]);
  }

  return (
    <div className="ai-advisor">
      {open && (
        <section className="ai-panel" aria-label="Bandevi AI Project Advisor">
          <header className="ai-panel-header">
            <div className="ai-avatar"><Sparkles size={19} /></div>
            <div className="ai-heading">
              <strong>Bandevi AI Advisor</strong>
              <span><i /> Here to help with your project</span>
            </div>
            <button type="button" className="ai-icon-button" onClick={resetChat} aria-label="Start a new chat"><RotateCcw size={17} /></button>
            <button type="button" className="ai-icon-button" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={19} /></button>
          </header>
          <div className="ai-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`ai-message-row ${message.role === "user" ? "is-user" : ""}`} key={index}>
                {message.role === "assistant" && <span className="ai-message-avatar"><Bot size={15} /></span>}
                <div className="ai-message">{message.content}</div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="ai-starters">
                <span>Try asking</span>
                {starters.map((starter) => (
                  <button type="button" key={starter} onClick={() => sendMessage(starter)}>{starter}<ArrowUpRight size={13} /></button>
                ))}
              </div>
            )}
            {busy && <div className="ai-typing"><span /><span /><span /> Thinking</div>}
            <div ref={endRef} />
          </div>
          <form className="ai-compose" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Describe your project..." maxLength={1200} aria-label="Your message" />
            <button type="submit" disabled={!input.trim() || busy} aria-label="Send message"><Send size={17} /></button>
          </form>
          <p className="ai-disclaimer">AI-generated guidance. Final scope and pricing are confirmed by our team.</p>
        </section>
      )}
      <button type="button" className={`ai-launcher ${open ? "is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close AI advisor" : "Open AI project advisor"}>
        {open ? <X size={21} /> : <><Sparkles size={19} /><span>Ask AI</span></>}
      </button>
    </div>
  );
}
