"use client"
import React, { useState } from 'react'

const shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState(false);    

  return (
    <div className='mx-auto max-w-lg bg-gray-100 my-16 p-8 rounded-lg flex flex-col gap-4 items-center'>
      <h1 className='text-2xl font-bold'>Generate Short URL</h1>
      <div className='flex flex-col gap-2'>
        <input type="text" 
        value={url}
        placeholder='Enter your URL here' 
        className='border-2 border-gray-300 p-2 rounded-md w-96 ml-4 focus:outline-gray-500' 
        onChange={e => {setUrl(e.target.value)}}/>

        <input type="text" 
        value={shortUrl}
        placeholder='Enter your preferred short URL text here' 
        className='border-2 border-gray-300 p-2 rounded-md w-96 ml-4 focus:outline-gray-500'
        onChange={e => {setShortUrl(e.target.value)}}/>

        <button className='bg-gray-800 text-white p-2 rounded-md ml-4 w-96 cursor-pointer'>Generate</button>
      </div>

    </div>
  )
}

export default shorten
