import AddToCartButton from "@/app/components/AddCartToButton";
import Image from "next/image";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;  // ✅ unwrap the promise
  const product = await getProduct(resolvedParams.id);

  if (!product || !product.images) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <Image
        src={product.images?.[0] ?? "/placeholder.png"}
        width={400}
        height={400}
        alt={product.title ?? "Product Image"}
      />

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl mt-2 text-gray-600">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
        </div>
        <div><AddToCartButton product={product} /></div>
      </div>
    </div>
  );
}
