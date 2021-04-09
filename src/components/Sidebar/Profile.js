import React from 'react';
import {ProfileImg, ProfileName} from './profileStyle';
import Image from '../../assets/images/profileImg.png';

const Profile = () => {
    return (
        <div>
            <ProfileImg src={Image} />
            <ProfileName>Keren Abramson</ProfileName>
        </div>
    )
}

export default Profile
