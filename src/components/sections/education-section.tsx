"use client";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { useEditMode } from "@/hooks/use-edit-mode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

export function EducationSection() {
  const { data, setData } = usePortfolioData();
  const { isEditMode } = useEditMode();
  const { education } = data;

  const handleEducationChange = (index: number, field: string, value: string) => {
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setData({ ...data, education: newEducation });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...education,
        { degree: "New Degree", institution: "New Institution", year: "Year" }
      ]
    });
  };

  const removeEducation = (index: number) => {
    const newEducation = education.filter((_, i) => i !== index);
    setData({ ...data, education: newEducation });
  };

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Education</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-10">
          {education.map((edu, index) => (
            <div key={index} className="grid gap-1 relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-primary before:rounded-full">
              {isEditMode ? (
                <div className="space-y-2">
                  <Input value={edu.degree} onChange={(e) => handleEducationChange(index, 'degree', e.target.value)} className="text-xl font-bold font-headline"/>
                  <Input value={edu.institution} onChange={(e) => handleEducationChange(index, 'institution', e.target.value)} className="text-muted-foreground font-medium" />
                  <Input value={edu.year} onChange={(e) => handleEducationChange(index, 'year', e.target.value)} className="text-sm" />
                   <Button variant="ghost" size="icon" onClick={() => removeEducation(index)} className="text-destructive-foreground bg-destructive hover:bg-destructive/90 absolute top-0 right-0 h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold font-headline">{edu.degree}</h3>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </>
              )}
            </div>
          ))}
          {isEditMode && (
            <div className="text-center mt-6">
              <Button onClick={addEducation}><Plus className="mr-2 h-4 w-4"/>Add Education</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
