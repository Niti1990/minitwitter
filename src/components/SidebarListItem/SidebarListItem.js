import React from 'react';
import './SidebarListItem.css';
function SidebarOption({ text, Icon }) {
	//Icon is a componenet so capital I
	return (
		<div className='SidebarListItem'>
			<Icon />
			<h3>{text}</h3>
		</div>
	);
}
export default SidebarOption;
