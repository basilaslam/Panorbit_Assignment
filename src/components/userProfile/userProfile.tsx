import React from 'react'
import { UserModel } from '../../types'
import Logout from '../Logout/Logout'
import { useModalStore } from '../../zustand-store/zustand'


function userProfile({user}:{user:UserModel|null}) {
	// onProfileClick: ()=>void

	const {modal, setModal } = useModalStore()
	const handleClick = () =>{
		setModal(!modal)
		console.log('clicked')
	}
  return (
	<div>
	<div className="top w-full flex justify-between my-3 md:mt-36">
	<h1 className="my-auto font-semibold mx-5 text-2xl">Profile</h1>
	<div className="UserProfile">
	  {user && (
		<div className="flex gap-2 mr-5 md:mr-16 font-semibold text-grayed cursor-pointer md:text-xl align-middle" onClick={handleClick}>
		  <img className="w-10 h-10 rounded-full" src={user.profilepicture} alt="profile pic " />
		  <p className="my-auto hidden md:block">{user.name}</p>
		</div>
	  )}
	</div>
  </div>
  </div>

  )
}

export default userProfile