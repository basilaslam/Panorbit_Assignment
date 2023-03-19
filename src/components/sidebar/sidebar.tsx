import React, { useEffect, useState } from 'react'
import { icons } from 'react-icons'
import { FaUserAlt, FaRegFileAlt, SiTodoist, RiGalleryLine, AiOutlineRight } from 'react-icons/all'
import { IconBaseProps, IconType } from 'react-icons/lib'
import '../../styles/curvedSelector.css'
const Sidebar = ({onClick}:{onClick:(el:string)=> void}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const setActived = (index: number) => {
	  setActiveIndex(index);
	};
	console.log(activeIndex)

		const icons = [	<FaUserAlt/>, <FaRegFileAlt/>, <RiGalleryLine />, <SiTodoist/>]
	const sectionNames = ['Profile', 'Posts', 'Gallery', 'ToDo']
  return (
		<div className="flex h-[100vh] align-middle md:pl-28">
	<nav className='main fixed md:static ml-2 w-12 md:w-96 md:h-[80vh] md:m-10 top-1/4 md:ml-0 md:my-auto md:gap-0 md:justify-evenly md:rounded-2xl text-black  py-10 bg-gradient-to-b from-primary-blue to-secondery-blue rounded flex' >
		<ul className="nav_links my-auto w-full h-fit md:w-full text-grayed">
		{sectionNames.map((section, index) => (
        <React.Fragment key={index}>

          <SideBarItems Icon={icons[index]} section={section} index={index} name={sectionNames[index]} activeIndex={activeIndex} setActived={setActived} onClick={onClick}/>
          {index !== sectionNames.length - 1 && <Breaker />}
        </React.Fragment>
      ))}
		</ul>
	</nav>
	
	</div>
  )
}

export default Sidebar

export const SideBarItems = ({Icon, name, index, activeIndex,section, setActived, onClick}:{Icon: React.ReactNode,section:string, name: string,onClick:(el:string)=> void, index: number, activeIndex: number, setActived: (index: number) => void}) =>{
	const handleclick = () =>{
		setActived(index)
		onClick(section)
	}
	return(
<li className='sideBarItem mx-auto text-left cursor-pointer relative flex my-5' onClick={handleclick}>
	{activeIndex === index&&<div className={`hidden  bg-white w-9 h-9 rounded-l-full md:absolute md:right-0 sideBar-b md:flex md:flex-col md:justify-center `}>
		<span><AiOutlineRight/></span>
	</div>}
  <div className={`block icon text-2xl md:hidden mx-auto ${activeIndex === index && 'text-white font-semibold'}`}>
    {Icon}
  </div>
  <h1 className={`hidden md:block text-xl ml-8 ${activeIndex === index && 'text-white font-semibold'}`}>{name}</h1>
</li>
	)
}


export const Breaker = () =>{

	return (<hr className="hidden md:block my-2 border-gray-300 w-3/4 mx-auto ml-8" />)
}