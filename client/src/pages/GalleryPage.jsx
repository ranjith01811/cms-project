import React from "react";
import ac from "../assets/ac.jpg";
import eb from "../assets/eb.jpg";
import me from "../assets/me.jpg";
import pl from "../assets/pl.jpg";
import bday from "../assets/bday.webp";
import ss from "../assets/ss.jpg";
import wedding from "../assets/wedding.avif";
import image from "../assets/image.png";

const galleryImages = [
  { src: ac, label: "CORPORATE GALA" },
  { src: eb, label: "WEDDING RECEPTION" },
  { src: me, label: "PRODUCT LAUNCH" },
  { src: pl, label: "MUSIC FESTIVAL" },
  { src: bday, label: "BIRTHDAY PARTY" },
  { src: ss, label: "SEMINAR SETUP" },
  { src: wedding, label: "AWARD CEREMONY" },
  { src: image, label: "EXHIBITION BOOTH" },
];

function GalleryPage() {
  return (
    <section
      id="gallery-page-content"
      className="py-20 px-6 sm:px-10 bg-white min-h-screen pt-24"
      aria-label="Event Gallery"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-10">
          OUR EVENT GALLERY📸
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map(({ src, label }, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group"
            >
              <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View larger image of ${label}`}>
                <img
                  src={src}
                  alt={label}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                    {label}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
