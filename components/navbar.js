import Link from 'next/link'

const Navbar = () => {
    return (
    
         <nav >
            <ul className="bg-sky-800 h-10 text-white flex justify-center items-center gap-5">
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/list'>list</Link>
            </li>
           
            <li>
                <Link href='/add'>Add</Link>
            </li>
            <li>Roli</li>
            </ul>
         </nav>
     
    );
}

export default Navbar;