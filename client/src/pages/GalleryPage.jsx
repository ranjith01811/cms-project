import React from 'react';


function GalleryPage() {
  return (
    <section id="gallery-page-content" className="py-20 px-6 sm:px-10 bg-white min-h-screen pt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-10">OUR EVENT GALLERY📸</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="/src/assets/image.png" target="_blank" rel="noopener noreferrer">
              <img
                src="/src/assets/image.png"
                alt="Corporate Gala"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  CORPORATE GALA
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="/src/assets/wedding.avif" target="_blank" rel="noopener noreferrer">
              <img
                src="/src/assets/wedding.avif"
                alt="Wedding Reception"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  WEDDING RECEPTION
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="/src/assets/pl.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/src/assets/pl.jpg"
                alt="Product Launch"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  PRODUCT LAUNCH
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="\src\assets\me.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="\src\assets\me.jpg"
                alt="Music Festival"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  MUSIC FESTIVAL
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="\src\assets\bday.webp" target="_blank" rel="noopener noreferrer">
              <img
                src="\src\assets\bday.webp"
                alt="Birthday Party"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  BIRTHDAY PARTY
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="\src\assets\ss.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="\src\assets\ss.jpg"
                alt="Seminar Setup"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  SEMINAR SETUP
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="\src\assets\ac.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="\src\assets\ac.jpg"
                alt="Award Ceremony"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  AWARD CEREMONY
                </span>
              </div>
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <a href="\src\assets\eb.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="\src\assets\eb.jpg"
                alt="Exhibition Booth"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-extrabold font-serif tracking-wide drop-shadow-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                  EXHIBITION BOOTH
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;