import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav>
        <div id="desktop-nav">
            <div className="container">
            <div className="logo">
                <Link className="logo-text" to="/">Selling<span className="dot">.</span></Link>
            </div>
            <div className="pages">
                <ul>
                    <li><NavLink to={'/'} className={"navlink"}>Home</NavLink></li>
                    <li><NavLink to={'/add-page'} className={"navlink"}>Add Page</NavLink></li>
                    <li><NavLink to={'/add'}  className={"navlink"}>Wishlist</NavLink></li>
                    <li><NavLink to={'/add'}  className={"navlink"}>Basket</NavLink></li>   
                </ul>
                
                
            </div>
            </div>
        </div>
        <div id="mobile-nav">
        <div className="container">
            <div className="top-nav">
            <div className="logo">
                <Link className="logo-text" to="/">Selling<span className="dot">.</span></Link>
            </div>
            <div className="nav-icon">
                <button onClick={()=>setIsNavOpen(!isNavOpen)}><GiHamburgerMenu /></button>
            </div>
            </div>
            <div onClick={()=>setIsNavOpen(!isNavOpen)} className={`pages ${isNavOpen ? "active" : ""}`}>
                <ul>
                    <li><NavLink to={'/'} className={"navlink"}>Home</NavLink></li>
                    <li><NavLink to={'/add-page'} className={"navlink"}>Add Page</NavLink></li>
                    <li><NavLink to={'/add'}  className={"navlink"}>Wishlist</NavLink></li>
                    <li><NavLink to={'/add'}  className={"navlink"}>Basket</NavLink></li>   
                </ul>
                
                
            </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar