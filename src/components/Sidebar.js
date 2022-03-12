import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import ListIcon from '@mui/icons-material/List';
import SidebarOption from './SidebarListItem/SidebarListItem.js';
function Sidebar() {
	return (
		<div className='sidebar'>
			<TwitterIcon />
			<SidebarOption active Icon={HomeIcon} text='Home' />
			<SidebarOption Icon={SearchIcon} text='Explore' />
			<SidebarOption Icon={NotificationsNoneIcon} text='Notification' />
			<SidebarOption Icon={MessageIcon} text='Messages' />
			<SidebarOption Icon={ListIcon} text='Lists' />
		</div>
	);
}
export default Sidebar;
