import {
  KanjiDetails,
  KanjiDetailsProps,
  KoohiiStoryProps,
  Panel,
  WordDetailsProps,
  WordInline
} from "./components";
import "./styles.css";

const kanjiData: KanjiDetailsProps[] = [
  { kanji: "心", meaning: "heart" },
  { kanji: "電", meaning: "electricity" },
  { kanji: "ඞ", meaning: "アモグス" }
];

const wordData: WordDetailsProps[] = [
  { word: "時間", meaning: "time, hour" },
  { word: "始める", meaning: "to start" },
  { word: "ඞ", meaning: "アモグス" }
];

const koohiiData: KoohiiStoryProps[] = [
  { kanji: "心", story: "A three-eyed alien smiling .:)" },
  { kanji: "心", story: "A copy of Pikmin 3 for the Wii U" },
  { kanji: "心", story: "An omelette" },
  { kanji: "電", story: "Something" }
];

export default function App() {
  return (
    <div className="App">
      {kanjiData.map((d) => (
        <Panel>
          <KanjiDetails {...d} words={wordData} koohiiStories={koohiiData} />
        </Panel>
      ))}
      {wordData.map((d) => (
        <Panel color="lightyellow">
          <WordInline {...d} />
        </Panel>
      ))}
    </div>
  );
}
