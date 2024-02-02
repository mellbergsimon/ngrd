'use client'

import { useState } from "react";
import { backInOut, motion, AnimatePresence } from "framer-motion";

import { Button } from "../ui/button";



import { CasparCG } from "casparcg-connection";


function CasparTest() {
  const connection = new CasparCG()

  const cghost = "192.168.11.17";
  connection.connect(cghost);

}

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

    <div className="w-full h-max border-cyan-500 border-2 bg-inherit">
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
      className={`flex justify-start items-center ${marginT} font-semibold text-neutral-50 rounded-md bg-inherit hover:bg-neutral-600/75`}
      transition={{ duration: 0.2, ease: 'backInOut' }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      {/* First Child */}
      <div className="flex-shrink-0 w-4 m-2 text-slate-400/75">
        {i + 1}
      </div>

      {/* Second Child */}
      <div className="flex-shrink-0 bg-white/50 h-10 w-10 text-sm m-1 flex items-center justify-center">
        ICON
      </div>

      {/* Empty Space */}
      <div className="flex-shrink-0" style={{ flexBasis: '5%' }} />

      {/* Third Child */}
      <div className="text-neutral-100">
        {/* Your content for the third child goes here */}
        Media Item
      </div>

      {/* Fourth Child */}
      <div className="flex-grow" />

      <div className="justify-self-end">
        <Button onClick={() => handleClick(true)}>Inc</Button>
        <Button onClick={() => handleClick(false)}>Dec</Button>
      </div>
    </motion.div>


  );
}


export { Playlist }