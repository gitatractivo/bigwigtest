import { useState } from "react";
import {Link} from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci"

const Nav =()=>{
    const[click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    const content =
    <div className="ld:hidden block absolute top-16 w-full left-0 right-0  transition">
        <ul className="text-center text-xl p-20">
            
            <Link spy={true} smooth={true} to="Select Language">
                <li  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Select Language</li>
            </Link>
            <Link spy={true} smooth={true} to="Login">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Login</li>
            </Link>
            <Link spy={true} smooth={true} to="Sign Up">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Sign Up</li>
            </Link>
        </ul>
    </div>
    return(
       <nav>
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex -1">
            <div className="flex items-center flex-1">
                <span className="">LOGO</span>
                <span className="text-gray-800">BigWigMedia.ai</span>
            </div>
            <div className="lg:flex md:flex lg:flex-1 items center justify-end front-normal hidden">
                <div className="fkex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                  
            <Link spy={true} smooth={true} to="Select Language">
                <li className="hover:text-fuschsia-600 transition border-b-2 border-slate-900 hover-border-fischia-600 cursor--pointer">Select Language</li>
            </Link>
            <Link spy={true} smooth={true} to="Login">
                <li className="hover:text-fuschsia-600 transition border-b-2 border-slate-900 hover-border-fischia-600 cursor--pointer">Login</li>
            </Link>
            <Link spy={true} smooth={true} to="Sign Up">
                <li className="hover:text-fuschsia-600 bg-black text-white transition border-b-2 border-slate-900 hover-border-fischia-600 cursor--pointer">Sign Up</li>
            </Link>
                    </ul>
                </div>
            </div>
            <div>
                {click &&content}
            </div>
            <button className="block sm:hiddden transition" onClick={handleClick}> 
            </button>
        </div>

       </nav>
    );
};

export default Nav;