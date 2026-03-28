import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import all photos
import telescopeClassroom from "@/assets/photos/telescope-classroom.jpg";
import nasaSpaceApps from "@/assets/photos/nasa-space-apps.jpg";
import daydreamButwal from "@/assets/photos/daydream-butwal.jpg";
import telescopeOutdoor from "@/assets/photos/telescope-outdoor.jpg";
import certificate1 from "@/assets/photos/certificate-1.jpg";
import certificate2 from "@/assets/photos/certificate-2.jpg";
import certificate3 from "@/assets/photos/certificate-3.jpg";
import certificate4 from "@/assets/photos/certificate-4.jpg";
import certificate5 from "@/assets/photos/certificate-5.jpg";
import seoCertificate from "@/assets/photos/seo-certificate.jpg";
import friendsGroup from "@/assets/photos/friends-group.jpg";
import cProgrammingCert from "@/assets/photos/c-programming-certificate.jpg";
import codingOlympiad from "@/assets/photos/coding-olympiad-medal.jpg";
import simplemAiCert from "@/assets/photos/simplem-ai-certificate.jpg";
import introSeoCert from "@/assets/photos/intro-seo-certificate.jpg";
import pythonBeginnersCert from "@/assets/photos/python-beginners-certificate.jpg";
import simplilearnCompletionCert from "@/assets/photos/simplilearn-completion-certificate.jpg";
import ictClubHorizonsCert from "@/assets/photos/ict-club-horizons-certificate.jpg";
import awardCeremonyReceiving from "@/assets/photos/award-ceremony-receiving.jpg";
import awardCeremonyTeam from "@/assets/photos/award-ceremony-team.jpg";
import codingOlympiadAwards from "@/assets/photos/coding-olympiad-awards.jpg";
import nasaSpaceAppsSetup from "@/assets/photos/nasa-space-apps-setup.jpg";

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const photos = [
    { src: telescopeClassroom, alt: "Sirjal Adhikari observing through telescope in classroom" },
    { src: nasaSpaceApps, alt: "NASA Space Apps Challenge 2024 participant badge - Sirjal Adhikari" },
    { src: daydreamButwal, alt: "DayDream Butwal hackathon event badge" },
    { src: telescopeOutdoor, alt: "Stargazing session with telescope outdoors in Nepal" },
    { src: friendsGroup, alt: "Sirjal Adhikari with teammates at tech event" },
    { src: codingOlympiad, alt: "Inter School Coding Olympiad medal winner - Rupandehi District" },
    { src: certificate1, alt: "New Horizon English Boarding School achievement certificate" },
    { src: certificate2, alt: "Great Learning online course completion certificate" },
    { src: certificate3, alt: "Technical course completion certificate" },
    { src: certificate4, alt: "Programming course completion certificate" },
    { src: certificate5, alt: "Online learning completion certificate" },
    { src: cProgrammingCert, alt: "C Programming Basics certification from online learning platform" },
    { src: seoCertificate, alt: "SEO Fundamentals training certificate - digital marketing" },
    { src: simplemAiCert, alt: "SIMPLEM AI Innovation Challenge participation certificate" },
    { src: introSeoCert, alt: "Introduction to SEO certificate from SimpliLearn" },
    { src: pythonBeginnersCert, alt: "Python for Beginners certificate from Great Learning" },
    { src: simplilearnCompletionCert, alt: "SimpliLearn SkillUP course completion certificate" },
    { src: ictClubHorizonsCert, alt: "ICT Club of Horizons Coding Olympiad participation certificate" },
    { src: awardCeremonyReceiving, alt: "Sirjal Adhikari receiving award at ceremony" },
    { src: awardCeremonyTeam, alt: "Team photo with trophy at award ceremony" },
    { src: codingOlympiadAwards, alt: "District Level Coding Olympiad winner certificates and awards display" },
    { src: nasaSpaceAppsSetup, alt: "NASA Space Apps Challenge workspace setup with telescope" },
  ];

  return (
    <section id="photos" className="py-24 px-6" aria-label="Photo gallery and achievements">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Gallery
          </p>
          <h2 className="text-foreground">
            Photos & Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Moments from competitions, events, and learning milestones
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border/30 hover:border-border/60 transition-all"
              aria-label={`View larger: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-border/50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <figure className="flex flex-col items-center justify-center p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center max-w-md">
                {selectedImage.alt}
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Photos;
