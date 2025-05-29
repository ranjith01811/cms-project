function TestimonialsPage() {
  return (
    <section id="testimonials-page-content" className="py-20 px-6 sm:px-10 bg-gray-100 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-10">What Our Clients Say About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              "EventPro made our corporate retreat absolutely seamless! Every detail was handled with professionalism and creativity. Their team went above and beyond to ensure our event was a resounding success. Highly recommend their services for any corporate gathering."
            </p>
            <p className="font-semibold text-gray-900">- Jane Doe, CEO of TechCorp</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              "Our wedding was a dream come true thanks to EventPro. They understood our vision perfectly and executed it flawlessly. From the decor to the catering, everything was perfect. Truly exceptional and highly recommended for your special day!"
            </p>
            <p className="font-semibold text-gray-900">- John & Mary Smith</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              "We've worked with EventPro on multiple product launches, and they consistently exceed our expectations. Their innovative ideas and flawless execution always create a buzz. A fantastic partner for any brand looking to make an impact."
            </p>
            <p className="font-semibold text-gray-900">- Sarah Chen, Marketing Director at Innovate Labs</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              "Organizing a large-scale music festival is no small feat, but EventPro handled it with incredible efficiency and expertise. Their logistical planning and on-site management were top-notch. We couldn't have done it without them!"
            </p>
            <p className="font-semibold text-gray-900">- David Lee, Festival Organizer</p>
          </div>
        </div>
      </div>
    </section>
  );
}