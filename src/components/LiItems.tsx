import { Posts } from '../routes/post'

export default function LiItems(posts: Posts) {
  return (
    <>
      <img className="group-hover:-translate-y-4 transition duration-500 ease-in-out w-full rounded-xl md:w-56 h-56" src={posts.imageUrl} alt="" />
      <div className="m-auto ml-10 min-w-sm w-120">
        <h1 className="group-hover:text-blue-500 font-bold text-4xl mt-10 md:-mt-6">{posts.title}</h1>
        <p className="mt-6 text-base">{posts.description}</p>
        <div className="mt-4 text-sm">{posts.date}</div>
      </div>
    </>
  )
}
