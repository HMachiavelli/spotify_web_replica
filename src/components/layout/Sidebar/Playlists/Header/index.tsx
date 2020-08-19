import React from 'react';

import Item from './Item';

import { FiHeart, FiPlus } from 'react-icons/fi';

import './styles.css';

function Header() {
    const items = [
        {title: "Criar playlist", icon: <FiPlus size="2rem" />},
        {title: "Músicas Curtidas", icon: <FiHeart size="1.3em" />}
    ];

    return (
        <ul>
            { items.map(item => {
                return <Item title={item.title} icon={item.icon} />
            }) }                
        </ul>
    );
}

export default Header;