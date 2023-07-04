import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(
        <nav className="nav-div">
        
          <div>
            <Image src="/logo.png" width={300} height={60} alt="logo"/>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/friends/About">About</Link>
            <Link href="/friends">List</Link>
          </div>
         
        </nav>
    )
}