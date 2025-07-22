"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Trash2 } from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { useEditMode } from "@/hooks/use-edit-mode";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ProjectsSection() {
  const { data, setData } = usePortfolioData();
  const { isEditMode } = useEditMode();
  const { projects } = data;

  const handleProjectChange = (index: number, field: string, value: string | string[]) => {
    const newProjects = [...projects];
    if (field === 'tags' && typeof value === 'string') {
        newProjects[index] = { ...newProjects[index], [field]: value.split(',').map(tag => tag.trim()) };
    } else {
        newProjects[index] = { ...newProjects[index], [field]: value };
    }
    setData({ ...data, projects: newProjects });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...projects,
        {
          title: "New Project",
          description: "A description for your new project.",
          image: "https://placehold.co/600x400.png",
          link: "#",
          tags: ["new", "project"],
          aiHint: "project placeholder"
        }
      ]
    });
  };

  const removeProject = (index: number) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setData({ ...data, projects: newProjects });
  };
  
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          handleProjectChange(index, 'image', event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">A selection of my recent work.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
              {isEditMode && (
                 <Button variant="ghost" size="icon" onClick={() => removeProject(index)} className="text-destructive-foreground bg-destructive hover:bg-destructive/90 absolute top-2 right-2 z-10 h-8 w-8">
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
              <div className="relative">
                <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover aspect-[3/2] w-full" data-ai-hint={project.aiHint} />
                {isEditMode && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                     <Input id={`image-upload-${index}`} type="file" accept="image/*" onChange={(e) => onImageChange(e, index)} className="hidden" />
                     <Button asChild variant="secondary">
                       <label htmlFor={`image-upload-${index}`}>Change Image</label>
                     </Button>
                  </div>
                )}
              </div>
              <CardHeader>
                {isEditMode ? (
                  <div className="space-y-2">
                    <Input value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} className="font-headline text-2xl"/>
                    <Input value={project.tags.join(', ')} onChange={(e) => handleProjectChange(index, 'tags', e.target.value)} placeholder="Tags (comma-separated)"/>
                  </div>
                ) : (
                  <>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-1 pt-2">
                        {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                  </>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                {isEditMode ? (
                  <Textarea value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} rows={4} />
                ) : (
                  <CardDescription>{project.description}</CardDescription>
                )}
              </CardContent>
              <CardFooter>
                 {isEditMode ? (
                   <Input value={project.link} onChange={(e) => handleProjectChange(index, 'link', e.target.value)} placeholder="Project Link" />
                 ) : (
                  <Button asChild variant="secondary" className="w-full">
                      <Link href={project.link} target="_blank">
                          View Project <ExternalLink className="ml-2 h-4 w-4"/>
                      </Link>
                  </Button>
                 )}
              </CardFooter>
            </Card>
          ))}
          {isEditMode && (
            <div className="text-center mt-6 col-span-full">
                <Button onClick={addProject}><Plus className="mr-2 h-4 w-4"/>Add Project</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
