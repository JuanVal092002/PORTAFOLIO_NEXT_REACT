'use client';
import { useState, useEffect } from "react";


// Components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav'

const Header = () => {
    return(
    <header>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo/>
             <div className="flex items-center gap-x-6">
                {/* nav */}
                <Nav containerStyles='hidden xl:flex gap-x-8 items-center'/>
                <ThemeToggler/>
                {/* Mobile Nav  */}
                <div className="xl:hidden">
                <MobileNav/>
                </div>
             </div>
          </div>
        </div>       
    </header>
    );
 };

export default Header;