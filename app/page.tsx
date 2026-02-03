import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>

    <main>
      <h1>Hello boss</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
    </div>
  );
}
