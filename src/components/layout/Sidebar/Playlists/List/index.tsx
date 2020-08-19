import React, { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

function List() {
    const [items, setItems] = useState([] as any);

    useEffect(() => {
        const list = [ 'Eletro', 'Bass', 'This is RHCP', 'RHCP - All Songs', 'Skank', 'H&E', 'Praia', 'TOP', 'MUSE', 'Vessel + blurry' ];
        
        setItems(list);
    }, []);

    return (
        <Scrollbars className="list" renderThumbVertical={props => <div {...props} style={{backgroundColor: "#282828"}}/>} style={{height: '15rem'}}>
            <ul>
                { items.map((item: string) => {
                    return <li><button type="button">{item}</button></li>
                })}
            </ul>
        </Scrollbars>
    );
}

export default List;