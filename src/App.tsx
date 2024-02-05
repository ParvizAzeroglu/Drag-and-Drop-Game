import React, { useState } from "react";
import styles from "./App.module.css";

interface ColorProps {
  colors: {
    purple: string;
    brown: string;
    green: string;
    red: string;
    orange: string;
    yellow: string;
  };
}

interface EmojiProps {
  emojies: {
    purple: string;
    brown: string;
    green: string;
    red: string;
    orange: string;
    yellow: string;
  };
  onTouchStartEmoji?: React.TouchEventHandler<HTMLDivElement>;
  onTouchEndEmoji?: React.TouchEventHandler<HTMLDivElement>;
  dragging?: boolean;
}

const colors = {
  purple: "#A037AA",
  brown: "#785545",
  green: "#3F9E4A",
  red: "#FF5031",
  orange: "#F69300",
  yellow: "#E6CA30",
};

const emojies = {
  purple: "🍇",
  brown: "🥥",
  green: "🍏",
  red: "🍅",
  orange: "🥕",
  yellow: "🍋",
};

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Score />
      <Game colors={colors} emojies={emojies} />
      <RestartButton />
    </div>
  );
};

const Score: React.FC = () => {
  return (
    <div className={styles["score-container"]}>
      <p>Score 0 / 6</p>
    </div>
  );
};

const Game: React.FC<ColorProps & EmojiProps> = ({ colors, emojies }) => {
  //onTouchStartEmoji
  // function onTouchStartEmoji() {
  //   console.log("lorem ipsum dolor");
  // }

  // const onTouchStartEmoji: EmojiProps = () => {
  //   console.log("lorem ipsum");
  // };

  // function onTouchStartEmoji() {
  //   console.log("echo");
  // }
  return (
    <div className={styles["game-container"]}>
      <Emojies emojies={emojies} />
      <Colors colors={colors} />
    </div>
  );
};

const Colors: React.FC<ColorProps> = ({ colors }) => {
  const colorsArr = Object.values(colors);
  return (
    <div className={styles["colors-container"]}>
      {colorsArr.map((color, index) => (
        <div
          key={index}
          className={styles["colors-item"]}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

const Emojies: React.FC<EmojiProps> = ({ emojies }) => {
  const [dragging, setDragging] = useState<boolean>(false);

  const onTouchStartEmoji = () => {
    console.log("start");
    setDragging(() => true);
  };

  const onTouchEndEmoji = () => {
    console.log("end");
    setDragging(() => false);
  };

  const emojiesArr = Object.values(emojies);
  return (
    <div className={styles["emojies-container"]}>
      {emojiesArr.map((emoji, index) => (
        <div
          key={index}
          className={`${styles["emojies-item"]} ${
            dragging ? styles.dragging : ""
          }`}
          onTouchStart={onTouchStartEmoji}
          onTouchEnd={onTouchEndEmoji}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

const RestartButton: React.FC = () => {
  return (
    <div className={styles.restart}>
      <img src="../assets/restart.svg" alt="Restart" />
    </div>
  );
};

export default App;
