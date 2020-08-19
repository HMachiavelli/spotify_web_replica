import React from 'react';

import { FiPlay } from 'react-icons/fi';

import './styles.css';

function MusicList() {
    return (
        <div className="musicList">
            <div className="title">
                <h2>Atalhos</h2>
                <button>VER TUDO</button>
            </div>

            <div className="list">
                <ul>
                    <li>
                        <img src="https://imagestore.ffm.to/link/02e863c9887e3f091a27bda9fb90af7b.jpg" alt="UP! Comunidade Nin-Jitsu"/>

                        <p className="musicTitle">Up (Aproveite ...</p>
                        <p className="author">De Henrique Machiavelli</p>

                        <div className="play"><FiPlay /></div>
                    </li>
                    <li>
                        <img src="https://imagestore.ffm.to/link/02e863c9887e3f091a27bda9fb90af7b.jpg" alt="UP! Comunidade Nin-Jitsu"/>

                        <p className="musicTitle">Up (Aproveite ...</p>
                        <p className="author">De Henrique Machiavelli</p>

                        <div className="play"><FiPlay /></div>
                    </li>
                    <li>
                        <img src="https://imagestore.ffm.to/link/02e863c9887e3f091a27bda9fb90af7b.jpg" alt="UP! Comunidade Nin-Jitsu"/>

                        <p className="musicTitle">Up (Aproveite ...</p>
                        <p className="author">De Henrique Machiavelli</p>

                        <div className="play"><FiPlay /></div>
                    </li>
                    <li>
                        <img src="https://imagestore.ffm.to/link/02e863c9887e3f091a27bda9fb90af7b.jpg" alt="UP! Comunidade Nin-Jitsu"/>

                        <p className="musicTitle">Up (Aproveite ...</p>
                        <p className="author">De Henrique Machiavelli</p>

                        <div className="play"><FiPlay /></div>
                    </li>
                    <li>
                        <img src="https://imagestore.ffm.to/link/02e863c9887e3f091a27bda9fb90af7b.jpg" alt="UP! Comunidade Nin-Jitsu"/>

                        <p className="musicTitle">Up (Aproveite ...</p>
                        <p className="author">De Henrique Machiavelli</p>

                        <div className="play"><FiPlay /></div>
                    </li>
                    <li>
                        <img src="https://imagestore.ffm.to/link/02e863c9887e3f091a27bda9fb90af7b.jpg" alt="UP! Comunidade Nin-Jitsu"/>

                        <p className="musicTitle">Up (Aproveite ...</p>
                        <p className="author">De Henrique Machiavelli</p>

                        <div className="play"><FiPlay /></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MusicList;