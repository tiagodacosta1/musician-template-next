"use client";
import { useState } from "react";
import Image from "next/image";

// Define the type for each language
interface Language {
  language: string;
  bioText: string;
}

interface Biography {
  title: string;
  languages: Language[];
}

export default function BiographyPage() {
  const biography: Biography = {
    title: "Aline’s Biography",

    languages: [
      {
        language: "English",
        bioText:
          "Aline is a classically trained violinist with years of experience in orchestral and chamber music performance...",
      },
      {
        language: "Spanish",
        bioText:
          "Aline es una violinista entrenada clásicamente con años de experiencia en música orquestal y de cámara...",
      },
    ],
  };

  // State to track the currently selected language
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    biography.languages[0].language
  );

  // Function to handle language switch
  const handleLanguageChange = (language: string): void => {
    setSelectedLanguage(language);
  };

  // Get the selected language bio text
  const selectedBioText =
    biography.languages.find((lang) => lang.language === selectedLanguage)
      ?.bioText || "";

  return (
    <div className="bg-white text-[#4b6043]">
      {/* Image with the specified path */}
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

      {/* Display the title */}
      {biography.title && (
        <h1 className="text-4xl font-merriweather text-center p-8 tracking-wide uppercase">
          {biography.title}
        </h1>
      )}

      {/* Language Selection Links */}
      <div className="text-center font-montserrat mb-4">
        {/* Create a flex container for the language buttons */}
        <div className="flex justify-center space-x-6">
          {biography.languages.map((lang) => (
            <button
              key={lang.language}
              onClick={() => handleLanguageChange(lang.language)} // Update language on click
              className={`p-2 border-b-2 transition-all duration-300 ease-in-out ${
                selectedLanguage === lang.language
                  ? "border-[#4b6043] font-bold" // Green underline and bold text for the selected language
                  : "border-transparent"
              }`}
            >
              {lang.language}
            </button>
          ))}
        </div>
      </div>

      {/* Display selected biography text */}
      <div className="p-8 text-lg leading-8 space-y-4 font-montserrat text-center text-[#658354]">
        <p>{selectedBioText}</p>
      </div>
    </div>
  );
}
