import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import React from "react"
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import './navigation.styles.scss'
const Navigation =() =>{
return(
    <Fragment>
    <div className='navigation'>
    <Link className="logo-container" to='/'>
    <CrwnLogo className="logo" />
    </Link>
    <div className='links-container'>
    <Link className='nav-link' to='/shop'>
        SHOP
    </Link>
    </div>
    </div>
    <Outlet/>
    </Fragment>
)
}

export default Navigation