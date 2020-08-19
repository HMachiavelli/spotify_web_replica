import React from 'react';

import './styles.css';

interface PlaylistItemProps {
    icon: any,
    title: string
}

const Item: React.FC<PlaylistItemProps> = (props) => {
    return (
        <li>
            <button type="button">
                <div>
                    {props.icon}
                </div>
                <span>{props.title}</span>
            </button>
        </li>
    );
}

export default Item;