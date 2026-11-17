import React, { useEffect, useRef, useState } from "react";
import { Bot, X, Send, Sparkles, ArrowUpRight, RotateCcw, Copy, ClipboardList, Layers3, Wallet, Lightbulb, Mail, Check } from "lucide-react";

const welcome = "Hi! I’m Bandevi’s AI Project Advisor. Tell me what you’re trying to build or improve, and I’ll help you explore the right technology solution.";
const tools = [
  { label: "Plan a project", icon: ClipboardList, prompt: "Help me plan a new digital project. Ask me the most important discovery questions one at a time, then create a practical project roadmap." },
  { label: "Recommend features", icon: Lightbulb, prompt: "I want to build a digital product for my business. Help me identify the most useful features. Ask what kind of business I run first." },
  { label: "Choose a tech stack", icon: Layers3, prompt: "Recommend a suitable technology stack for my project. First ask about the product, expected users, integrations, and my team's technical preferences." },
  { label: "Budget & timeline guide", icon: Wallet, prompt: "Help me understand the main cost and timeline drivers for my project. Ask about scope and complexity first. Do not invent a quote or promise a delivery date; give only relative complexity guidance and explain what Bandevi would need to prepare an estimate." },
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: welcome }]);
  const endRef = useRef(null);
  const userMessageCount = messages.filter((message) => message.role === "user").length;

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
    setCopied(false);
    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12) })
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
    setMessages([{ role: "assistant", content: welcome }]);
    setInput("");
    setCopied(false);
  }

  async function copyBrief() {
    const transcript = messages.map((message) => `${message.role === "user" ? "Visitor" : "Bandevi AI"}: ${message.content}`).join("\n\n");
    const brief = `PROJECT DISCUSSION — BANDEVI GLOBAL GROUP\n\n${transcript}\n\nNext step: Review the requirements with the Bandevi team.\nEmail: sales@bandeviglobalgroup.com\nPhone: +91 70110 40474`;
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "Clipboard access is unavailable in this browser. You can select and copy the conversation manually." }]);
    }
  }

  function emailBrief() {
    const transcript = messages.map((message) => `${message.role === "user" ? "Visitor" : "Bandevi AI"}: ${message.content}`).join("\n\n");
    const subject = encodeURIComponent("Project enquiry — Bandevi Global Group");
    const body = encodeURIComponent(`Hello Bandevi team,\n\nI'd like to discuss the following project requirements:\n\n${transcript}\n\nPlease contact me to discuss the next steps.\n`);
    window.location.href = `mailto:sales@bandeviglobalgroup.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="ai-advisor">
      {open && (
        <section className="ai-panel" aria-label="Bandevi AI Project Advisor">
          <header className="ai-panel-header">
            <div className="ai-avatar"><Sparkles size={19} /></div>
            <div className="ai-heading">
              <strong>Bandevi AI Advisor</strong>
              <span><i /> Project planning · Ideas · Technology</span>
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
              <div className="ai-toolkit">
                <span className="ai-toolkit-label">What would you like help with?</span>
                <div className="ai-tool-grid">
                  {tools.map(({ label, icon: Icon, prompt }) => (
                    <button type="button" className="ai-tool-card" key={label} onClick={() => sendMessage(prompt)}>
                      <Icon size={16} /><span>{label}</span><ArrowUpRight size={13} />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {busy && <div className="ai-typing"><span /><span /><span /> Thinking</div>}
            <div ref={endRef} />
          </div>
          <div className="ai-actions">
            {userMessageCount >= 2 && !busy && (
              <>
                <button type="button" onClick={copyBrief}><Copy size={13} />{copied ? "Copied project discussion" : "Copy project brief"}</button>
                <button type="button" onClick={emailBrief}><Mail size={13} />Email Bandevi</button>
              </>
            )}
          </div>
          <form className="ai-compose" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Describe your project..." maxLength={1200} aria-label="Your message" />
            <button type="submit" disabled={!input.trim() || busy} aria-label="Send message"><Send size={17} /></button>
          </form>
          <p className="ai-disclaimer">AI guidance is indicative. Final scope, pricing and timelines are confirmed by the Bandevi team.</p>
        </section>
      )}
      <button type="button" className={`ai-launcher ${open ? "is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close AI advisor" : "Open AI project advisor"}>
        {open ? <X size={21} /> : <><Sparkles size={19} /><span>Ask AI</span></>}
      </button>
    </div>
  );
}
