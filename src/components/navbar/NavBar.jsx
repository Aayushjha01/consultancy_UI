import './navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import img1 from '../../assets/log.jpg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <div className="left">
    <Link to="/" style={{textDecoration:"None"}}> <span >Your Consultant</span></Link>
    <HomeIcon/>
    <DarkModeIcon/>
    <AppsIcon/>
    <div className="search"> <SearchIcon/><input type="search" placeholder='Search...'/></div>
   </div> 
    <div className="right">
    <PersonIcon/>
   <EmailIcon/>
   <NotificationsIcon/>
   <div className="user"><img src=" " alt="" /> <span>Aayush jha</span></div>
   </div> 
</div>
  )
}

export default NavBar