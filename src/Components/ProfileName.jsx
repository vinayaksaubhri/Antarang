import React from 'react';

import {
  Profile_container,
  Profile_name_black,
  Profile_Text_container,
  Ration_number_black,
  Profile_img,
  Profile_name_white,
  Ration_number_white,
} from '../../style/dashboard';

const ProfileName = ({ color }) => {
  if (color === 'black') {
    return (
      <Profile_container>
        <Profile_img source={require('../../assets/Images/Profile_image.png')} />
        <Profile_Text_container>
          <Profile_name_black>Laxmi Rathod</Profile_name_black>
          <Ration_number_black>4590547888</Ration_number_black>
        </Profile_Text_container>
      </Profile_container>
    );
  } else {
    return (
      <Profile_container>
        <Profile_img source={require('../../assets/Images/Profile_image.png')} />
        <Profile_Text_container>
          <Profile_name_white>Laxmi Rathod</Profile_name_white>
          <Ration_number_white>4590547888</Ration_number_white>
        </Profile_Text_container>
      </Profile_container>
    );
  }
};

export default ProfileName;
