"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const actionFormSubscriptionService = ""//https://formspree.io/f/xovjggje";

export function SubscriptionForm() {
  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Success! Thank you for subscribing.", {
      duration: 3000, // Toast visibile per 3 secondi
    });

    const inputElement = document.getElementById("subscribe-form-input") as HTMLInputElement | null;
    if (inputElement) {
      inputElement.value = ""; // Reset del campo solo se l'elemento esiste
    }
  };

  return (
    <form
      id="subscribe-form"
      className="flex flex-col md:flex-row items-center justify-center gap-3"
      onSubmit={handleSubscription}
      action={actionFormSubscriptionService}
      method="POST"
    >
      <Input
        id="subscribe-form-input"
        required
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-600 rounded-md shadow-md"
      />
      <Button type="submit" variant="primary" className="w-full md:w-auto px-6 py-3 text-md font-semibold">
        Sign Up
      </Button>
    </form>
  );
}
