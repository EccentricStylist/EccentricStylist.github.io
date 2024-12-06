import React, { useState } from 'react';

function AWHWiki() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('story');

  // Tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Story Overview</h2>
            <p className="text-lg">
              <strong>A Winter Haunting</strong> takes players on a chilling journey into the heart
              of mystery and the supernatural. Set in the picturesque but eerie town of Ashpine
              Valley, players unravel the secrets of Lunabelle Manor, guided by vengeful and
              broken-hearted spirits from the past.
            </p>
            <p className="mt-4 text-lg">
              <em>“What happened on the fateful night of the courtship ball? What secrets does the
              manor hide?”</em> As Everlyn Sterling, a computer science graduate tasked with
              guarding the mansion, players solve puzzles, explore haunted rooms, and uncover a tale
              of love, betrayal, and redemption.
            </p>
          </section>
        );
      case 'characters':
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Characters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold">Everlyn Sterling</h3>
                <p className="text-lg">
                  A young woman tasked with guarding the mansion, navigating her struggles as a
                  recent graduate while uncovering its mysteries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Amelia “Amy” Lunabelle</h3>
                <p className="text-lg">
                  A kind but ghostly presence in the mansion, helping Everlyn while unraveling her
                  own forgotten past.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Clara Sterling</h3>
                <p className="text-lg">
                  Everlyn’s grandmother and the mayor of Ashpine Valley. A kind but mysterious
                  figure tied to the manor’s past.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Emerson Ashford</h3>
                <p className="text-lg">
                  A ghostly, broken-hearted figure who longs for his love, Amelia, and guides
                  Everlyn through the mansion.
                </p>
              </div>
            </div>
          </section>
        );
      case 'walkthrough':
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Walkthrough</h2>
            <p className="text-lg">
              Solve puzzles and uncover secrets in **A Winter Haunting**. The walkthrough guides you
              through every step to solve:
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
                <strong>Final Challenge:</strong> Unlock the attic to uncover the truth about Amelia
                and Emerson.
              </li>
            </ul>
          </section>
        );
      case 'setting':
        return (
          <section>
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-white text-gray-800 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">A Winter Haunting Wiki</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8 border-b border-gray-300 pb-2">
        <button
          className={`text-lg font-semibold ${
            activeTab === 'story'
              ? 'text-pink-500 border-b-2 border-pink-500'
              : 'text-gray-600 hover:text-pink-500'
          }`}
          onClick={() => setActiveTab('story')}
        >
          Story
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === 'characters'
              ? 'text-pink-500 border-b-2 border-pink-500'
              : 'text-gray-600 hover:text-pink-500'
          }`}
          onClick={() => setActiveTab('characters')}
        >
          Characters
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === 'walkthrough'
              ? 'text-pink-500 border-b-2 border-pink-500'
              : 'text-gray-600 hover:text-pink-500'
          }`}
          onClick={() => setActiveTab('walkthrough')}
        >
          Walkthrough
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === 'setting'
              ? 'text-pink-500 border-b-2 border-pink-500'
              : 'text-gray-600 hover:text-pink-500'
          }`}
          onClick={() => setActiveTab('setting')}
        >
          Setting
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}

export default AWHWiki;
