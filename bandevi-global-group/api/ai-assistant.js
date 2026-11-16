// Vercel serverless endpoint. Keep OPENAI_API_KEY in Vercel Environment Variables.
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }
  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({
      error: "The AI assistant is not configured yet. Please contact our team by email or WhatsApp."
    });
  }
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
  if (!messages.length || messages.length > 12) {
    return res.status(400).json({ error: "Please send a shorter conversation." });
  }
  const safeMessages = messages.map((item) => ({
    role: item?.role === "assistant" ? "assistant" : "user",
    content: String(item?.content || "").trim().slice(0, 1200),
  })).filter((item) => item.content);
  if (!safeMessages.length || safeMessages.some((item) => !item.content)) {
    return res.status(400).json({ error: "Please enter a message." });
  }
  try {
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-6-astra",
        instructions: [
          "You are Bandevi AI Project Advisor, the website assistant for Bandevi Global Group, a software and technology services company based in Gurugram, India.",
          "Help visitors understand and choose among website and app development, CRM and ERP, travel technology, AI and automation, and related digital solutions.",
          "Ask concise follow-up questions when requirements are unclear. Offer practical, high-level options, suggested features, implementation phases and useful questions for a project discussion.",
          "Do not invent company clients, case studies, prices, delivery timelines, guarantees, certifications or technical capabilities not provided here. If asked for a quote or commitment, explain that the team needs to review the requirements.",
          "For complex or commercial enquiries, invite the visitor to contact sales@bandeviglobalgroup.com or call +91 70110 40474. Never request passwords, payment details or sensitive personal data.",
          "Be friendly, concise and professional. Use plain text with short paragraphs and bullets where useful. Do not claim to book a meeting or submit a lead."
        ].join(" "),
        input: safeMessages,
        max_output_tokens: 500,
        store: false
      })
    });
    const data = await upstream.json();
    if (!upstream.ok) {
      console.error("OpenAI response error:", data?.error?.message || upstream.status);
      return res.status(502).json({ error: "The assistant is temporarily unavailable. Please try again or contact our team directly." });
    }
    const answer = (data.output || [])
      .filter((item) => item.type === "message")
      .flatMap((item) => item.content || [])
      .filter((item) => item.type === "output_text")
      .map((item) => item.text)
      .join("\n")
      .trim();
    if (!answer) {
      return res.status(502).json({ error: "I couldn't prepare a response just now. Please try again." });
    }
    return res.status(200).json({ answer });
  } catch (error) {
    console.error("AI assistant request failed:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again in a moment." });
  }
}
