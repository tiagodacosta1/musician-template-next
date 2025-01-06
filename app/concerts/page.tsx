"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Concert {
  _id: string;
  date: string;
  location: string;
  venue: string;
  details: string;
}

const Concerts: React.FC = () => {
  const [visibleDetails, setVisibleDetails] = useState<string[]>([]);
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [showNextConcerts, setShowNextConcerts] = useState<boolean>(true);

  useEffect(() => {
    const mockConcerts: Concert[] = [
      {
        _id: "1",
        date: "2025-01-10T19:00:00Z",
        location: "London",
        venue: "Royal Albert Hall",
        details:
          "A beautiful performance of classical works featuring top musicians.",
      },
      {
        _id: "2",
        date: "2025-02-20T20:00:00Z",
        location: "Paris",
        venue: "Salle Pleyel",
        details:
          "A chamber music concert with a selection of violin and piano duos.",
      },
      {
        _id: "3",
        date: "2024-12-15T18:30:00Z",
        location: "Berlin",
        venue: "Berliner Philharmonie",
        details: "An orchestral performance with renowned soloists.",
      },
    ];
    setConcerts(mockConcerts);
  }, []);

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString("default", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} – ${formattedTime}`;
  };

  const currentDate = new Date();
  const nextConcerts = concerts.filter(
    (concert) => new Date(concert.date) >= currentDate
  );
  const pastConcerts = concerts.filter(
    (concert) => new Date(concert.date) < currentDate
  );

  function toggleDetails(_id: string): void {
    setVisibleDetails((prevDetails) =>
      prevDetails.includes(_id)
        ? prevDetails.filter((id) => id !== _id)
        : [...prevDetails, _id]
    );
  }
  return (
    <div className="bg-white text-[#4b6043] min-h-screen">
      {/* Hero Section */}{" "}
      <div className="relative w-full w-11/12 h-[60vh] mx-auto mb-12">
        <Image
          src="/Aline/IMG_2472.JPEG"
          alt="Aline's biography image"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Gallery Title */}
      <div className="text-center mb-12">
        <h1 className="text-[#4b6043] text-3xl lg:text-5xl font-merriweather tracking-wide uppercase mb-6">
          Concerts
        </h1>
        <p className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
          Concerts description
        </p>
      </div>
      {/* Toggle Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowNextConcerts(true)}
            className={`px-6 py-3 border-2 border-[#4b6043] rounded-lg uppercase text-sm font-medium tracking-wider transition ${
              showNextConcerts
                ? "bg-[#4b6043] text-white"
                : "hover:bg-[#4b6043] hover:text-white"
            }`}
          >
            Next Concerts
          </button>
          <button
            onClick={() => setShowNextConcerts(false)}
            className={`px-6 py-3 border-2 border-[#4b6043] rounded-lg uppercase text-sm font-medium tracking-wider transition ${
              !showNextConcerts
                ? "bg-[#4b6043] text-white"
                : "hover:bg-[#4b6043] hover:text-white"
            }`}
          >
            Past Concerts
          </button>
        </div>
      </div>
      {/* Concerts Section */}
      <div className="max-w-4xl mx-auto p-6">
        {showNextConcerts ? (
          <div>
            <h2 className="text-2xl font-semibold uppercase mb-6">
              Upcoming Concerts
            </h2>
            {nextConcerts.map((concert) => (
              <div
                key={concert._id}
                className="p-4 border-2 border-[#4b6043] rounded-lg mb-4"
              >
                <h3 className="text-xl font-medium mb-2">{concert.venue}</h3>
                <p className="text-sm mb-2">{formatDateTime(concert.date)}</p>
                <p className="text-sm mb-2">{concert.location}</p>
                <button
                  onClick={() => toggleDetails(concert._id)}
                  className="text-[#4b6043] font-medium hover:underline"
                >
                  {visibleDetails.includes(concert._id)
                    ? "Hide Details"
                    : "View Details"}
                </button>
                {visibleDetails.includes(concert._id) && (
                  <p className="text-sm mt-2">{concert.details}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold uppercase mb-6">
              Past Concerts
            </h2>
            {pastConcerts.map((concert) => (
              <div
                key={concert._id}
                className="p-4 border-2 border-[#4b6043] rounded-lg mb-4"
              >
                <h3 className="text-xl font-medium mb-2">{concert.venue}</h3>
                <p className="text-sm mb-2">{formatDateTime(concert.date)}</p>
                <p className="text-sm mb-2">{concert.location}</p>
                <button
                  onClick={() => toggleDetails(concert._id)}
                  className="text-[#4b6043] font-medium hover:underline"
                >
                  {visibleDetails.includes(concert._id)
                    ? "Hide Details"
                    : "View Details"}
                </button>
                {visibleDetails.includes(concert._id) && (
                  <p className="text-sm mt-2">{concert.details}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Concerts;
