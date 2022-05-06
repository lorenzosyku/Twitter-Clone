import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'

function TweetBox() {
  const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://links.papareact.com/gll"
        className="mt-4 h-14 w-14 rounded-full object-cover"
      />
      <div className="flex flex-1 items-center pl-2">
        <form action="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="What's happening"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
