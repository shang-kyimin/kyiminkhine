import Link from "next/link";


export default function Header() {
  return (
    <header className="flex-b-c pb-4 pt-8 px-6 font-title tracking-wider">
      <Link href="/">
        <h2 className="text-base md:text-lg font-normal">kmk</h2>
      </Link>
    </header>
  );
}


