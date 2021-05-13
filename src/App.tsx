import React from "react";
import Screen from "./screens/index";

const App: React.FC = () => {
  return (
    <div
      className="bg-gray-600 bg-opacity-100 pt-8"
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Screen />
    </div>
  );
};

export default App;
