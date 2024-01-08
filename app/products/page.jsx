import Card from "@/components/Card";
import Link from "next/link";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(`Error on Product Page is ${error.message}`);
  }
};

const Page = async () => {
  const products = await fetchProducts();

  return (
    <>
      <p className="text-5xl text-center my-5 font-semibold  font-mono uppercase">
        Products
      </p>
      <div className="flex flex-wrap gap-8 space-y-3 w-100 justify-center">
        {products?.map((product) => (
          <Card key={product?.id} {...product} ButtonText={"Add"} />
        ))}
      </div>
    </>
  );
};

export default Page;
