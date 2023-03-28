import React from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsYoutube} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
import {FaMicrophone} from 'react-icons/fa';
import {RiVideoAddFill} from 'react-icons/ri';
import {MdOutlineNotificationsNone} from 'react-icons/md';



const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <div className='logo'>
            <GiHamburgerMenu className='hamburger'/>
            <div className='utube-logo'>
                <BsYoutube className='utube' />
                <h3>YouTube<sup>NG</sup></h3>
            </div>
        </div>
        <div className='search'>
            <input type= 'text' placeholder = 'Search' className='searchbox'></input>
           <div className='search_icon_container' title='Search'>
            <BsSearch className='search_icon' />
           </div>
           <div className='microphone_box' title='Search with your voice'>
            <FaMicrophone  className='microphone'/>
           </div>
        </div>
        <div className='notification'>
            <div className='arrow_box' title='Create'>
            <RiVideoAddFill className='arrow'/>
            </div>
            <div className='nots_box' title='Notifications'>
                <MdOutlineNotificationsNone className='nots' />
            </div>
            <div className='user'>
                <h3 className='username'>P</h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar;