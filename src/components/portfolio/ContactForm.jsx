import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "maheshkumarnalluri7@gmail.com",
      subject: `Portfolio Contact: ${form.subject}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
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
