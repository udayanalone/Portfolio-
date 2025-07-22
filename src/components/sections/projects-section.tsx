import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
    {
      title: "Project Alpha",
      description: "A web application for project management, built with React and Node.js. Features real-time collaboration.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["React", "Node.js", "Websockets"],
      aiHint: "technology abstract"
    },
    {
      title: "Project Beta",
      description: "A mobile app for fitness tracking. Developed using Swift for iOS. Integrates with HealthKit.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["iOS", "Swift", "HealthKit"],
      aiHint: "mobile app"
    },
    {
      title: "Project Gamma",
      description: "An e-commerce platform with a custom CMS, powered by Next.js and integrated with Stripe for payments.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["Next.js", "Stripe", "E-commerce"],
      aiHint: "online shopping"
    },
  ];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">A selection of my recent work.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover aspect-[3/2] w-full" data-ai-hint={project.aiHint} />
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                    <Link href={project.link} target="_blank">
                        View Project <ExternalLink className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
