"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { useEditMode } from "@/hooks/use-edit-mode";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function HeroSection() {
  const { data, setData } = usePortfolioData();
  const { isEditMode } = useEditMode();
  const { profile } = data;

  const handleProfileChange = (field: keyof typeof profile, value: string) => {
    setData({ ...data, profile: { ...profile, [field]: value } });
  };
  
  const handleSocialChange = (social: 'github' | 'linkedin' | 'twitter', value: string) => {
    setData({
      ...data,
      profile: {
        ...profile,
        socials: {
          ...profile.socials,
          [social]: value,
        },
      },
    });
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if(event.target?.result) {
          handleProfileChange('image', event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {isEditMode ? (
                <>
                  <Input value={profile.name} onChange={(e) => handleProfileChange('name', e.target.value)} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline" />
                  <Textarea value={profile.tagline} onChange={(e) => handleProfileChange('tagline', e.target.value)} className="max-w-[600px] text-xl" />
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                    {profile.name}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {profile.tagline}
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 pt-4">
               {isEditMode ? (
                <>
                  <Input value={profile.socials.github} onChange={(e) => handleSocialChange('github', e.target.value)} placeholder="GitHub URL" />
                  <Input value={profile.socials.linkedin} onChange={(e) => handleSocialChange('linkedin', e.target.value)} placeholder="LinkedIn URL" />
                  <Input value={profile.socials.twitter} onChange={(e) => handleSocialChange('twitter', e.target.value)} placeholder="Twitter URL" />
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Link href={profile.socials.github} aria-label="GitHub" target="_blank">
                      <Github className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Link href={profile.socials.linkedin} aria-label="LinkedIn" target="_blank">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Link href={profile.socials.twitter} aria-label="Twitter" target="_blank">
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="relative">
            <Image
              src={profile.image}
              width="550"
              height="550"
              alt={profile.name}
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover shadow-2xl"
              data-ai-hint="professional portrait"
            />
            {isEditMode && (
              <div className="absolute bottom-4 right-4">
                <Input id="image-upload" type="file" accept="image/*" onChange={onImageChange} className="hidden" />
                <Button asChild>
                  <label htmlFor="image-upload">Change Image</label>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
