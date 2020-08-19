import React from 'react';

import Header from './Header';
import List from './List';

import { FiDownload } from 'react-icons/fi';

import './styles.css';

function Playlists() {
    return (
        <div className="playlists">
            <p>PLAYLISTS</p>

            <Header />
            <List />

            <button className="download" type="button">
                <FiDownload size="1.2em" />
                <span>Instalar aplicativo</span>
            </button>
        </div>
    )
}

export default Playlists;