import Image from "next/image";

export const Grid = ({
  weeksfromBorn,
  weeksLeft,
}: {
  weeksfromBorn: number;
  weeksLeft: number;
}) => {
  const emptySquare = "./svg/empty-square.svg";
  const fullSquare = "./svg/full-square.svg";

  const fullimages = Array.from({ length: weeksfromBorn }).map((_, i) => (
    <SquareImage key={i} src={fullSquare} />
  ));

  const emptyImages = Array.from({ length: weeksLeft }).map((_, i) => (
    <SquareImage key={i} src={emptySquare} />
  ));

  return (
    <div className="flex flex-wrap gap-1 p-4">
      {fullimages}
      {emptyImages}
    </div>
  );
};

const SquareImage = ({ src }: { src: string }) => {
  return <Image src={src} alt="empty square" width="12" height="12" />;
};
