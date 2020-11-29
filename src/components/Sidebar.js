import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from '../StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return <div className='sidebar'>
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
        <SidebarRow Icon={FlagIcon} title='Pages' />
        <SidebarRow Icon={GroupRoundedIcon} title='Friends' />
        <SidebarRow Icon={FavoriteRoundedIcon} title='Fundraisers' />
        <SidebarRow Icon={ExpandMoreRoundedIcon} title='See More' />
    </div>
}

export default Sidebar;

