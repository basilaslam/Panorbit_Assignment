import React from 'react'
import UserProfile from '../userProfile/userProfile'
import { UserModel } from '../../types'

function ComingSoon({user}:{user: UserModel | null}) {
  return (
	<>
		<UserProfile user={user}/>

	    <div className='flex flex-col justify-center items-center mt-52'>
    <h1 className='text-center text-9xl font-bold text-fade-gray'>Coming Soon</h1>
    </div>
	</>

  )
}

export default ComingSoon






