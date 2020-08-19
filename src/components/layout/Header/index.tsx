import React from 'react';

import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';

import './styles.css';

function Header() {
    return (
        <div className="contentHeader">
            <div className="buttonContainer">
                <button type="button"><FiChevronLeft size="1.7em" /></button>
                <button type="button"><FiChevronRight size="1.7em" /></button>
            </div>
            <button className="user">
                <div className="userAvatar">
                    <img src="https://avatars3.githubusercontent.com/u/12431251?s=460&u=a33e93ce4e50a09a898dd358c56f13b5e3731869&v=4" alt="User Avatar"/>
                </div>

                <p>Henrique Mac...</p>
                <FiChevronDown size="1.3em" />
            </button>
        </div>
    )
}

export default Header;