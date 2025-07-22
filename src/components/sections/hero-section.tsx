import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                Alex Doe
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate Full-Stack Developer creating modern and responsive web applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Link href="#" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
               <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/550x550.png"
            width="550"
            height="550"
            alt="Alex Doe"
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover shadow-2xl"
            data-ai-hint="professional portrait"
          />
        </div>
      </div>
    </section>
  );
}
