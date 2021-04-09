import React from 'react'
import * as S from './style';
import Image from '../../../assets/images/profileImg.png';

const Nav = () => {
    return (
        <S.Container>
            <S.MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></S.MessageIcon>
            <S.ProfileImg  src={Image} />
        </S.Container>
    )
}

export default Nav
