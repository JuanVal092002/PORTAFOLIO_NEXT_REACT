// import (next.js)
import Link from 'next/link';

// next hooks
import { usePathname } from "next/navigation";

const Links =[
    {path: '/', name:'home'},
    {path: 'projects', name:'My projects'},
    {path: '/contact', name:'contact'},

]

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
    const path = usePathname();
    return (
    <nav className={`${containerStyles}`}>
        {Links.map((link,index)=>{
            return(
                <Link
                href={link.path}
                key={index}
                className={`capitalize ${linkStyles}`}
                >
                {link.name}
                </Link>
            );
            })}
            </nav>
    );
};

export default Nav;