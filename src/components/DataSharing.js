import React, { useState } from "react";
import "./dataSharing.css";

const DataSharing = () => {
  const [shareHealthData, setShareHealthData] = useState(true);
  const [downloadData, setDownloadData] = useState(true);
  const [requestDataDeletion, setRequestDataDeletion] = useState(true);

  const handleSave = () => {
    alert("Data Sharing settings saved!");
  };

  return (
    <div className="dataSharing-container">
      <div className="dataSharing-header">
        <h2>Settings</h2>
        <input type="text" placeholder="Search..." className="search-box" />
      </div>

      <h3 className="section-title">Data Sharing</h3>

      <div className="dataSharing-item">
        <span>Share Health Data</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={shareHealthData}
            onChange={() => setShareHealthData(!shareHealthData)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="dataSharing-item">
        <span>Download Data</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={downloadData}
            onChange={() => setDownloadData(!downloadData)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="dataSharing-item">
        <span>Request Data Deletion</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={requestDataDeletion}
            onChange={() => setRequestDataDeletion(!requestDataDeletion)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default DataSharing;
