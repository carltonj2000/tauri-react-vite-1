import { useState, useEffect } from "react";
import { writeFile, readDir } from "@tauri-apps/api/fs";
import localforage from "localforage";

function getItem(key, stateSetter, defaultValue) {
  localforage
    .getItem(key)
    .then((value) => stateSetter(value))
    .catch((_) => {
      stateSetter(defaultValue);
      localforage.setItem(key, defaultValue);
    });
}

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = (value) => {
    const newValue = value || (colorScheme === "light" ? "dark" : "light");
    setColorScheme(newValue);
    localforage.setItem("colorScheme", newValue);
  };

  useEffect(() => {
    getItem("colorScheme", setColorScheme, "light");
  }, []);

  const onWriteFile = async () => {
    await writeFile({
      path: "/home/carltonj2000/tauri-react.txt",
      contents: "the file content",
    });
  };

  const onReadDir = async () => {
    const data = await readDir("/home/carltonj2000/");
    console.log("data read", data);
  };

  return (
    <div>
      <h1>Tauri, React And Vite Example</h1>

      <div>
        <h2>Text File Output</h2>
        <button onClick={onWriteFile}>Write file</button>
      </div>

      <div>
        <h2>Color Scheme Via Local Storage Using localforage</h2>
        <button
          style={{
            border: "1px solid lightgray",
            borderRadius: "5px",
            outline: "none",
            background: colorScheme === "dark" ? "#aaa" : "#eee",
          }}
          onClick={() => toggleColorScheme()}
        >
          Toggle Scheme
        </button>
      </div>

      <div>
        <h2>Debug Console Output From FS Read</h2>
        <button onClick={onReadDir}>Read Dir</button>
      </div>
    </div>
  );
}

export default App;
