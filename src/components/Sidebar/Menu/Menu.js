import React from 'react';
import * as S from './style';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
    return (
        <S.Container>
            <MenuItem title="Home" icon="home" />
            <MenuItem title="Deposits" icon="file-multiple" active/>
            <MenuItem title="Offers" icon="gift" />
            <MenuItem title="Payments" icon="bank" />
            <MenuItem title="Settings" icon="cog" />
        </S.Container>
    )
}

export default Menu
