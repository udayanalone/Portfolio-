"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { useEditMode } from "@/hooks/use-edit-mode";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  const { data, setData } = usePortfolioData();
  const { isEditMode } = useEditMode();

  const handleContactChange = (field: keyof typeof data.contact, value: string) => {
    setData({ ...data, contact: { ...data.contact, [field]: value } });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get In Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4 pt-8">
          <div className="flex items-center justify-center gap-4 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            {isEditMode ? (
              <Input
                value={data.contact.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                placeholder="Email"
              />
            ) : (
              <a href={`mailto:${data.contact.email}`} className="hover:underline">{data.contact.email}</a>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Phone className="h-5 w-5 text-primary" />
             {isEditMode ? (
              <Input
                value={data.contact.phone}
                onChange={(e) => handleContactChange('phone', e.target.value)}
                placeholder="Phone"
              />
            ) : (
              <a href={`tel:${data.contact.phone}`} className="hover:underline">{data.contact.phone}</a>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
             {isEditMode ? (
              <Input
                value={data.contact.location}
                onChange={(e) => handleContactChange('location', e.target.value)}
                placeholder="Location"
              />
            ) : (
              <p>{data.contact.location}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
