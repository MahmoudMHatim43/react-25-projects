import { useState } from "react";
import QRCode from "react-qr-code";
import "./qr-code-css.css";

function QrCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  return (
    <div className="qr-code-container">
      <h1>QR Code Generator</h1>
      <label htmlFor="qr-input"></label>
      <input
        type="text"
        id="qr-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        disabled={input === "" ? true : false}
        onClick={() => {
          setQrCode(input);
          setInput("");
        }}
      >
        Generate
      </button>
      <QRCode value={qrCode} size={500} bgColor={`white`} />
    </div>
  );
}

export default QrCodeGenerator;
