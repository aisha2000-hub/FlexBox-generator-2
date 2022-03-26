import { useState, useEffect } from "react";
import "./App.css";
import Box from "./components/Box";
import FlexContainer from "./components/FlexContainer";
import FlexDirectionSelector from "./components/FlexDirectionSelector";
import JustifyContentSelector from "./components/JustifyContentSelector";
import AlignItemsSelector from "./components/AlignItemsSelector";

const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const boxSize = 100;

function App() {
  const savedHistory = localStorage.getItem("flex-settings-history");

  console.log(`Stringified Array in localStorage ist ${savedHistory}`);
  const [flexDirection, setFlexDirection] = useState("row-reverse");
  const [justifyContent, setJustifyContent] = useState("flex-end");
  const [alignItems, setAlignItems] = useState("stretch");

  // Wir parsen den Wert aus dem localStorage nur zurück in ein JS-Array, wenn er nicht null ist, ansonsten setzen wir ein leeres Array als default-Wert
  const defaultSettingsHistory =
    savedHistory === null ? [] : JSON.parse(savedHistory);
  // Neue State-Variable settingsHistory, die unsere history-Einträge speichert
  const [settingsHistory, setSettingsHistory] = useState(
    defaultSettingsHistory
  );
  // Funktion, die im Click-Handler der History-Listenelemente benutzt wird
  const selectHistory = (history) => {
    setAlignItems(history.alignItems);
    setFlexDirection(history.flexDirection);
    setJustifyContent(history.justifyContent);
  };
  // useEffect, der auf Änderungen der flex-Settings reagiert
  useEffect(() => {
    const setting = {
      stepDate: Date.now(),
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems
    };
    setSettingsHistory([...settingsHistory, setting]);
    // Wir schreiben unser settingsHistory-Array umgewandelt in eine textbasierte Datenstruktur (JSON.stringify() für den Key/Identifier 'flex-settings-history' ins localStorage)
    localStorage.setItem(
      "flex-settings-history",
      JSON.stringify(settingsHistory)
    );
    console.log(settingsHistory);
  }, [flexDirection, justifyContent, alignItems]);

  return (
    <div className="App">
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20
        }}
      >
        <h1>Flexbox Konfigurator</h1>
        <FlexDirectionSelector
          value={flexDirection}
          onChange={(value) => setFlexDirection(value)}
        />
        <JustifyContentSelector
          value={justifyContent}
          onChange={(value) => {
            console.log("JustifyContentSelector meldet eine Änderung!");
            console.log(`Wert: ${value}`);
            setJustifyContent(value);
          }}
        />
        <AlignItemsSelector
          value={alignItems}
          onChange={(value) => setAlignItems(value)}
        />

        <FlexContainer
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          {colors.map((color, index) => (
            <Box color={color} key={`boxList-${index}`} size={boxSize} />
          ))}
        </FlexContainer>
      </main>
      <h3>History</h3>
      <ul className="historyList">
        {/* Iteration über das settingsHistory-Array, um die Einträge anzuzeigen */}
        {settingsHistory.map((historyentry) => {
          const tmpDate = new Date(historyentry.stepDate);
          return (
            <li
              key={historyentry.stepDate}
              onClick={() => selectHistory(historyentry)}
            >
              <span style={{ marginRight: 4, fontWeight: "bold" }}>
                {/* Formatierung des Date-Objekts */}
                {tmpDate.toLocaleString("de-DE", {
                  dateStyle: "short",
                  timeStyle: "medium"
                })}
              </span>
              {historyentry.flexDirection},{historyentry.alignItems},{" "}
              {historyentry.justifyContent}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
