import React from "react";

function AWHWiki() {
  const [activeTab, setActiveTab] = React.useState("story");

  const renderTabContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Story Overview</h2>
            <p className="text-lg">
              <strong>A Winter Haunting</strong> takes players on a chilling journey into the heart
              of mystery and the supernatural.
            </p>
          </section>
        );
      case "walkthrough":
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Walkthrough</h2>
            {/* Embed PDF with iframe */}
            <div className="relative w-full" style={{ height: "80vh" }}>
              <iframe
                src="/images/awh-walkthrough.pdf"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Walkthrough"
              />
            </div>
          </section>
        );
      case "characters":
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Characters</h2>
            <p>Character details go here.</p>
          </section>
        );
      case "setting":
        return (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Setting</h2>
            <p>Game setting details go here.</p>
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
            activeTab === "story"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-gray-600 hover:text-pink-500"
          }`}
          onClick={() => setActiveTab("story")}
        >
          Story
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "walkthrough"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-gray-600 hover:text-pink-500"
          }`}
          onClick={() => setActiveTab("walkthrough")}
        >
          Walkthrough
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "characters"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-gray-600 hover:text-pink-500"
          }`}
          onClick={() => setActiveTab("characters")}
        >
          Characters
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "setting"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-gray-600 hover:text-pink-500"
          }`}
          onClick={() => setActiveTab("setting")}
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
