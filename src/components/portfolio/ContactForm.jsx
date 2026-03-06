import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_URL = import.meta.env.VITE_BREVO_URL;
const BREVO_USER_EMAIL = import.meta.env.VITE_BREVO_USER_EMAIL;
const BREVO_USER_NAME = import.meta.env.VITE_BREVO_USER_NAME;

async function sendEmailViaBrevo({ name, email, subject, message }) {
  const response = await fetch(`${BREVO_URL}/smtp/email`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: BREVO_USER_NAME,
        email: BREVO_USER_EMAIL,
      },
      to: [
        {
          email: BREVO_USER_EMAIL,
          name: BREVO_USER_NAME,
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `Portfolio Contact: ${subject}`,
      htmlContent: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">📬 New Portfolio Message</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Message</p>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 24px; text-align: center;">
              Sent from your portfolio contact form • ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to send email (${response.status})`);
  }

  return response.json();
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await sendEmailViaBrevo(form);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Name</Label>
          <Input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-muted/50 border-border/50 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Email</Label>
          <Input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-muted/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Subject</Label>
        <Input
          placeholder="What's this about?"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          required
          className="bg-muted/50 border-border/50 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Message</Label>
        <Textarea
          placeholder="Tell me about your project or idea..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          className="bg-muted/50 border-border/50 focus:border-primary resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={sending || sent}
        className="w-full rounded-xl bg-primary hover:bg-primary/90 gap-2 h-12"
      >
        {sent ? (
          <>
            <CheckCircle className="w-4 h-4" />
            Message Sent!
          </>
        ) : sending ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
}
