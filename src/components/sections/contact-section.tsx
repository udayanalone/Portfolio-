import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
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
            <a href="mailto:alex.doe@email.com" className="hover:underline">alex.doe@email.com</a>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
