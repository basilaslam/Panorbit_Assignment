import React, { useEffect, useRef, useState } from 'react'
import { ApiResponse, UserModel } from '../../types';
import {BsDot, BsChatSquareText} from 'react-icons/all'
import User from '../user/user';

function Messaging() {
	const [users, setUsers] = useState<UserModel[]>([]);
	const [openedMessages, setOpenedMessages] = useState<UserModel[]>([]);
	const list = useRef<HTMLDivElement>(null);
	const messageUser = (user:UserModel) => {
	  if (window.innerWidth < 700) {
		// Your logic here
		list.current?.classList.add('hidden')

	  }

	  setOpenedMessages([...openedMessages, user])
	};
  
	useEffect(() => {
	  const fetchUsers = async () => {
		const response = await fetch('https://panorbit.in/api/users.json');
		const data: ApiResponse = await response.json();
		return data.users;
	  };
  
	  fetchUsers()
		.then((usersData) => {
		  setUsers(usersData);
		})
		.catch((error) => {
		  console.error(error);
		});
	}, []);
  
	return (
	  <div
		ref={list}
		className="fixed h-2/4 w-2/4 md:w-1/4 border-primary-blue border-solid bottom-3 right-0 bg-white overflow-scroll text-sm z-50"
	  >

		<div className="top bg-primary-blue flex text-xl text-white py-3 gap-4 fixed w-full">
		<div className='ml-2 my-auto'>
		<BsChatSquareText/>
		</div>
		<h2>Chats</h2>
		</div>
		<div className="users">
		{users.map((user) => (
		  <div className="flex justify-between px-5 my-3 cursor-pointer">
			<img
			  className="w-10 h-10 rounded-full"
			  src={user.profilepicture}
			  alt="profile pic "
			  onClick={()=>messageUser(user)}
			/>
			<p className="my-auto text-black">{user.name}</p>
			<BsDot color='green' height={10}/>
		  </div>
		))}
		</div>
	  </div>
	);
  }
  
  export default Messaging;
  
