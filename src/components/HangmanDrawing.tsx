

const Head = (
     <div className="w-14 h-14 rounded-full border-solid border-8 border-slate-950 absolute top-10 left-80"/>
)

const Body = (
    <div className="w-2 h-28 bg-slate-950 absolute top-24 right-0"/>
)

const LeftArm = (
    <div className="w-2 h-16 bg-slate-950 absolute top-24 end-8 rotate-90"/>
)
const RightArm = (
    <div className="w-2 h-32 bg-slate-950 absolute top-16 end-0 rotate-90"/>
)
const LeftLeg = (
    <div className="w-2 h-24 bg-slate-950 absolute -bottom-8 end-8 rotate-45"/>
)
const RightLeg = (
    <div className="w-2 h-24 bg-slate-950 absolute -bottom-8 -end-8 -rotate-45"/>
)

const BodyParts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number,
}

export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return <div className="relative mt-6">
    {BodyParts.slice(0,numberOfGuesses)}
    <div className="w-2 h-10 bg-slate-950 absolute top-0 right-0"/>
    <div className="w-60 h-2 bg-slate-950 ml-28"/>
    <div className="h-60 w-2 bg-slate-950 ml-28"/>
    <div className="w-60 h-2 bg-slate-950"/>
  </div>;
};

export default HangmanDrawing;
