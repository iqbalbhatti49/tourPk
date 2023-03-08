import React, { useState } from "react";
import styles from "./UploadMediaButton.module.css";

const UploadMediaButton = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Use the File API to upload the file to your server
    // Here's an example using the fetch() function:
    const formData = new FormData();
    formData.append("file", file);
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.uploadMedia}>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
};

export default UploadMediaButton;
