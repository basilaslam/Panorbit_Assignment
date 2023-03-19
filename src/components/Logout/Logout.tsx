import React, { useEffect, useState } from 'react'
import { ApiResponse, UserModel } from '../../types';
import User from '../user/user';
import { useUserStore, useModalStore } from '../../zustand-store/zustand';
import { useNavigate } from 'react-router-dom';

function Logout() {
	const [users, setUsers] = useState<UserModel[]>([]);
	const { user, clearUser} = useUserStore();
	const { modal,resetModal } = useModalStore()
	const navigate = useNavigate();

	console.log(modal,'line 11 logout')


	useEffect(() => {
		const fetchUsers = async () => {
		  const response = await fetch('https://panorbit.in/api/users.json');
		  const data: ApiResponse = await response.json();
		  return data.users;
		};
	
		fetchUsers().then((usersData) => {
		  setUsers(usersData);
		}).catch((error) => {
		  console.error(error);
		});
	  }, []);

	  const handleSignOut = () =>{
		clearUser()
		resetModal()
		navigate('/')
	  }

  return (
	<div className={`fixed w-[400px] right-10 top-52 rounded-xl z-50 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
		<div className="top mx-auto my-5">
			<img className='rounded-full w-36 mx-auto' src={user?.profilepicture} alt="" />
			<h1 className='font-2xl text-black  text-center my-3 text-xl '>{user?.name}</h1>
			<h1 className='font-2xl text-grayed  text-center my-3 text-xl '>{user?.email}</h1>
		</div>
		<hr className=' w-5/6 mx-auto text-gray-600'/>

		<div className="bottom">
		<div className="users h-4/5">
				{users.filter((el) => el.name !== user?.name).slice(0,2).map((user) => <User data={user} key={user.id} />)}
		</div>
		<div className="logout flex justify-center"> 	
			<button type='button' className='bg-btn-danger mx-auto my-10 text-xl font-semibold text-white px-8 py-4 rounded-full' onClick={handleSignOut}>Sign Out</button>
		</div>
		</div>
	</div>
  )
}

export default Logout