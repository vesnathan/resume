import { LogoType } from "@/constants/techLogos";
import Image from "next/image";
import Link from "next/link";

interface Props {
  row: LogoType[];
}

export const LogosRow = ({ row }: Props) => {
  console.log("row", row);
  return (
    <div className="flex flex-row gap-5 justify-center items-center">
      {row.map((logo) => (
        <div
          id={logo.name}
          key={logo.name}
          className="flex flex-col items-center justify-center hover:animate-pulse"
        ><Link href={logo.link} target="_blank" rel="noopener noreferrer">
          <Image src={logo.src} alt={logo.name} width={120} height={120} />
          </Link>
          <span>{logo.name}</span>

        </div>
      ))}
    </div>
  );
};
