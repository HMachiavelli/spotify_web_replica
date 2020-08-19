import React from 'react';

import './styles.css';

interface MenuItemProps {
    active: boolean,
    icon: any,
    onClick?: any
    title: string,
}

const Item: React.FC<MenuItemProps> = (props) => {
    return (
        <li className={props.active ? "active" : ""}><button onClick={props.onClick} type="button">{props.icon} <span>{props.title}</span></button></li>
    );
}

export default Item;