import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import { testimonialsData } from "../../utils/data";

const Testimonials = () => {
  return (
    <div className="bg-white p-5 rounded-2xl  mb-6 max-h-96 overflow-y-auto">
      <h2 className="text-xl text-[#15445a] font-semibold mb-4 flex items-center">
        <FaQuoteLeft className="mr-2" /> Testimonials
      </h2>
      <div className="space-y-4">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id}>
            <h3 className="text-sm font-medium">{testimonial.title}</h3>
            <blockquote className="text-black">
              "{testimonial.quote}" - {testimonial.author}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonials;
