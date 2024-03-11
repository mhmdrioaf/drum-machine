import React from "react";
import * as assets from "../constants";

export type TDrumContext = {
  handler: {
    setPlayingAudio: (audio: string | null) => void;
  };

  state: {
    playingAudio: string | null;
    audios: TDrum[];
  };
};

export const DrumContext = React.createContext<TDrumContext | null>(null);

export function DrumProvider({ children }: { children: React.ReactNode }) {
  const audios = Object.values(assets);

  const [playingAudio, setPlayingAudio] = React.useState<string | null>(null);

  const value = {
    handler: {
      setPlayingAudio,
    },
    state: {
      playingAudio,
      audios,
    },
  };

  return <DrumContext.Provider value={value}>{children}</DrumContext.Provider>;
}
