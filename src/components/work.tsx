import Image from "next/image";

const Work = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Image src={"/img/favolite1.png"} width={630} height={300} alt="" />
        <Image src={"/img/favolite2.png"} width={630} height={300} alt="" />
      </div>
      <div style={{ display: "flex" }}>
        <Image src={"/img/favolite3.png"} width={630} height={300} alt="" />
        <Image src={"/img/favolite4.png"} width={630} height={300} alt="" />
      </div>
    </>
  );
};

export default Work;
