import React from "react";
import { Accordion } from "react-bootstrap";
import {
  WordList,
  WordListProps,
  KoohiiStoryList,
  KoohiiStoryListProps
} from ".";

// https://en.wikipedia.org/wiki/List_of_radicals_in_Unicode
export type Radical = {
  name: String;
};

export type KanjiDetailsProps = {
  kanji: String;
  meaning: String;
  words?: WordListProps;
  primitives?: Radical[];
  koohiiStories?: KoohiiStoryListProps;
};

export const KanjiDetails: React.FC<KanjiDetailsProps> = ({
  kanji,
  meaning,
  words = [],
  koohiiStories = []
}) => (
  <>
    <h1>{kanji}</h1>
    <h2>{meaning}</h2>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Stories for {kanji}</Accordion.Header>
        <Accordion.Body>
          <KoohiiStoryList stories={koohiiStories} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Words with {kanji}</Accordion.Header>
        <Accordion.Body>
          <WordList words={words} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
);
