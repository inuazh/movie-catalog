import Link from "next/link"


export default function Navbar(){

    return(
        <nav className="flex gap-4">
        <Link href={"/"}>home</Link>
        <Link href={'/catalog'}>catalog</Link>
        <Link href={'/about'}>about</Link>
        </nav>
    )
}