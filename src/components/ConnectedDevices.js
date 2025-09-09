import React, { useState } from "react";
import "./connectedDevices.css";

const ConnectedDevices = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Samsung Galaxy M11", location: "Mumbai", lastActive: "2 Days Ago" }
  ]);

  const removeDevice = (id) => {
    setDevices(devices.filter((device) => device.id !== id));
  };

  const handleSave = () => {
    alert("Connected Devices settings saved!");
  };

  return (
    <div className="connectedDevices-container">
      <div className="connectedDevices-header">
        <h2>Settings</h2>
        <input type="text" placeholder="Search..." className="search-box" />
      </div>

      <h3 className="section-title">Connected Devices</h3>
      <p className="subtitle">Your Connected Devices</p>

      {devices.length > 0 ? (
        devices.map((device) => (
          <div key={device.id} className="device-card">
            <div className="device-icon"></div>
            <div className="device-info">
              <span className="device-name">{device.name}</span>
              <span className="device-location">{device.location}</span>
            </div>
            <span className="device-time">{device.lastActive}</span>
            <button className="remove-btn" onClick={() => removeDevice(device.id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="no-devices">No connected devices</p>
      )}

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ConnectedDevices;
