import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };

  const emojis = Object.keys(emojiDictionary);

  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "we don't have this emoji in our database, please try something below";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>emoji Checker</h1>
      <input onChange={inputHandler}></input>
      <h2>{meaning} </h2>

      <h3>Emojis that we have</h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
