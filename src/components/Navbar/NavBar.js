import React, {Component} from 'react';
import {MenuItems} from './MenuItems';

class NavBar extends Component{

    render() {
        return(
            <nav className="NavBarItem">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon">
                    {/* fontawesome  */}
                </div> 
                <ul>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>                   
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;