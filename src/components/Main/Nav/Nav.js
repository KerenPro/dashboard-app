import React from 'react'
import {Container, ProfileImg, MessageIcon} from './style';
import Image from '../../../assets/images/profileImg.png';

const Nav = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
            <ProfileImg  src={Image} />
        </Container>
    )
}

export default Nav
