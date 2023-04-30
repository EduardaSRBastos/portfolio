import { Body, Paw} from "./Style";

export default function CatPawBackground() {
    const getRandomPosition = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
        
    const generatePaws = (num: number) => {
    const paws = [];
    for (let i = 0; i < num; i++) {
        const top = getRandomPosition(0, 100) + "%";
        const left = getRandomPosition(0, 100) + "%";
        const rotation = Math.floor(Math.random() * 360) + "deg";
        const key = Math.random();

        paws.push(
        <Paw key={key} style={{ top, left, transform: `rotate(${rotation})` }}
            onAnimationIteration={(event: { target: { style: { top: string; left: string; }; }; }) => 
            {
            const newTop = getRandomPosition(0, 100) + "%";
            const newLeft = getRandomPosition(0, 100) + "%";
            event.target.style.top = newTop;
            event.target.style.left = newLeft;
            }}>
        </Paw>
        );
    }
    return paws;
    };

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "96%", height:"98%", zIndex:0 }}>
        <Body>{generatePaws(50)}</Body>
    </div>
  );
}