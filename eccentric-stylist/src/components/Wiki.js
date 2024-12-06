import React from 'react';

function Wiki() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-white text-gray-800 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">A Winter Haunting Wiki</h1>

      {/* Story Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Story Overview</h2>
        <p className="text-lg">
          <strong>A Winter Haunting</strong> takes players on a chilling journey into the heart of
          mystery and the supernatural. Set in the picturesque but eerie town of Ashpine Valley,
          players unravel the secrets of Lunabelle Manor, guided by vengeful and broken-hearted
          spirits from the past.
        </p>
        <p className="mt-4 text-lg">
          <em>“What happened on the fateful night of the courtship ball? What secrets does the
          manor hide?”</em> As Everlyn Sterling, a computer science graduate tasked with guarding
          the mansion, players solve puzzles, explore haunted rooms, and uncover a tale of love,
          betrayal, and redemption.
        </p>
      </section>

      {/* Setting */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Setting</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Period:</strong> Present day, alternate universe.
          </li>
          <li>
            <strong>Town:</strong> Ashpine Valley, a historic valley town in Pacifica (upper
            California).
          </li>
          <li>
            <strong>Location:</strong> Lunabelle Manor, a dilapidated mansion on the outskirts of
            the valley, surrounded by forests and wildlife.
          </li>
        </ul>
      </section>

      {/* Characters */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Everlyn Sterling</h3>
            <p className="text-lg">
              A young woman tasked with guarding the mansion, navigating her struggles as a recent
              graduate while uncovering its mysteries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Amelia “Amy” Lunabelle</h3>
            <p className="text-lg">
              A kind but ghostly presence in the mansion, helping Everlyn while unraveling her own
              forgotten past.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Clara Sterling</h3>
            <p className="text-lg">
              Everlyn’s grandmother and the mayor of Ashpine Valley. A kind but mysterious figure
              tied to the manor’s past.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Emerson Ashford</h3>
            <p className="text-lg">
              A ghostly, broken-hearted figure who longs for his love, Amelia, and guides Everlyn
              through the mansion.
            </p>
          </div>
        </div>
      </section>

      {/* Letters */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Letters</h2>
        <p className="text-lg">
          Throughout the game, players discover a series of letters written by Emerson. These
          letters are riddled with puzzles and provide hints to uncover the mansion’s mysteries.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>First Letter (Winter):</strong> Sets the tone for the game and introduces the
            challenges awaiting players.
          </li>
          <li>
            <strong>Second Letter (Spring):</strong> Contains puzzles related to finding a
            significant necklace.
          </li>
          <li>
            <strong>Third Letter (Summer):</strong> A reflective letter with beach-themed puzzles.
          </li>
          <li>
            <strong>Fourth Letter (Fall):</strong> Builds toward the climax, revealing deep regrets
            and betrayals.
          </li>
          <li>
            <strong>Final Letter:</strong> Challenges players to unlock the attic door, leading to
            the emotional resolution of the story.
          </li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Achievements</h2>
        <p className="text-lg">
          The game offers a variety of achievements based on progression, player choices, and
          exploration.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Snow Your Way Out:</strong> Solve the parlor puzzle.
          </li>
          <li>
            <strong>Flower Power:</strong> Solve the Spring Room.
          </li>
          <li>
            <strong>Wave Bye-Bye:</strong> Complete the Summer Room challenges.
          </li>
          <li>
            <strong>Haunted No More:</strong> Solve the mystery and choose the right ending.
          </li>
        </ul>
      </section>

      {/* Puzzles */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Puzzles</h2>
        <p className="text-lg">
          Players must solve puzzles throughout the mansion, including:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Parlor Puzzle:</strong> Solve the first riddle with objects around the room.
          </li>
          <li>
            <strong>Seasonal Rooms:</strong> Spring, Summer, Fall, and Winter rooms with
            season-themed challenges.
          </li>
          <li>
            <strong>Final Challenge:</strong> Unlock the attic to uncover the truth about Amelia and
            Emerson.
          </li>
        </ul>
      </section>

      {/* Closing */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
          <strong>A Winter Haunting</strong> weaves an emotional tale of love and loss, challenging
          players to solve its mysteries and uncover the truth behind Lunabelle Manor.
        </p>
      </section>
    </div>
  );
}

export default Wiki;
