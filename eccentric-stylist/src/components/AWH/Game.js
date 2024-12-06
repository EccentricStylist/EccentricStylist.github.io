import React from "react";

function AWHGame() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white bg-opacity-85 text-gray-900 rounded-lg shadow-lg"
    style={{ zIndex: 2, position: "relative" }}>
      {/* Title */}
      <h1 className="text-6xl font-bold text-center mb-6">A Winter Haunting</h1>

      {/* Pitch */}
      <section className="mb-10">
        <p className="text-lg text-center">
          <strong>Step into the shoes of Everlyn Sterling</strong>, a new grad
          undertaking a temp job in a small town in dead winter. She expected
          this week to be one of solitude—a break from the fast-paced nature of
          job-hunting.
        </p>
        <p className="mt-4 text-lg text-center">
          Little does she know this seemingly ordinary task will soon unveil a
          mysterious tale of a disturbed spirit.
        </p>
      </section>

      {/* YouTube Video */}

      <section className="mb-10">
        {/* <h2 className="text-2xl font-semibold mb-4 text-center">
    Watch the Trailer
  </h2> */}
        <div className="relative max-w-4xl mx-auto aspect-w-16 aspect-h-9">
          {/* Decorative Frame */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              backgroundImage: `url('/images/AWH/awh-frame.png')`, // Replace with your frame image path
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Video */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-4/5 h-4/5">
              {" "}
              {/* Adjust width and height to control video size */}
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/lomCpoNHyEY"
                title="A Winter Haunting - Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Game Features</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            Explore the eerie Lunabelle Manor and uncover its dark secrets.
          </li>
          <li>
            Solve puzzles and navigate through a dynamic, haunted environment.
          </li>
          <li>
            Experience a heartwarming yet chilling narrative about love, loss,
            and redemption.
          </li>
          <li>
            Interact with unique characters, including spirits tied to the
            manor’s history.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg">
          <strong>
            Are you ready to uncover the secrets of Lunabelle Manor?
          </strong>
        </p>
        <a
          href="https://store.steampowered.com/app/2790100/A_Winter_Haunting/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
            Play Now
          </button>
        </a>
      </section>
    </div>
  );
}

export default AWHGame;
