'use client'

import { useState } from "react";
import { backInOut, motion, AnimatePresence } from "framer-motion";

import { Button } from "../ui/button";


function Playlist({ amount }: { amount: number }) {
  const [mediaItemAmounts, setMediaItemAmounts] = useState<number>(amount);

  const handleClick = (increment: boolean) => {
    console.log("mediaItemAmounts: " + mediaItemAmounts)
    const newInc = increment ? 1 : -1
    setMediaItemAmounts(mediaItemAmounts + newInc);
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

    <div className="flex flex-col w-screen h-screen rounded-lg">
      <AnimatePresence initial={false}>
        {content}
      </AnimatePresence>
    </div>
  );
}
interface RenderMediaItemProps {
  i: number;
  handleClick: (increment: boolean) => void;
}

function renderMediaItem({ i, handleClick }: RenderMediaItemProps) {
  let marginT = "mt-0";
  if (i === 0) {
    marginT = "mt-2";
  }

  return (
    
      <motion.div
        key={i}
        className={`flex items-center m-2 ${marginT} font-semibold rounded hover:bg-slate-200 bg-gray-600`}
        transition={{ duration: 0.2, ease: backInOut }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <div className="m-2"> {/* Media item should go here */}
          Media Item {i}
        </div>
        <div className="m-2">
          <Button onClick={() => handleClick(true)}>Inc</Button>
          <Button onClick={() => handleClick(false)}>Dec</Button>
        </div>
      </motion.div>
    

  );
}


export { Playlist }