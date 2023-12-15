import { useEffect, useState } from "react";
import './App.css';
import { Person } from "./Person";
import data from "./data";

function App() {

  const [page, setPage] = useState(0);

  useEffect(() => {
    const listener = e => {
      if (e.keyCode === 37) {
        setPage(Math.max(0, page - 1));
      } else if (e.keyCode === 39) {
        setPage(Math.min(data.length - 1, page + 1));
      }
    };

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  });

  return (
    <div className="App">
      {/* <Person data={data[page]}/> */}
      {data.map(d => (
        <Person data={d} key={d.name}/>
      ))}
    </div>
  );
}

export default App;
