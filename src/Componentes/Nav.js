import React from 'react';

const Nav=(props)=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">{props.name}</a>
        </nav>
    )
}
export default Nav;