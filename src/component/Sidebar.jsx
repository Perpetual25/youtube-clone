import React from 'react'
import './Sidebar.css';
import {AiFillHome} from 'react-icons/ai';
import {TiFlash} from 'react-icons/ti';
import {MdSubscriptions} from 'react-icons/md';
import {MdVideoLibrary} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';
import {RiVideoLine} from 'react-icons/ri';
import {MdOutlineWatchLater} from 'react-icons/md';
import {BiLike} from 'react-icons/bi';
import {MdOutlineWebStories} from 'react-icons/md'; 
import ife from '../component/youtube images/pic1.jpg';
import tomike from '../component/youtube images/pic2.jpg';
import fcc from '../component/youtube images/pic3.jpg';
import tahmid from '../component/youtube images/pic4.jpg';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {AiOutlineFire} from 'react-icons/ai';
import {MdOutlineMusicNote} from 'react-icons/md';
import{GiGamepad} from 'react-icons/gi';
import {BsNewspaper} from 'react-icons/bs';
import {BsTrophy} from 'react-icons/bs';
import {AiOutlineYoutube} from 'react-icons/ai';
import {SiYoutubestudio} from 'react-icons/si';
import {SiYoutubemusic} from 'react-icons/si';
import {TbBrandYoutubeKids} from 'react-icons/tb';
import {FiSettings} from 'react-icons/fi';
import {RiFlagFill} from 'react-icons/ri';
import {BiHelpCircle} from 'react-icons/bi';
import {RiFeedbackFill} from 'react-icons/ri';

const Sidebar = (props) => {
  return (
    <div className='main_side_div'>
      <div className='section1'>
        <div className='home sidebar_common' title='Home'>
          <AiFillHome className='home_icon'/>
          <h5 className='home_text' >Home</h5>
        </div>

        <div className='short sidebar_common' title='Shorts'>
          <TiFlash className='home_icon'/>
          <h5 className='home_text'>Shorts</h5>
        </div>

        <div className='subscription sidebar_common' title='Subscription'>
          <MdSubscriptions className='home_icon'/>
          <h5 className='home_text'>Subscription</h5>
        </div>
      </div>
      <div className='hrule'> </div>

      <div className='section2'>
        <div className=' sidebar_common' title='Library'>
          <MdVideoLibrary className='home_icon'/>
          <h5 className='home_text'>Library</h5>
        </div>

        <div className='short sidebar_common' title='History'>
          <FaHistory className='home_icon'/>
          <h5 className='home_text'>History</h5>
        </div>

        <div className='subscription sidebar_common' title='Your videos'>
          <RiVideoLine className='home_icon'/>
          <h5 className='home_text'>Your videos</h5>
        </div>
        <div className='short sidebar_common' title='Watch ater'>
          <MdOutlineWatchLater className='home_icon'/>
          <h5 className='home_text'>Watch later</h5>
        </div>
        <div className='short sidebar_common' title='Liked videos'>
          <BiLike className='home_icon'/>
          <h5 className='home_text'>Liked videos</h5>
        </div>
        <div className='short sidebar_common' title='Web development'>
          <MdOutlineWebStories className='home_icon'/>
          <h5 className='home_text'>Web development</h5>
        </div>
        <div className='hrule'> </div>
      </div>
      <div className='section3'>
        <h3 className='sub'>Subscriptions</h3>
        <div className='sidebar_common' title='Diary of A Naija Girl'>
          <img src={ife} alt=""  className='pic1'/>
          <h5 className='home_text'>Diary of A Naija Girl</h5>
        </div>
        <div className='sidebar_common' title='Tomike Adeoye'>
          <img src={tomike} alt=""  className='pic1'/>
          <h5 className='home_text'>Tomike Adeoye</h5>
        </div>
        <div className='sidebar_common' title='Free Code Camp.org'>
          <img src={fcc} alt=""  className='pic1'/>
          <h5 className='home_text'>Free Code Camp.org</h5>
        </div>
        <div className='sidebar_common' title='Tahmid Ahmid'>
          <img src={tahmid} alt=""  className='pic1'/>
          <h5 className='home_text'>Tahmid Ahmid</h5>
        </div>
        <div className='short sidebar_common'>
          <RiArrowDropDownLine className='home_icon'/>
          <h5 className='home_text'>Show 38 more</h5>
        </div>
        <div className='hrule'> </div>
      </div>
      <div className='section4'>
      <h3 className='sub'>Explore</h3>
        <div className=' sidebar_common' title='Trending'>
          <AiOutlineFire className='home_icon'/>
          <h5 className='home_text'>Trending</h5>
        </div>

        <div className='short sidebar_common' title='Music'>
          <MdOutlineMusicNote className='home_icon'/>
          <h5 className='home_text'>Music</h5>
        </div>

        <div className='subscription sidebar_common' title='Gaming'>
          <GiGamepad className='home_icon'/>
          <h5 className='home_text'>Gaming</h5>
        </div>
        <div className='short sidebar_common' title='News'>
          <BsNewspaper className='home_icon'/>
          <h5 className='home_text'>News</h5>
        </div>
        <div className='short sidebar_common' title='Sport'>
          <BsTrophy className='home_icon'/>
          <h5 className='home_text'>Sport</h5>
        </div>
        <div className='hrule'> </div>
      </div>
      <div className='section5'>
      <h3 className='sub'>More From Youtube</h3>
        <div className=' sidebar_common' title='Youtube Premium'>
          <AiOutlineYoutube className='home_icon col'/>
          <h5 className='home_text'>Youtube Premium</h5>
        </div>

        <div className='short sidebar_common' title='Youtube Studio'>
          <SiYoutubestudio className='home_icon col'/>
          <h5 className='home_text'>Youtube Studio</h5>
        </div>

        <div className='subscription sidebar_common' title='Youtube Music'>
          <SiYoutubemusic className='home_icon col'/>
          <h5 className='home_text'>Youtube Music</h5>
        </div>
        <div className='short sidebar_common' title='Youtube Kids'>
          <TbBrandYoutubeKids className='home_icon col'/>
          <h5 className='home_text'>Youtube Kids</h5>
        </div>
        <div className='hrule'> </div>
      </div>
      <div className='section6'>
        <div className=' sidebar_common' title='Settings'>
          <FiSettings className='home_icon'/>
          <h5 className='home_text'>Settings</h5>
        </div>

        <div className='short sidebar_common' title='Report History'>
          <RiFlagFill className='home_icon'/>
          <h5 className='home_text'>Report History</h5>
        </div>

        <div className='subscription sidebar_common' title='Help'>
          <BiHelpCircle className='home_icon'/>
          <h5 className='home_text'>Help</h5>
        </div>
        <div className='short sidebar_common' title='Send Feedback'>
          <RiFeedbackFill className='home_icon'/>
          <h5 className='home_text'>Send Feedback</h5>
        </div>
        <div className='hrule'> </div>
      </div>

    </div>
  )
}

export default Sidebar