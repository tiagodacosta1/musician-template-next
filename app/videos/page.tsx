import React from "react";

// Define the video item type
interface VideoItem {
  videoUrl: string;
  alt: string;
}

// Define the data type for the page
interface VideosPageData {
  pageImage: {
    videoUrl: string;
    alt: string;
  };
  videos: VideoItem[];
}

// Function to convert regular video URLs into embed URLs
const getEmbedUrl = (url: string) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId =
      url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("vimeo.com")) {
    const videoId = url.split("vimeo.com/")[1];
    return `https://player.vimeo.com/video/${videoId}`;
  } else if (url.includes("dailymotion.com")) {
    const videoId = url.split("video/")[1];
    return `https://www.dailymotion.com/embed/video/${videoId}`;
  } else {
    return url;
  }
};

// Manually define the data (replace this with actual content)
const data: VideosPageData = {
  pageImage: {
    videoUrl: "https://www.youtube.com/watch?v=Cj7miUnCojQ", // Replace this with the desired video URL
    alt: "Introductory Video",
  },
  videos: [
    {
      videoUrl: "https://www.youtube.com/watch?v=Cj7miUnCojQ", // Video 1
      alt: "Video 1",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=JUvs9HiKr_M&t=427s", // Video 2
      alt: "Video 2",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=2Q_DzWUvcL8&t=826s", // Video 3
      alt: "Video 3",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=cLgJQ8Zj3AA", // Video 4
      alt: "Video 4",
    },
  ],
};

const VideosPage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Videos</h1>
        <p className="text-xl font-merriweather text-textColor mx-auto w-full sm:w-3/4">
          Explore our collection of videos where we showcase some of our most
          important moments. Dive into each video and enjoy the experience.
        </p>
      </div>

      {/* Page Video */}
      <div className="relative w-full lg:w-3/4 h-[80vh] mx-auto mb-12 rounded-lg shadow-2xl overflow-hidden">
        <iframe
          className="w-full h-full object-cover"
          src={getEmbedUrl(data.pageImage.videoUrl)} // Convert the video URL to embed URL
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={data.pageImage.alt || "Introductory Video"}
        ></iframe>
      </div>

      {/* Videos Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {data.videos.map((video, index) => (
          <div
            key={index}
            className="w-full relative group rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white"
          >
            <iframe
              className="w-full h-[70vh] object-cover"
              src={getEmbedUrl(video.videoUrl)} // Convert URL to embed URL
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.alt}
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideosPage;
