import React from 'react';

function Press() {
  return (
    <div className="relative text-white py-12 px-6">
      <div
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('/images/AWH/awh-web-border.png')`,
          backgroundSize: 'cover',  // Ensures the image fully covers the container
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh',           // Control height of the image area (adjustable)
          borderRadius: '10px',       // Optional: for rounded corners
        }}
      >
        {/* Dark translucent overlay applied only inside the image */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> 

        {/* Text and button are placed inside the image container */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <p className="text-lg md:text-xl italic font-semibold">
            "A Winter Haunting is thoroughly enjoyable. I was immersed and invested in the story in a way I haven’t experienced in a long time. It’s one of those rare games where I had goosebumps when I solved the mystery and felt very emotional..." -- IndieGameReviewer
          </p>

          <a
            href="https://indiegamereviewer.com/a-winter-haunting-review/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-black border-2 border-black py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Read Full Review
          </a>
        </div>
      </div>
    </div>
  );
}

export default Press;
