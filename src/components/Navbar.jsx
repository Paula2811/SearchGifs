import React,{Link} from 'react'
import { AddCategory } from './AddCategory'

const Navbar = ({onAddCategory}) => {

    return (
    <nav className='navbar'>
            <h1 className='navbar-title'>My Gifs</h1>
            <AddCategory onNewCategory={onAddCategory} />
        <div className='navbar-link'>
            <a href="https://github.com/Paula2811" target="_blank">
                <img src="/github.png" alt="git hub icono" height='38px'/>
            </a>
            <a href="https://www.linkedin.com/in/paulayunes/" target="_blank">
                <img src="/linkedin.png" alt="linkedin icono" height='38px' />
            </a>
        </div>
        
    </nav>
    )
}

export default Navbar
