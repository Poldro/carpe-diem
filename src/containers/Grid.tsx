import Image from "next/image";

export const Grid = () => {
  const emptySquare = "./svg/empty-square.svg";
  const fullSquare = "./svg/full-square.svg";

  const fullimages = Array.from({ length: 1000 }).map((_, i) => (
    <SquareImage key={i} src={fullSquare} />
  ));

  const emptyImages = Array.from({ length: 1000 }).map((_, i) => (
    <SquareImage key={i} src={emptySquare} />
  ));

  return(
<>
<div className="grid grid-cols-12 gap-1">{fullimages}</div>;
<div className="grid grid-cols-12 gap-1">{emptyImages}</div>;
</>
  ) 
};

const SquareImage = ({ src }: {src: string}) => {
  return <Image src={src} alt="empty square" width="12" height="12" />;
};
