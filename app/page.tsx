import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-[#4b6043]">
      {/* Hero Section */}
      <div className="relative w-full w-11/12 h-[60vh] mx-auto mb-12">
        <Image
          src="/Aline/IMG_2472.JPEG"
          alt="Aline's biography image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Welcome Section */}
      <div className="text-center px-6 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-merriweather tracking-wide uppercase mb-6">
          Sophia Renard
        </h1>
        <p className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
          Welcome to my official website. Explore my journey as a cellist,
          discover upcoming performances, and get in touch for collaborations or
          inquiries.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            href="/concerts"
            className="px-6 py-3 border-2 border-[#4b6043] rounded-lg uppercase text-sm font-medium tracking-wider hover:bg-[#4b6043] hover:text-white transition"
          >
            View Concerts
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-[#4b6043] bg-[#4b6043] text-white rounded-lg uppercase text-sm font-medium tracking-wider hover:bg-white hover:text-[#4b6043] transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mt-16 px-8 lg:px-16">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center uppercase mb-8">
          Highlights of My Journey
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 border-2 border-[#4b6043] rounded-lg text-center">
            <h3 className="text-xl font-medium uppercase mb-4">Award Winner</h3>
            <p className="text-sm font-light">
              Winner of the II edition of the Philharmonic Society of Vizela
              competition.
            </p>
          </div>
          <div className="p-6 border-2 border-[#4b6043] rounded-lg text-center">
            <h3 className="text-xl font-medium uppercase mb-4">
              International Performances
            </h3>
            <p className="text-sm font-light">
              Toured Portugal, France, Spain, and the United Kingdom, performing
              in iconic venues.
            </p>
          </div>
          <div className="p-6 border-2 border-[#4b6043] rounded-lg text-center">
            <h3 className="text-xl font-medium uppercase mb-4">
              Collaborations
            </h3>
            <p className="text-sm font-light">
              Worked with Decoda and coached by members of the London Symphony
              Orchestra.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="mt-16 px-8 lg:px-16">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center uppercase mb-8">
          Featured Performance
        </h2>
        <div className="relative w-full lg:w-3/4 h-[50vh] mx-auto">
          <iframe
            className="w-full h-full border-2 border-[#4b6043] rounded-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Featured Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 px-8 lg:px-16">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center uppercase mb-8">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 border-2 border-[#4b6043] rounded-lg">
            <p className="text-sm font-light italic">
              &quot;Sophia&apos;s performances are mesmerizing. Her passion and
              skill bring music to life in a way that deeply moves her
              audience.&quot;
            </p>
            <p className="mt-4 text-right font-medium">– Music Critic</p>
          </div>
          <div className="p-6 border-2 border-[#4b6043] rounded-lg">
            <p className="text-sm font-light italic">
              &quot;Working with Sophia was an incredible experience. She brings
              an unparalleled energy and artistry to every performance.&quot;
            </p>
            <p className="mt-4 text-right font-medium">– Collaborator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
