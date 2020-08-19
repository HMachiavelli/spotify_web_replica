import React, { useState, useEffect } from 'react';
import Item from './Item';

import { FiHome, FiSearch, FiServer } from 'react-icons/fi';

import './styles.css';

interface MenuItemProps {
    active: boolean,
    icon: any,
    title: string
}

function MainMenu() {
    const [ menuItems, setMenuItems ] = useState([] as any);

    useEffect(() => {
        const itemsTmp: MenuItemProps[] = [
            {active: true, title: "Início", icon: <FiHome size="1.7em" />},
            {active: false, title: "Buscar", icon: <FiSearch size="1.7em" />},
            {active: false, title: "Sua Biblioteca", icon: <FiServer size="1.7em" />}
        ];

        setMenuItems(itemsTmp);
    }, []);

    const click = (clickedIndex: number) => {
        const itemsTmp = menuItems.map((item: MenuItemProps, index: number) => {
            return { ...item, active: (clickedIndex === index)};
        });

        setMenuItems(itemsTmp);
    }

    return (
        <div className="mainMenu">
            <ul>
                { menuItems.map((item: MenuItemProps, index: number) => {
                    return <Item key={index} onClick={() => click(index)} active={item.active} title={item.title} icon={item.icon} />
                }) }
            </ul>
        </div>
    );
}

export default MainMenu;