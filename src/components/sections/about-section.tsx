"use client";
import { Badge } from "@/components/ui/badge";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { useEditMode } from "@/hooks/use-edit-mode";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export function AboutSection() {
  const { data, setData } = usePortfolioData();
  const { isEditMode } = useEditMode();

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, about: { ...data.about, bio: e.target.value } });
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...data.about.skills];
    newSkills[index] = value;
    setData({ ...data, about: { ...data.about, skills: newSkills } });
  };

  const addSkill = () => {
    setData({ ...data, about: { ...data.about, skills: [...data.about.skills, "New Skill"] } });
  };

  const removeSkill = (index: number) => {
    const newSkills = data.about.skills.filter((_, i) => i !== index);
    setData({ ...data, about: { ...data.about, skills: newSkills } });
  };


  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
            {isEditMode ? (
              <Textarea
                value={data.about.bio}
                onChange={handleAboutChange}
                className="max-w-[900px] text-lg text-center mx-auto"
                rows={5}
              />
            ) : (
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.about.bio}
              </p>
            )}
          </div>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
            <h3 className="text-2xl font-bold tracking-tighter text-center mb-8 font-headline">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.about.skills.map((skill, index) => (
                <div key={index} className="relative group">
                  {isEditMode ? (
                    <div className="flex items-center gap-2">
                      <Input
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className="text-md py-2 px-4 rounded-lg"
                      />
                      <Button variant="ghost" size="icon" onClick={() => removeSkill(index)} className="text-destructive-foreground bg-destructive hover:bg-destructive/90">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Badge variant="secondary" className="text-md py-2 px-4 rounded-lg hover:bg-accent transition-colors">{skill}</Badge>
                  )}
                </div>
              ))}
              {isEditMode && (
                <Button onClick={addSkill} variant="outline" size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Add Skill
                </Button>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}
