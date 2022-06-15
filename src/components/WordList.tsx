import { ListGroup } from "react-bootstrap";
import { WordDetailsProps } from ".";
import { WordInline } from "./WordDetails";

export type WordListProps = {
  words: WordDetailsProps[];
};

export const WordList: React.FC<WordListProps> = ({ words }) => (
  <ListGroup>
    {words.map((w) => (
      <ListGroup.Item>
        <WordInline {...w} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);
