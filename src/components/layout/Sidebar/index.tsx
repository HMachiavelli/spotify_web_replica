import React from 'react';

import logo from '../../../assets/images/logo.png';

import MainMenu from './MainMenu';
import Playlists from './Playlists';

import './styles.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} alt="Spotify" />

            <MainMenu />
            <Playlists />
        </div>
    );
}

export default Sidebar;