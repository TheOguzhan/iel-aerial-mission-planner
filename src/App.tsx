import React from "react";
import Screen from "./screens/index";

const App: React.FC = () => {
  return (
    <div
      className="bg-gray-50 dark:bg-gray-900  pt-8 text-gray-900 dark:text-white"
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
