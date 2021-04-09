import React from 'react';
import {Container} from './style';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Home" icon="home" />
            <MenuItem title="Deposits" icon="file-multiple" active/>
            <MenuItem title="Offers" icon="gift" />
            <MenuItem title="Payments" icon="bank" />
            <MenuItem title="Settings" icon="cog" />
        </Container>
    )
}

export default Menu
