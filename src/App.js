import * as React from "react";
import "./styles.css";
import axios from "axios";

const { useEffect, useState } = React;

const fetchRandomDataAPI = () => {
  return axios
    .get("https://randomuser.me/api/")
    .then((data) => {
      // console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRandomDataAPI().then((randomData) => {
      setRandomUserDataJSON(randomData || "No data user found");
    });
  }, []);

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log("click");
        }}
      >
        Increase Counter
      </button>
      <pre>{randomUserDataJSON}</pre>
    </div>
  );
}
