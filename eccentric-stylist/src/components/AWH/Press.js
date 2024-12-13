import React from "react";

function Press() {
  return (
    <div className="relative py-12 px-6">
      <div
        className="relative bg-cover bg-center text-white"
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
        {/* Button centered at the bottom, but with negative bottom value */}
        <a
          href="https://indiegamereviewer.com/a-winter-haunting-review/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 right-0 mx-auto bg-white text-black border-2 border-black py-1 px-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs bottom-[-5px] flex justify-center items-center hover:bg-opacity-90 transition-all"
        >
          Read Full Review
        </a>
      </div>

      <div
        className="relative bg-cover bg-center text-white"
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
        {/* Button centered at the bottom, but with negative bottom value */}
        <a
          href="https://store.steampowered.com/app/2790100/A_Winter_Haunting/#app_reviews_hash"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 right-0 mx-auto bg-white text-black border-2 border-black py-1 px-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs bottom-5 flex justify-center items-center hover:bg-opacity-90 transition-all"
        >
          Read Steam Reviews
        </a>
      </div>
    </div>
  );
}

export default Press;
