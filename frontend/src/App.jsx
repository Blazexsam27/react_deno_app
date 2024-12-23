import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/data");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>App</h2>
      </header>
      <div>
        {data.map((item) => (
          <h3>{item.name}</h3>
        ))}
      </div>
    </div>
  );
}
