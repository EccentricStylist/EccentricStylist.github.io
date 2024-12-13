import React from "react";

function Press() {
  return (
    <div className="relative py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Highlights and Press Kit
      </h1>
      {/* First Image Section */}
      <div
        className="relative bg-cover bg-center text-white mt-5"
        style={{
          backgroundImage: `url('/images/AWH/awh-1-quote.png')`, // Use the image with text inside
          backgroundSize: "contain", // Ensure the image is fully visible and not cropped
          backgroundPosition: "center", // Center the image within the container
          backgroundRepeat: "no-repeat",
          minHeight: "40vh", // You can adjust this value based on the image aspect ratio
          height: "auto", // Make the height adjust to the image size
          borderRadius: "10px", // Optional: rounded corners
        }}
      >
        {/* Read Full Review Button */}
        <a
          href="https://indiegamereviewer.com/a-winter-haunting-review/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 right-0 mx-auto bg-white text-black border-2 border-black py-1 px-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs bottom-[-5px] flex justify-center items-center hover:bg-opacity-90 transition-all"
        >
          Read Full Review
        </a>
      </div>

      {/* Second Image Section */}
      <div
        className="relative bg-cover bg-center text-white mt-5" // Adjusted margin-top for consistency
        style={{
          backgroundImage: `url('/images/AWH/awh-2-quote.png')`, // Use the image with text inside
          backgroundSize: "contain", // Ensure the image is fully visible and not cropped
          backgroundPosition: "center", // Center the image within the container
          backgroundRepeat: "no-repeat",
          minHeight: "70vh", // You can adjust this value based on the image aspect ratio
          height: "auto", // Make the height adjust to the image size
          borderRadius: "10px", // Optional: rounded corners
        }}
      >
        {/* Read Steam Reviews Button */}
        <a
          href="https://store.steampowered.com/app/2790100/A_Winter_Haunting/#app_reviews_hash"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 right-0 mx-auto bg-white text-black border-2 border-black py-1 px-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs bottom-5 flex justify-center items-center hover:bg-opacity-90 transition-all"
        >
          Read Steam Reviews
        </a>
      </div>

      {/* View Full Press Kit Button (Moved below the images) */}
      <a
        href="https://impress.games/press-kit/eccentric-stylist/a-winter-haunting"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white text-black border-2 border-black py-2 px-6 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs mx-auto mt-20 flex justify-center items-center hover:bg-opacity-90 transition-all"
      >
        View Full Press Kit
      </a>
    </div>
  );
}

export default Press;
