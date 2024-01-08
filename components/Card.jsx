import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
const Card = (props) => {
  return (
    <>
      <Link
        href="#"
        className="flex flex-col  w-80 items-center bg-gray-400 rounded-lg p-3 space-y-3 hover:bg-gray-800 hover:cursor-pointer transition-all ease-in-out duration-200   hover:translate-y-2 shadow-md"
      >
        <div className="w-100">
          <Image
            src={props.image}
            width={500}
            height={500}
            className="bg-white w-100 aspect-square"
            alt="ProductImg"
            loading={"lazy"}
          />
        </div>

        <h1 className="underline">{props.title?.split("", 20)}..</h1>

        {/* <p className="w-100 overflow-y-scroll h-20">{props.description}</p> */}

        <div className="w-[100%]">
          <p className="text-center">
            Product Price :
            <small className="font-sans font-bold">{props.price}</small>
          </p>
        </div>
        <div>
          <Button {...props} />
        </div>
      </Link>
    </>
  );
};
export default Card;
