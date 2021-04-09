import React from 'react';
import * as S from './sidebarStyle'
import Profile from './Profile';
import Menu from './Menu/Menu';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

const Sidebar = () => {
    return (
        <S.Container>
            <Profile />
            <Menu />
            <ToggleSwitch />
        </S.Container>
    )
}

export default Sidebar