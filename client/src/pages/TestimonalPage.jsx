import React from "react";

const testimonials = [
  {
    text: "BRT Event Management made our corporate retreat absolutely seamless! Every detail was handled with professionalism and creativity. Their team went above and beyond to ensure our event was a resounding success.",
    author: "Maddy, CEO of Hippo Groups",
    image: "/src/assets/client.png",
  },
  {
    text: "Our wedding was a dream come true thanks to BRT Event Management. They understood our vision perfectly and executed it flawlessly. From the decor to the catering, everything was perfect.",
    author: "Raj & Abinaya",
    image: "/src/assets/client.png", // Added the provided user icon
  },
  {
    text: "We've worked with BRT Event Management on multiple product launches, and they consistently exceed our expectations. Their innovative ideas and flawless execution always create a buzz.",
    author: "Charlie, Marketing Director at OneRose Labs",
    image: "/src/assets/client.png",
  },
  {
    text: "Organizing a large-scale music festival is no small feat, but BRT Event Management handled it with incredible efficiency and expertise. Their planning and management were top-notch.",
    author: "Pavan, Festival Organizer",
    image: "/src/assets/client.png",
  },
];

const TestimonialsPage = () => {
  const handleImgError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "/avatars/placeholder.jpg"; // Fallback image path
  };

  return (
    <section
      id="testimonials-page-content"
      className="py-20 px-6 sm:px-10 bg-gray-100 min-h-screen pt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-12">
          WHAT OUR CLIENTS SAY ABOUT US 📝
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(({ text, author, image }, index) => (
            <div
              key={index}
              role="region"
              aria-label={`Testimonial by ${author}`}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl text-red-400 mb-3">❝</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">{text}</p>

              <div className="flex items-center gap-4 mt-4">
                <img
                  src={image}
                  alt={author}
                  loading="lazy"
                  onError={handleImgError}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-300"
                />
                <p className="font-semibold text-gray-900">{author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;