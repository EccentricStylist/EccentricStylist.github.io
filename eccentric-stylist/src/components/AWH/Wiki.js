import React from "react";
import { IoMdClock } from "react-icons/io";
import CharacterViewer from "./CharacterViewer";

function AWHWiki() {
  const [activeTab, setActiveTab] = React.useState("setting");

  const renderTabContent = () => {
    switch (activeTab) {
      case "setting":
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-center">
              The Haunted Mansion
            </h2>
            <div className="flex justify-center">
              <img
                src="/images/AWH/pacifica-map.png"
                alt="Pacifica Map"
                // className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center space-x-2">
              <IoMdClock />
              <span>Present Day | 1950s-1960s</span>
            </h2>
          </section>
        );
      case "characters":
        return <CharacterViewer />;
      case "walkthrough":
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Walkthrough</h2>
            {/* Embed PDF with iframe */}
            <div className="relative w-full" style={{ height: "80vh" }}>
              <iframe
                src="/images/AWH/awh-walkthrough.pdf"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Walkthrough"
              />
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-white bg-opacity-85 text-gray-800 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">
        A Winter Haunting Wiki
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8 border-b border-gray-300 pb-2">
        <button
          className={`text-lg font-semibold ${
            activeTab === "setting"
              ? "text-blue-300 border-b-2 border-blue-300" // Active tab with blue color
              : "text-gray-600 hover:text-blue-300"
          }`}
          onClick={() => setActiveTab("setting")}
        >
          Setting
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "characters"
              ? "text-blue-300 border-b-2 border-blue-300" // Active tab with blue color
              : "text-gray-600 hover:text-blue-300"
          }`}
          onClick={() => setActiveTab("characters")}
        >
          Characters
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "walkthrough"
              ? "text-blue-300 border-b-2 border-blue-300" // Active tab with blue color
              : "text-gray-600 hover:text-blue-300"
          }`}
          onClick={() => setActiveTab("walkthrough")}
        >
          Walkthrough
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}

export default AWHWiki;
