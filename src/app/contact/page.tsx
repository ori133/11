import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "צור קשר" };

export default function ContactPage() {
  return (
    <Section>
      <h1 className="text-4xl font-bold">צור קשר</h1>
      <ContactForm />
    </Section>
  );
}
