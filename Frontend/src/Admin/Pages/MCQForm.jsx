import React, { useState } from "react";

const MCQForm = () => {
  const [formData, setFormData] = useState({
    mcq_question: "",
    mcq_answer: "",
    mcq_image: null,
    subject: "",
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
    <div className="flex items-center justify-center mt-10 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          📝 MCQ Submission
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="mcq_question"
            placeholder="Enter MCQ Question"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mcq_answer"
            placeholder="Enter Answer"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="mcq_image"
            className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100 shadow-sm"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <div>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="English">English</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-xl hover:bg-green-800 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MCQForm;
