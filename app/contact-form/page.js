"use client"

import ContactForm from "@/components/ContactSection";
import Header from "@/components/Header";

import Link from "next/link";

export default function ContactFormPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-8">
         
          <ContactForm />
        </div>
      </div>
    
    </>
  )
}
