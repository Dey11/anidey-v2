import { Info } from "lucide-react";
import Link from "next/link";

const InfoPageBtn = ({ anilistId }: { anilistId: number }) => {
  return (
    <Link href={`/anime/info/${anilistId}`}>
      <Info size={16} />
    </Link>
  );
};

export default InfoPageBtn;
