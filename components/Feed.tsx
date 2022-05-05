import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

function Feed() {
  return (
    <div className="col-span-7 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold p-5 pb-0 text-xl">Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer mr-5 mt-5 text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
      </div>
    </div>
  )
}

export default Feed
