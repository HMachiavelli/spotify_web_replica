import React from 'react';

import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import MusicList from '../../components/layout/MusicList';

import { FiAirplay, FiRotateCcw, FiRotateCw, FiSkipBack, FiSkipForward, FiPlayCircle, FiList, FiMicOff, FiMonitor, FiVolume2 } from 'react-icons/fi';

import './styles.css';

function Player() {
    return (
        <div className="main">
            <div className="panel">
                <Sidebar />

                <div className="content">
                    <Header />

                    <div className="contentMain">
                        <MusicList />
                        <MusicList />
                        <MusicList />
                        <MusicList />
                    </div>
                </div>
            </div>

            <div className="player">
                <div className="listening">
                    <img src="https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/20/ab/be/20abbe1a-d077-edbe-9439-fba8086a265c/mza_6945125406993108930.jpg/1200x1200bb.jpg" alt="Caixa Preta"/>
                    <div className="about">
                        <p className="songTitle">Ep. 57 - Assuntos variados e o 3º integran...</p>
                        <p className="songAuthor">Caixa Preta</p>
                    </div>
                    <button><FiAirplay /></button>
                </div>

                <div className="controls">
                    <div className="controlsUp">
                        <button><FiRotateCcw size="1em" /></button>
                        <button><FiSkipBack size="1.1em" /></button>
                        <button className="btnPlay"><FiPlayCircle size="2.1em" /></button>
                        <button><FiSkipForward size="1.1em" /></button>
                        <button><FiRotateCw size="1em" /></button>
                    </div>
                    <div className="timeline">
                        <span className="initial">0:00</span>
                        <div className="timebar"></div>
                        <span className="final">64:35</span>
                    </div>
                </div>

                <div className="options">
                    <button><FiList /></button>
                    <button><FiMonitor /></button>
                    <div className="volume">
                        <button><FiVolume2 /></button>
                        <div className="volumebar">
                            <div className="volumeControl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;