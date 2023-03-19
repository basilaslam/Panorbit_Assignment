import React from 'react';
import { UserModel } from '../../types';
import { useUserStore } from '../../zustand-store/zustand';
import { useNavigate } from 'react-router-dom';

function user({data}:{data:UserModel}) {
	const { setUser} = useUserStore();
	const navigate = useNavigate();

	
const handleClick = () =>{
	setUser(data)
	navigate('/profile') 
}
	return (
		<>
		<div className='flex gap-3 p-4 align-middle font-semibold md:text-xl text-gray-600 px-14 cursor-pointer' onClick={handleClick}>
			<img className='w-10 h-10 rounded-full' src={data.profilepicture} alt="profile pic " />
			<p className='my-auto'>{data.name}</p>
			</div>
			<hr className=' w-5/6 mx-auto text-gray-600'/>
			</>
	);
}

export default user;