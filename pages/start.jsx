import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function StartInfo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', age: '' });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} pb-12`}
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div>
        <div className="text-center text-white bg-gray-800 mx-12 mt-12 py-12 rounded-t-lg shadow">
          <h1 className="text-5xl font-bold text-white">Questionnaire</h1>
        </div>
        <div className="bg-gray-100 rounded-b-lg mx-12 mb-12 pb-12 p-8">
          {step === 1 && (
            <div>
              <p className="text-3xl">Basic Information</p>
              <p>Please enter your basic information below to get started with your journey.</p>
              <form className="space-y-4 pt-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your age"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-gray-800 text-white p-2 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="text-3xl">Additional Information</p>
              <p>Please provide more details to help us understand your needs better.</p>
              <form className="space-y-4 pt-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Do you snore loudly?</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Do you often feel excessively tired during the day?</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Has anyone observed you stop breathing during sleep?</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Have you been diagnosed with high blood pressure?</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">What is your neck circumference (in cm)?</label>
                  <input
                    type="number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your neck circumference"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">What is your weight (kg) and height (cm)?</label>
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md"
                      placeholder="Weight (kg)"
                    />
                    <input
                      type="number"
                      className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md"
                      placeholder="Height (cm)"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mt-4 w-1/2 bg-gray-800 text-white p-2 rounded-md mr-2"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="mt-4 w-1/2 bg-gray-800 text-white p-2 rounded-md ml-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
