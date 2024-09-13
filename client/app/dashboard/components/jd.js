"use client";

import { useState, useEffect } from "react";

export const JD = () => {
  const [jobDescription, setJobDescription] = useState("");

  // TODO: SUBMIT handler function

  return (
    <>
      <textarea
        placeholder="Copy Job Description Here"
        onChange={(e) => setJobDescription(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </>
  );
};
