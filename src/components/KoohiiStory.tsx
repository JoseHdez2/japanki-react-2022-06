import { ListGroup } from "react-bootstrap";

export type KoohiiStoryProps = {
  kanji: String;
  story: String;
  author?: String;
  date?: Date;
  likes?: number;
};

export const KoohiiStoryInline: React.FC<KoohiiStoryProps> = ({ story }) => (
  <>
    <p>{story}</p>
  </>
);

export type KoohiiStoryListProps = {
  stories: KoohiiStoryProps[];
};

export const KoohiiStoryList: React.FC<KoohiiStoryListProps> = ({
  stories
}) => (
  <ListGroup>
    {stories.map((s) => (
      <ListGroup.Item>
        <KoohiiStoryInline {...s} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);
