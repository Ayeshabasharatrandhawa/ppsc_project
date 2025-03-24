import React, { useState } from "react";

const MCQForm = () => {
  const [formData, setFormData] = useState({
    mcq_question: "",
    mcq_answer: "",
    mcq_image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, mcq_image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("MCQ Submitted Successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          MCQ Submission
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="mcq_question"
            placeholder="Enter MCQ Question"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mcq_answer"
            placeholder="Enter Answer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="mcq_image"
            className="w-full p-2 border border-gray-300 rounded-lg"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MCQForm;
