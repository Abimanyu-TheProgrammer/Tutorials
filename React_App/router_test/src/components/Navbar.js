import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // console.log(props)
    // setTimeout(() => {
    //     props.history.push("/about")
    // }, 2000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left" href='/'>Ghost Of Tsushima</a>
                <ul className="right">
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li> */}
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/About">About</NavLink></li>
                    <li><NavLink to = "/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)