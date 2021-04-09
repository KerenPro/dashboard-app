import React from 'react';
import {Container} from './sidebarStyle'
import Profile from './Profile';
import Menu from './Menu/Menu';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

const Sidebar = () => {
    return (
        <Container>
            <Profile />
            <Menu />
            <ToggleSwitch />
        </Container>
    )
}

export default Sidebar