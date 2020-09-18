import React from 'react'
import css from "./Header.module.css"
 

function Header(){

        return (
                <div className = {css.body}>
                                <h1 className = {css.name}>Company Name</h1>
                </div>
        );
}


export default Header;