import { useContext } from "react";
import { DrumContext, TDrumContext } from "../../lib/hooks/drumContext";
import Drumpad from "./drumPad";

export default function Machine() {
  const { state, handler } = useContext(DrumContext) as TDrumContext;
  return (
    <section
      id="drum-machine"
      className="grid grid-cols-3 gap-2 items-center px-8 py-4 bg-white rounded-md overflow-hidden text-stone-950"
    >
      <div className="col-span-2 grid grid-cols-3 gap-4 place-items-center">
        {state.audios.sort().map((audio) => (
          <Drumpad
            audio={audio}
            key={audio.key}
            setPlayingAudio={handler.setPlayingAudio}
          />
        ))}
      </div>

      <div className="col-span-1 grid place-items-center" id="display">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold">Playing:</p>
          <p className="text-xs">{state.playingAudio ?? "Empty"}</p>
        </div>
      </div>
    </section>
  );
}
