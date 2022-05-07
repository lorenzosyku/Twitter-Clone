import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from './TweetComponent'

interface Props {
  tweets: Tweet[]
}

function Feed({tweets}: Props) {
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="font-bold p-5 pb-0 text-xl">Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer mr-5 mt-5 text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
      </div>
      <div className="">
        <TweetBox />
      </div>

      <div className="">
        {tweets.map(tweet =>
          <TweetComponent key={tweet._id} tweet={tweet}/>
        )}
      </div>
    </div>
  )
}

export default Feed
