import React from 'react'
import { useUserStore } from '../../zustand-store/zustand';
import Root from '../Map/Map';
import { geo } from '../../types';

function PersonalDetails() {
	const { user } = useUserStore();
	let address = user&&Object.entries(user?.address).filter(([key, value]) => key != 'address')
	address?.pop()	
  return (
	<div className='md:flex w-full'>
	<div className='left w-[106%]'>
		<img className='rounded-full w-52 mx-auto' src={user?.profilepicture} alt="" />
		<h1 className='font-2xl text-grayed  text-center my-3 text-xl font-bold'>{user?.name}</h1>
		<table className='mx-auto'>

		<tbody className="text-center detailes" >
		<tr>
            <td className=' py-2 text-right user_details text-xl '><h1><span>Username : </span></h1></td>
            <td className=' py-2 text-left  text-xl font-bold'>{user?.username}</td>
          </tr>

		  <tr>
            <td className=' py-2 text-right user_details text-xl '><h1><span>e-mail : </span></h1></td>
            <td className=' py-2 text-left  text-xl font-bold '>{user?.email}</td>
          </tr>

		  <tr>
            <td className=' py-2 text-right user_details text-xl '><h1><span>Phone : </span></h1></td>
            <td className=' py-2 text-left  text-xl font-bold'>{user?.phone}</td>
          </tr>

		  <tr>
            <td className=' py-2 text-right user_details text-xl '><h1><span>Website : </span></h1></td>
            <td className=' py-2 text-left  text-xl font-bold'>{user?.website}</td>
          </tr>

	
		</tbody>
		</table>
		<hr className='my-3 w-3/4 mx-auto'/>
		<div className="company">
			<h1 className='text-grray text-xl text-center'>Company</h1>

			<table className='mx-auto'>
      <tbody className='text-center'>
        {user&&Object.entries(user?.company).map(([key, value]) => (
          <tr key={key}>
            <td className=' py-2 text-right user_details text-xl'><h1><span>{key} : </span></h1></td>
            <td className=' py-2 text-left  text-xl font-bold'>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>

		</div>
	</div>

	<div className="right w-auto border-l border-l-gray-400 pl-20">
	<div className="address">
			<h1 className='text-grray text-xl '>Address: </h1>
			 
			<table className=''>
      <tbody className='text-center'>
	  {address&&address.map(([key, value]) => (
          <tr key={key}>
            <td className=' py-2 text-right user_details text-xl '><h1><span>{key} : </span></h1></td>
            <td className=' py-2 text-left  text-xl font-bold'> {value}</td>
          </tr>
        ))}
      </tbody>
    </table>
		</div>

<div className="map">
{user?.address.geo&&<Root lat={user?.address.geo.lat} lng={user?.address.geo.lng} width={700} height={400} />}

</div>
	</div>

</div>
  )
}

export default PersonalDetails