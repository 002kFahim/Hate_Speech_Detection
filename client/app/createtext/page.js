"use client";
import { useState } from "react";

export default function CreateText() {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // Handle the submission of the text
    console.log("Submitted text:", text);
  };

  const handleClear = () => {
    // Clear the text when the "Clear" button is clicked.
    setText("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="border border-gray-300 p-4 rounded-md shadow-lg"
        style={{ width: "70%" }}
      >
        <textarea
          className="w-full h-80 px-3 py-2 border border-gray-300 rounded-md"
          style={{ width: "100%" }}
          placeholder="Let's get started..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="flex justify-end mt-4">
          <div className="flex space-x-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-lg"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
