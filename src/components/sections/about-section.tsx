import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Figma", "UI/UX Design", "Agile Methodologies"];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a dedicated software developer with a knack for building beautiful and functional user interfaces. With over 5 years of experience in the field, I thrive on solving complex problems and learning new technologies. When I'm not coding, I enjoy hiking and photography.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
            <h3 className="text-2xl font-bold tracking-tighter text-center mb-8 font-headline">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map(skill => <Badge key={skill} variant="secondary" className="text-md py-2 px-4 rounded-lg hover:bg-accent transition-colors">{skill}</Badge>)}
            </div>
        </div>
      </div>
    </section>
  );
}
