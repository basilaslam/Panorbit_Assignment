import React from 'react'

function Details({data}:any) {
  return (
	data&&Object.entries(data).map(([key, val]) => 
                    <h1 className='user_details' key={key}> <span>{key}:</span> {val?val:''}</h1>
                )
  )
}

export default Details