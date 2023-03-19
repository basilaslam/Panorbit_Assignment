/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import { ApiResponse, UserModel} from '../types';
import User from '../components/user/user';



function Home() {
	const [users, setUsers] = useState<UserModel[]>([]);

	
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
	
	
	
	return (
		<div className='bg-primary-blue absolute top-0 right-0 left-0 bottom-0 h-full w-full m-0 flex'>
			<div className="users_list h-4/5 rounded-3xl w-4/5 max-w-[735px] bg-white m-auto">
				<div className="top text-center bg-slate-200 pt-5 pb-1 br-t-inherit">
					<h1 className='m-6 md:m-10 text-2xl font-semibold text-gray-600'>Select an account</h1>
				</div>
				<div className="bottom h-4/5 overflow-y-scroll">
				{users.map((user) => <User data={user} key={user.id} />)}
				</div>
			</div>
		</div>
	);
}

export default Home;