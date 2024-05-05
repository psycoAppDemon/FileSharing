import "./App.css";
import { useState, useRef, useEffect } from "react";
import { uploadFile } from "./service/api";

function App() {
  const fileInputRef = useRef(); // to use the functionality of input button in upload button
  const [file, setfile] = useState(); // to store the file's data when upload is clicked
  const [result, setResult] = useState();
  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const imageData = new FormData();
        imageData.append("name", file.name);
        imageData.append("file", file);
        const res = await uploadFile(imageData);
        setResult(res.path);
      }
    };

    getImage();
  }, [file]); // to send the data from frontend to backend

  const onUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div
        className="main-wrapper"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')`,
        }}
      >
        <div className="container">
          <div className="wrapper">
            <h1>AlgoU File Sharing!</h1>
            <p>Upload and share the download link.</p>

            <button onClick={() => onUploadButtonClick()}>Upload</button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={(e) => setfile(e.target.files[0])}
            />

            <a href={result}>{result}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
