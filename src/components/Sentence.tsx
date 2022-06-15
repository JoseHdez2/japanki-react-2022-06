import React from "react";

export type SentenceProps = {
  sentence: String;
  translation: String;
};

// https://www.npmjs.com/package/google-tts-api
export const Sentence: React.FC<SentenceProps> = ({
  sentence,
  translation
}) => (
  <>
    <p>{sentence}</p>
    <p>{translation}</p>
  </>
);
