import Image from "next/image";
import { Inter, Tillana } from "next/font/google";
import Aboutme from "@/components/aboutme";
import Work from "@/components/work";
import Title from "@/components/title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Title />
      <Aboutme></Aboutme>
      <Work />
    </>
  );
}
