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

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: telescopeClassroom, alt: "Telescope Observation in Classroom" },
    { src: nasaSpaceApps, alt: "NASA Space Apps Challenge Participant Badge" },
    { src: daydreamButwal, alt: "DayDream Butwal 2025 Event Badge" },
    { src: telescopeOutdoor, alt: "Stargazing with Telescope" },
    { src: friendsGroup, alt: "Friends and Teammates" },
    { src: codingOlympiad, alt: "Inter School Coding Olympiad Medal - Rupandehi District" },
    { src: certificate1, alt: "New Horizon English Boarding Certificate" },
    { src: certificate2, alt: "Great Learning Certificate of Completion" },
    { src: certificate3, alt: "Certificate of Completion" },
    { src: certificate4, alt: "Certificate of Completion" },
    { src: certificate5, alt: "Certificate of Completion" },
    { src: cProgrammingCert, alt: "C Programming Basics Certificate" },
    { src: seoCertificate, alt: "SEO Fundamentals Training Certificate" },
  ];

  return (
    <section id="photos" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Photos</span> & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moments from competitions, events, and learning milestones
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo.src)}
              className="group relative aspect-square overflow-hidden rounded-xl glass border border-border/50 hover:border-primary/50 transition-all hover:card-glow"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-border/50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full glass hover:bg-destructive/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <div className="flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg animate-fade-in"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Photos;
