import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import AvatarList from './AvatarList/AvatarList';

const Navbar = (props) => {

    return (<nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/setings' className={navData => navData.isActive ? s.active : s.item}>Setings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>
        </div>
        <div className={s.container}>

          < AvatarList avatars = {props.State.AvatarData} />
        </div>




    </nav>

    )
}

export default Navbar;


