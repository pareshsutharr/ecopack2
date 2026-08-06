"use client";

import { useState } from "react";

export type SubmitState = "idle" | "submitting" | "success" | "error";

// Shared submit logic for ContactForm and QuickRfqForm — both post to the
// same /api/contact route.
export function useRfqSubmit() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (data: Record<string, string>) => {
    setState("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error || "Something went wrong. Please try again or call us.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setErrorMessage("Network error. Please try again or call us.");
      setState("error");
    }
  };

  return { state, errorMessage, submit };
}
