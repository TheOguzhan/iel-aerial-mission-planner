import React from "react";
import Screen from "./screens/index";
// new PC git
const App: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900  pt-8 m-0  text-gray-900 dark:text-white max-w-full min-h-screen max-h-full h-full">
      <Screen />
    </div>
  );
};

export default App;
