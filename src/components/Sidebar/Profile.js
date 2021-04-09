import React from 'react';
import * as S from './profileStyle';
import Image from '../../assets/images/profileImg.png';

const Profile = () => {
    return (
        <div>
            <S.ProfileImg src={Image} />
            <S.ProfileName>Keren Abramson</S.ProfileName>
        </div>
    )
}

export default Profile
