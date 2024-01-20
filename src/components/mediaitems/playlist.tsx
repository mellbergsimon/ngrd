'use client'

import { useState } from "react";

import { IncButton } from "./addMediaButton";

function Playlist({ amount }: { amount: number }) {
  const [mediaItemAmounts, setMediaItemAmounts] = useState<number>(amount);

  const handleClick = () => {
    console.log("mediaItemAmounts: " + mediaItemAmounts)
    setMediaItemAmounts(mediaItemAmounts + 1);
  };

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     const { key } = event;
  //     const [knightX, knightY] = knightPosition;

  //     // Move the knight based on arrow keys
  //     switch (key) {
  //       case "ArrowUp":
  //         setKnightPosition([knightX, Math.max(0, knightY - 1)]);
  //         break;
  //       case "ArrowDown":
  //         setKnightPosition([knightX, Math.min(7, knightY + 1)]);
  //         break;
  //       case "ArrowLeft":
  //         setKnightPosition([Math.max(0, knightX - 1), knightY]);
  //         break;
  //       case "ArrowRight":
  //         setKnightPosition([Math.min(7, knightX + 1), knightY]);
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  // Attach the event listener when the component mounts
  // window.addEventListener("keydown", handleKeyDown);

  // Detach the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [knightPosition]);



  const content = [];

  for (let i = 0; i < mediaItemAmounts; i++) {
    content.push(renderMediaItem({ i, handleClick }));
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-slate-400 rounded-lg">
      {content}
    </div>
  );
}
interface RenderMediaItemProps {
  i: number;
  handleClick: () => void;
}

function renderMediaItem({ i, handleClick }: RenderMediaItemProps) {
  let marginT = "mt-0";
  if (i === 0) {
    marginT = "mt-2";
  }

  return (
    <div className={`m-2 ${marginT} font-semibold rounded hover:opacity-25 bg-slate-600/50`}>
      <div className="m-4">
        Media Item {i}
        <IncButton funcboi={() => handleClick()}></IncButton>
      </div>
    </div>
  );
}


export { Playlist }