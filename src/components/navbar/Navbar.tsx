import * as React from 'react'
import { NavLink } from './navigation'
import './Navbar.scss' 

const Navbar = (props: {
    brand: NavLink
    links: NavLink[]
}) => {
    return (
        <div className='navbar'>
            <a className='navbar-brand' href={props.brand.to}>{props.brand.name}</a>
            <nav className='navbar-links'>
                {props.links.map((link, index) => (
                    <a key={index} href={link.to}>{link.name}</a>
                ))}
            </nav>
        </div>
    )
}

export default Navbar