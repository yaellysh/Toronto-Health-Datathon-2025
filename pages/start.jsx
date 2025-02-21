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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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
          <h1 className="text-5xl font-bold text-white">Introductory Questionnaire</h1>
        </div>
        <div className="bg-gray-100 rounded-b-lg mx-12 mb-12 pb-12 p-8">
          {step === 1 && (
            <div>
              {/* <p className="text-3xl">Patient information</p> */}
              <p>Please enter your basic information below to get started with your journey.</p>
              <form className="space-y-4 pt-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Weight</label>
                  <input
                    type="number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your weight (kg)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Height</label>
                  <input
                    type="number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your height (cm)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sex</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select your sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="mt-4 w-full bg-gray-800 text-white p-2 rounded-md"
                >
                  Next
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
                  <label className="block text-sm font-medium text-gray-700">Medical History</label>
                  <textarea
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your medical history"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Medications</label>
                  <textarea
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your current medications"
                  />
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
