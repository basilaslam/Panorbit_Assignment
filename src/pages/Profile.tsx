import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { useUserStore, useModalStore } from "../zustand-store/zustand";
import { UserModel } from "../types";
import Main from "../components/Main/Main";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Logout from "../components/Logout/Logout";
import { useNavigate } from "react-router-dom";
import Messaging from "../components/Messaging/Messaging";

function Profile() {
	const [main, setMain] = useState('Profile')
	const [userData, setUserData] = useState<UserModel>()
	const { user } = useUserStore();
	const { modal } = useModalStore();

  
	useEffect(() => {
	  if(user) setUserData(user)
	
	}, [])

	console.log(main)
  
	return (
		
	  <div className="flex justify-start">
			{modal&&<Logout/>}
			<Messaging/>
		<div className="left">
		  <Sidebar onClick={setMain}/>
		</div>
		<div className="right w-full">
		{main !== 'Profile'? <ComingSoon user={user}/> : <Main/>}

		</div>
	  </div>
	)
  }
  
  export default Profile;
  