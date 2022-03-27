import { writeFile, readDir } from "@tauri-apps/api/fs";

function App() {
  const onWriteFile = async () => {
    console.log("file written");
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
    <div className="App">
      <button onClick={onWriteFile}>Write file</button>
      <button onClick={onReadDir}>Read Dir</button>
      <button onClick={() => console.log("hi")}>Write console</button>
    </div>
  );
}

export default App;
