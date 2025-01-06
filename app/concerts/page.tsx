"use client"; // Ensure this file is treated as a client component

import { useState, useEffect } from "react";
import Image from "next/image";

interface Concert {
  _id: string;
  date: string; // datetime field
  location: string;
  venue: string;
  details: string;
}

const Concerts: React.FC = () => {
  const [visibleDetails, setVisibleDetails] = useState<string[]>([]);
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [visibleConcertsCount, setVisibleConcertsCount] = useState<number>(4);
  const [showNextConcerts, setShowNextConcerts] = useState<boolean>(true); // Toggle between Next and Past concerts

  useEffect(() => {
    // Replace this with static data or local JSON file instead of fetching from Sanity
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
      // Add more concert objects as needed
    ];

    setConcerts(mockConcerts);
  }, []);

  const toggleDetails = (id: string) => {
    if (visibleDetails.includes(id)) {
      setVisibleDetails(visibleDetails.filter((concertId) => concertId !== id));
    } else {
      setVisibleDetails([...visibleDetails, id]);
    }
  };

  const handleShowMore = () => {
    setVisibleConcertsCount(visibleConcertsCount + 4);
  };

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

  return (
    <div className="bg-bgColor min-h-screen">
      {/* Banner Image */}
      <div className="relative w-full lg:w-3/4 mx-auto mb-8">
        <div className="relative h-[50vh]">
          <Image
            src="/Aline/IMG_2469.JPEG" // Image path
            alt="Aline's biography image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Title */}
      <div className="font-merriweather text-4xl font-bold text-center uppercase mt-8 text-primary">
        Concerts
      </div>

      {/* Toggle between Next and Past Concerts */}
      <div className="relative text-center font-montserrat mb-4">
        <div className="flex justify-center p-8">
          {/* Toggle buttons for Next and Past Concerts */}
          <button
            onClick={() => setShowNextConcerts(true)} // Switch to next concerts
            className={`p-2 border-b-2 transition-all duration-300 ease-in-out ${
              showNextConcerts
                ? "border-[#4b6043] font-bold" // Green underline for active button
                : "border-transparent"
            }`}
          >
            Next Concerts
          </button>
          <button
            onClick={() => setShowNextConcerts(false)} // Switch to past concerts
            className={`p-2 border-b-2 transition-all duration-300 ease-in-out ${
              !showNextConcerts
                ? "border-[#4b6043] font-bold" // Green underline for active button
                : "border-transparent"
            }`}
          >
            Past Concerts
          </button>
        </div>
      </div>

      {/* Display Next or Past Concerts */}
      {showNextConcerts ? (
        <div>
          {nextConcerts.length > 0 ? (
            nextConcerts.slice(0, visibleConcertsCount).map((concert) => (
              <div
                key={concert._id}
                className="flex justify-between max-w-4xl mx-auto my-4 border-b border-dashed border-secondary pb-4"
              >
                {/* Date Section */}
                <div className="w-1/4 flex flex-row font-merriweather font-bold text-lg text-textColor">
                  <div className="text-2xl">
                    {new Date(concert.date).getDate()}
                  </div>
                  <div className="flex flex-col ml-2">
                    <div>
                      {new Date(concert.date).toLocaleString("default", {
                        month: "long",
                      })}
                    </div>
                    <div>{new Date(concert.date).getFullYear()}</div>
                  </div>
                </div>

                {/* Concert Details */}
                <div className="w-3/4 flex flex-col ml-4">
                  <div className="text-xl font-merriweather font-semibold">
                    {concert.venue}, {concert.location}
                  </div>
                  <div className="text-lg">{formatDateTime(concert.date)}</div>
                  <div
                    className="cursor-pointer mt-2 text-hoverColor"
                    onClick={() => toggleDetails(concert._id)}
                  >
                    {visibleDetails.includes(concert._id)
                      ? "Hide Details"
                      : "Show Details"}
                  </div>
                  {visibleDetails.includes(concert._id) && (
                    <div className="text-textColor mt-2">{concert.details}</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-lg font-montserrat text-textColor">
              No upcoming concerts available.
            </div>
          )}
        </div>
      ) : (
        <div>
          {pastConcerts.length > 0 ? (
            pastConcerts.slice(0, visibleConcertsCount).map((concert) => (
              <div
                key={concert._id}
                className="flex justify-between max-w-4xl mx-auto my-4 border-b border-dashed border-secondary pb-4"
              >
                {/* Date Section */}
                <div className="w-1/4 flex flex-row font-merriweather font-bold text-lg text-textColor">
                  <div className="text-2xl">
                    {new Date(concert.date).getDate()}
                  </div>
                  <div className="flex flex-col ml-2">
                    <div>
                      {new Date(concert.date).toLocaleString("default", {
                        month: "long",
                      })}
                    </div>
                    <div>{new Date(concert.date).getFullYear()}</div>
                  </div>
                </div>

                {/* Concert Details */}
                <div className="w-3/4 flex flex-col ml-4">
                  <div className="text-xl font-merriweather font-semibold">
                    {concert.venue}, {concert.location}
                  </div>
                  <div className="text-lg">{formatDateTime(concert.date)}</div>
                  <div
                    className="cursor-pointer mt-2 text-hoverColor"
                    onClick={() => toggleDetails(concert._id)}
                  >
                    {visibleDetails.includes(concert._id)
                      ? "Hide Details"
                      : "Show Details"}
                  </div>
                  {visibleDetails.includes(concert._id) && (
                    <div className="text-textColor mt-2">{concert.details}</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-lg font-montserrat text-textColor">
              No past concerts available.
            </div>
          )}
        </div>
      )}

      {/* Show More Button */}
      {visibleConcertsCount < concerts.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="py-2 px-6 bg-primary text-white rounded-md hover:bg-hoverColor transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Concerts;
