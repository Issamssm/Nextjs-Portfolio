import Image from "next/image";



const Circles = () => {
  return (
    <div className=" w-[200px] animate-pulse duration-75 z-10 xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge" >
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        alt=""
        className=" w-full h-full" />
    </div>
  )
};

export default Circles;
