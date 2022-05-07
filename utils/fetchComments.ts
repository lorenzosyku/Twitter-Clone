import { Comment } from '../typings'

export const fetchComments = async (tweetId: string) => {
  console.log(tweetId)
  const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

  const comments: Comment[] = await res.json()
  console.log(comments)

  return comments
}
