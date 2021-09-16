import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

const apiUrl = "https://www.breakingbadapi.com/api/characters";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });
      //console.log(data);
      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div class="container">
      {items.map(item => (
        <div class="card">
          <img src={item.img} />
          <div class="card-body">{item.name}</div>
        </div>
      ))}
      ;
    </div>
  );
}

render(<App />, document.getElementById("root"));
