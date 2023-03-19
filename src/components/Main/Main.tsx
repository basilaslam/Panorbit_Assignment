import React from 'react';
import User from '../user/user';
import { useUserStore } from '../../zustand-store/zustand';
import PersonalDetails from '../PersonalDetails/personalDetails';
import ComingSoon from '../ComingSoon/ComingSoon';
import UserProfile from '../userProfile/userProfile';

function Main() {
  const { user } = useUserStore();

  return (
    <div>
<UserProfile user={user}/>

     <hr className="my-3" />

<div className="bottom md:flex w-full">
  <div className="left">
    <PersonalDetails />
  </div>
  <div className="right">
</div>
</div>


    </div>
  );
}

export default Main;
