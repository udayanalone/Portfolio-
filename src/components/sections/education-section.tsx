const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      year: "2020 - 2022"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State College of Engineering",
      year: "2016 - 2020"
    }
  ];

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Education</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-10">
          {education.map(edu => (
            <div key={edu.institution} className="grid gap-1 relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-primary before:rounded-full">
              <h3 className="text-xl font-bold font-headline">{edu.degree}</h3>
              <p className="text-muted-foreground font-medium">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
