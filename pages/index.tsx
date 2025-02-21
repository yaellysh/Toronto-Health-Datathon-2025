import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const scrollToLearn = () => {
    document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <div className="text-center font-roboto text-white bg-gray-800 mx-12 mt-12 py-12 rounded-lg shadow">
          <h1 className="text-[4rem] font-bold">SomniSense™</h1>
          <p>A user-friendly platform to raise awareness and provide easy screening for obstructive sleep apnea.</p>
          <p className="pb-4">Get started with a screening below or join us in learning a bit more about what sleep apnea is.</p>
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className="bg-[#327aa3] text-white font-bold py-2 px-4 rounded"
              onClick={() => window.location.href = '/start'}
            >
              Start
            </button>
            <button
              className="bg-[#a9d5d5] text-gray-800 font-bold py-2 px-4 rounded"
              onClick={scrollToLearn}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="text-justify">
            <div id="learn" className="text-gray-800 bg-white mx-12 mb-8 mt-8 py-12 px-12 rounded-lg shadow">
              <p className="text-2xl font-bold pb-6">What is Obstructive Sleep Apnea (OSA)?</p>
              <p> Obstructive Sleep Apnea (OSA) is a common sleep disorder where breathing repeatedly stops and starts due to airway obstruction. This can lead to poor sleep quality, daytime fatigue, and long-term health risks like high blood pressure and heart disease. Symptoms often include loud snoring, choking during sleep, and excessive daytime drowsiness. Early detection and treatment, such as lifestyle changes, CPAP therapy, or medical interventions, can significantly improve quality of life.</p>
            </div>

            <div className="flex flex-col md:flex-row text-gray-800 bg-white mx-12 mb-8 mt-8 py-12 px-12 rounded-lg shadow">
              <div className="md:w-2/3">
                <p className="text-2xl font-bold pb-6">Why It Matters?</p>
                <p>Undiagnosed OSA can significantly impact daily life, reducing energy levels, concentration, and overall productivity. Beyond sleep disturbances, it is closely linked to serious health conditions such as high blood pressure, heart disease, stroke, and diabetes. Persistent fatigue caused by OSA also increases the risk of accidents, both at work and on the road. Many individuals go years without realizing they have OSA, mistaking symptoms for general tiredness or stress. However, early detection through screening can lead to better management and treatment options, ultimately improving sleep quality, long-term health, and overall well-being.</p>
              </div>
                <div className="md:w-[15rem] flex justify-center items-center mx-auto">
                <img src="/osa_impact.png" alt="OSA Impact" className="rounded-lg" />
                </div>
            </div>

            <div className="bg-white text-gray-800 mx-12 mb-12 py-12 px-12 rounded-lg shadow">
              <p className="text-2xl font-bold pb-6">How Our Platform Helps</p>
              <p>We make it easy to learn about OSA and take the first steps toward better sleep health.</p>
              
                <ul className="list-none pl-5">
                <li><span style={{ color: 'green' }}>✔</span> Simple Screening Tools - Answer a few questions to assess your risk.</li>
                <li><span style={{ color: 'green' }}>✔</span>  Educational Resources - Get reliable, easy-to-understand information about OSA.</li>
                <li><span style={{ color: 'green' }}>✔</span>  Next Steps Guidance - Learn what to do if you're at risk and how to seek professional help.</li>
                </ul>
            </div>
            <div className="pb-12"></div> {/* Add padding to the bottom */}
        </div>

        <Footer />
      </div>
    </>
  );
}
