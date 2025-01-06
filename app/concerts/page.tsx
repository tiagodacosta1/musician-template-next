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
      <div className="font-merriweather text-4xl font-bold text-center uppercase my-8 text-primary">
        Concerts
      </div>

      {/* Toggle between Next and Past Concerts */}
      <div className="flex justify-center space-x-4 text-lg font-montserrat font-bold text-primary">
        <span
          className={`cursor-pointer ${
            showNextConcerts
              ? "text-primary underline"
              : "text-textColor hover:text-hoverColor"
          }`}
          onClick={() => setShowNextConcerts(true)}
        >
          Next Concerts
        </span>
        <span
          className={`cursor-pointer ${
            !showNextConcerts
              ? "text-primary underline"
              : "text-textColor hover:text-hoverColor"
          }`}
          onClick={() => setShowNextConcerts(false)}
        >
          Past Concerts
        </span>
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

                {/* Location and Venue Section */}
                <div className="w-2/4 font-montserrat text-textColor">
                  <div>{concert.location}</div>
                  <div className="font-bold">
                    {concert.venue} – {formatDateTime(concert.date)}
                  </div>

                  {/* Concert Details */}
                  {visibleDetails.includes(concert._id) && (
                    <div className="mt-4 p-4 bg-secondary">
                      <p>{concert.details}</p>
                    </div>
                  )}
                </div>

                {/* Details Button */}
                <div className="w-1/4 flex flex-col items-center justify-center text-textColor">
                  <button
                    onClick={() => toggleDetails(concert._id)}
                    className="text-sm font-montserrat font-bold hover:text-primary"
                  >
                    {visibleDetails.includes(concert._id)
                      ? "Hide Details"
                      : "Show Details"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No upcoming concerts.</p>
          )}

          {/* Show More Button */}
          {nextConcerts.length > visibleConcertsCount && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Show More
              </button>
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

                {/* Location and Venue Section */}
                <div className="w-2/4 font-montserrat text-textColor">
                  <div>{concert.location}</div>
                  <div className="font-bold">
                    {concert.venue} – {formatDateTime(concert.date)}
                  </div>

                  {/* Concert Details */}
                  {visibleDetails.includes(concert._id) && (
                    <div className="mt-4 p-4 bg-secondary">
                      <p>{concert.details}</p>
                    </div>
                  )}
                </div>

                {/* Details Button */}
                <div className="w-1/4 flex flex-col items-center justify-center text-textColor">
                  <button
                    onClick={() => toggleDetails(concert._id)}
                    className="text-sm font-montserrat font-bold hover:text-primary"
                  >
                    {visibleDetails.includes(concert._id)
                      ? "Hide Details"
                      : "Show Details"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No past concerts.</p>
          )}

          {/* Show More Button */}
          {pastConcerts.length > visibleConcertsCount && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Concerts;
