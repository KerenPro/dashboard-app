import React from 'react';
import {Container} from './style';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Home" icon="" />
            <MenuItem title="Deposits" icon="" active/>
            <MenuItem title="Offers" icon="" />
            <MenuItem title="Payments" icon="" />
            <MenuItem title="Settings" icon="" />
        </Container>
    )
}

export default Menu
