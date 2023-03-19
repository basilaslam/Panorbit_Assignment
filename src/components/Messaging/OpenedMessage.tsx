import { UserModel } from "../../types"
import {AiOutlineRight} from "react-icons/all"
const MessagBox = ({user}:{user:UserModel}) =>{


	return(
		<div className="messageBox fixed border-primary-blue">
			<div className="top flex justify-start">
			<img className=" w-5 bg-primary-blue" src={user.profilepicture} alt="" />
			<p>{user.name}</p>
			</div>
			<div className="messages h-44 p-1">
				
			</div>
			<div className="input">
				<div className="flex justify-between">
				<input type="text" name="" id="" />
				<AiOutlineRight/>
				</div>
			</div>
		</div>
	)
  }