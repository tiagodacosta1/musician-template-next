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
    title: "Biography",
    languages: [
      {
        language: "English",
        bioText: `Aline Christ is a distinguished cellist known for her powerful and lyrical performances. A graduate of the Guildhall School of Music & Drama and Hochschule der Künste, Aline has cultivated an impressive technique and a deep musicality, drawing influence from both the classical traditions and contemporary soundscapes.

        Aline's early studies began in her home city of Paris, where she quickly distinguished herself as a promising talent. She later advanced her studies at two leading institutions, including Guildhall School, where she focused on expanding her repertoire in both orchestral and chamber music.

        Over the years, Aline has performed on some of the world’s most celebrated stages, including the Royal Albert Hall in London and the Philharmonie in Berlin. Her chamber music performances have seen her collaborate with top-tier musicians and ensembles, leaving audiences in awe of her emotive expressiveness and impeccable technical command.

        In addition to her performing career, Aline is a passionate educator, teaching at various prestigious institutions and mentoring the next generation of cellists. Her performances reflect her love for both the technical aspects of the cello and the emotional resonance that music can evoke.

        Aline is grateful for the support she has received along her journey, having been awarded financial support from organizations that have recognized her dedication and artistry. She continues to evolve both as a performer and a teacher, always striving for new artistic heights.`,
      },
      {
        language: "Spanish",
        bioText: `Aline Christ es una destacada cellista conocida por sus poderosas y líricas interpretaciones. Graduada de la Guildhall School of Music & Drama y la Hochschule der Künste, Aline ha cultivado una técnica impresionante y una profunda musicalidad, influyendo tanto de las tradiciones clásicas como de los paisajes sonoros contemporáneos.

        Los primeros estudios de Aline comenzaron en su ciudad natal de París, donde rápidamente se distinguió como un talento prometedor. Más tarde, continuó sus estudios en dos instituciones líderes, incluyendo la Guildhall School, donde se centró en ampliar su repertorio tanto en música orquestal como de cámara.

        A lo largo de los años, Aline ha actuado en algunos de los escenarios más célebres del mundo, incluyendo el Royal Albert Hall en Londres y la Philharmonie en Berlín. Sus interpretaciones de música de cámara la han visto colaborar con músicos y conjuntos de primer nivel, dejando al público impresionado por su expresividad emotiva y su impecable dominio técnico.

        Además de su carrera como intérprete, Aline es una apasionada educadora, enseñando en diversas instituciones prestigiosas y guiando a la próxima generación de cellistas. Sus interpretaciones reflejan su amor tanto por los aspectos técnicos del violonchelo como por la resonancia emocional que la música puede evocar.

        Aline está agradecida por el apoyo que ha recibido a lo largo de su trayectoria, habiendo recibido apoyo financiero de organizaciones que han reconocido su dedicación y arte. Continúa evolucionando tanto como intérprete como profesora, siempre buscando nuevas alturas artísticas.`,
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

  // Split the bio text into paragraphs
  const bioParagraphs = selectedBioText.split("\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ));

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
        <div className="flex justify-center space-x-6">
          {biography.languages.map((lang) => (
            <button
              key={lang.language}
              onClick={() => handleLanguageChange(lang.language)}
              className={`p-2 border-b-2 transition-all duration-300 ease-in-out ${
                selectedLanguage === lang.language
                  ? "border-[#4b6043] font-bold"
                  : "border-transparent"
              }`}
            >
              {lang.language}
            </button>
          ))}
        </div>
      </div>

      {/* Display the bio text */}
      <div className="w-full lg:w-3/4 mx-auto p-8">{bioParagraphs}</div>
    </div>
  );
}
