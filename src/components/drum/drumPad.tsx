import React from "react";
type TDrumPadProps = {
  audio: TDrum;
  setPlayingAudio: (audio: string | null) => void;
};

type TDrumPadState = {
  audio: TDrum;
  playingAudio: string | null;
};

export default class Drumpad extends React.Component<
  TDrumPadProps,
  TDrumPadState
> {
  constructor(props: TDrumPadProps) {
    super(props);
    this.state = {
      audio: this.props.audio,
      playingAudio: null,
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount(): void {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  onBtnClick = () => {
    const audioElement = document.getElementById(
      this.props.audio.key
    ) as HTMLAudioElement;
    const buttonElement = document.getElementById(
      `btn-${this.props.audio.key}`
    ) as HTMLButtonElement;

    if (buttonElement) {
      buttonElement.animate(
        { transform: ["scale(1)", "scale(1.1)", "scale(1)"] },
        {
          duration: 100,
          easing: "ease-in-out",
          iterations: 1,
        }
      );
    }
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      this.props.setPlayingAudio(this.state.audio.name);
    }
  };

  handleKeyDown(event: KeyboardEvent) {
    if (
      event.key === this.state.audio.key.toLowerCase() ||
      event.key === this.state.audio.key.toUpperCase()
    ) {
      this.onBtnClick();
    }
  }

  render() {
    return (
      <button
        className="drum-pad w-32 h-auto aspect-square bg-amber-400 text-stone-950 font-bold text-2xl grid place-items-center px-4 py-2 rounded-md overflow-hidden"
        id={`btn-${this.props.audio.key}`}
        onClick={this.onBtnClick}
      >
        <span>{this.props.audio.key}</span>
        <audio
          src={this.props.audio.audio.currentSrc}
          id={this.props.audio.key}
          className="clip"
        />
      </button>
    );
  }
}
