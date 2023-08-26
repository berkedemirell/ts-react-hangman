

const Head = (
     <div className="w-14 h-14 ll:h-12 ssm:h-8 ssm:w-8 ssm:ml-3 ssm:left-52 ssm:top-6 ssm:border-4 rounded-full border-solid border-8 border-slate-950 absolute top-10 left-80"/>
)

const Body = (
    <div className="w-2 h-28 ll:h-24 ll:top-20 bg-slate-950 absolute top-24 right-0 ssm:w-1 ssm:h-16 ssm:top-14"/>
)

const LeftArm = (
    <div className="w-2 h-16 bg-slate-950 ll:h-8 ssm:w-1 ssm:top-14 ssm:end-4 absolute top-24 end-8 rotate-90"/>
)
const RightArm = (
    <div className="w-2 h-32 bg-slate-950 ll:h-24 absolute top-16 end-0 rotate-90 ssm:w-1 ssm:h-8 ssm:-end-4 ssm:top-14"/>
)
const LeftLeg = (
    <div className="w-2 h-24 bg-slate-950 absolute ll:h-16 ll:bottom-6 ll:end-6 -bottom-8 end-8 rotate-45 ssm:w-1 ssm:h-12 ssm:bottom-2 ssm:end-4"/>
)
const RightLeg = (
    <div className="w-2 h-24 ll:h-16 ll:bottom-6 ll:-end-6 bg-slate-950 absolute -bottom-8 -end-8 -rotate-45 ssm:w-1 ssm:h-12 ssm:bottom-2 ssm:-end-4"/>
)

const BodyParts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number,
}

export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return <div className="relative mt-6">
    {BodyParts.slice(0,numberOfGuesses)}
    <div className="w-2 h-10 bg-slate-950 absolute top-0 right-0 ssm:h-6 ssm:w-1"/>
    <div className="w-60 h-2 bg-slate-950 ml-28 ssm:h-1 ssm:w-40 ssm:ml-20"/>
    <div className="h-60  w-2 bg-slate-950 ml-28 ssm:w-1 ssm:h-40 ssm:ml-20"/>
    <div className="w-60 h-2 bg-slate-950 ssm:h-1 ssm:w-40"/>
  </div>;
};

export default HangmanDrawing;
