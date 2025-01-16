import React, { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    linkedinUrl: "",
    name: "",
    email: "",
    phoneNo: "",
    location: "",
    githubUrl: "",
    portfolioUrl: "",
    earliestStartDate: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-4">Work with us</h1>
        <p className="text-center mb-6 font-medium text-xl">
          Submit your applications to work with Innoverrese
        </p>

        <form>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="linkedinUrl"
                className="block text-base font-medium text-gray-700"
              >
                LinkedIn URL
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-base font-medium text-gray-700"
              >
                Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                // onChange={handleChange} // You can handle the file input if needed
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="youremail@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNo"
                className="block text-lg font-medium text-gray-700"
              >
                Phone No
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-lg font-medium text-gray-700"
              >
                Current Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Location"
              />
            </div>

            <div>
              <label
                htmlFor="githubUrl"
                className="block text-lg font-medium text-gray-700"
              >
                GitHub URL
              </label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="https://github.com/yourprofile"
              />
            </div>

            <div>
              <label
                htmlFor="portfolioUrl"
                className="block text-lg font-medium text-gray-700"
              >
                Portfolio URL
              </label>
              <input
                type="url"
                id="portfolioUrl"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div>
              <label
                htmlFor="earliestStartDate"
                className="block text-lg font-medium text-gray-700"
              >
                Earliest Start Date
              </label>
              <input
                type="date"
                id="earliestStartDate"
                name="earliestStartDate"
                value={formData.earliestStartDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-lg font-medium text-gray-700"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Any other information you'd like to share"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;
