import { useParams } from 'react-router-dom'
import PostsDetailPages from '../components/PostsDetailPages'
import { postDetail } from '../ts/posts'

export type Posts = {
  id: number
  imageUrl: string
  title: string
  description: string
  date: string
}

export type PostsDetail = {
  id: number
  imageUrl: string
  title: string
  profileImage: string
  writer: string
  date: string
  contents: string
}

export default function Post() {
  const { id } = useParams<{ id: string }>()
  const filteredPost = postDetail.filter((detail) => detail.id === Number(id))[0]

  return (
    <div className="flex">
      <div className="flex-col p-8 mt-10 m-auto w-3/4 md:w-4/5 max-w-1024px">
        <PostsDetailPages
          key={filteredPost.id}
          postDetail={{
            id: filteredPost.id,
            imageUrl: filteredPost.imageUrl,
            title: filteredPost.title,
            profileImage: filteredPost.profileImage,
            writer: filteredPost.writer,
            date: filteredPost.date,
            contents: filteredPost.contents
          }}
        />
      </div>
    </div>
  )
}
