import "./App.css";
import LifeCycleConcept from "./components/LifecycleConcept/LifeCycleConcept";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";

function App() {
  console.log("RENDERING COMPONENT App...");
  const [users, setUsers] = useState([
    {
      name: "Initial User",
      id: 123,
    },
  ]);
  useEffect(() => {
    console.log("HOOK => App => useEffect");
  }, [users]);
  useLayoutEffect(() => {
    console.log("HOOK => App => useLayoutEffect");
  }, [users]);

  const test = useMemo(() => {
    console.log("HOOK => App => useMemo => test");
    return [];
  }, [users]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <ThemeProvider>
        <LifeCycleConcept setUsers={setUsers} users={users} />
      </ThemeProvider>
    </div>
  );
}

export default App;
