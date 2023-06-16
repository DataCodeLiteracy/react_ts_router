import { PostsDetail } from "../routes/post";
import { Link } from "react-router-dom";
import { posts } from "../ts/posts";

interface Props {
  postDetail: PostsDetail;
}

export default function PostsDetailPages({ postDetail }: Props) {
  const currentPostId = postDetail.id;
  const nextPostId = currentPostId + 1;
  const prevPostId = currentPostId - 1;
  const nextPost = posts[nextPostId - 1];
  const prevPost = posts[prevPostId - 1];

  return (
    <div className="m-auto w-11/12 md:w-3/4 xl:w-4/5">
      <img className="rounded-2xl" src={postDetail.imageUrl} alt="" />
      <h1 className="font-bold text-5xl mt-6 ml-3">{postDetail.title}</h1>
      <div className="flex mt-5">
        <img
          className="ml-2 mr-3 w-12 rounded-full"
          src={postDetail.profileImage}
          alt=""
        />
        <div>
          <div>{postDetail.writer}</div>
          <div className="text-gray-400">{postDetail.date}</div>
        </div>
      </div>
      <div className="mt-20">
        <p>{postDetail.contents}</p>
      </div>
      <div className="mt-20 border-t-2">
        {prevPostId > 0 && (
          <Link
            className="flex items-center text-center mt-10 mr-10"
            to={`/post/${prevPostId}`}
          >
            <img
              className="w-32 h-32 m-auto rounded-lg"
              src={prevPost.imageUrl}
              alt=""
            />
            <h1 className="text-2xl font-bold w-2/3">{prevPost.title}</h1>
          </Link>
        )}
        {nextPostId <= posts.length && (
          <Link
            className="flex items-center text-center mt-10 mr-10"
            to={`/post/${nextPostId}`}
          >
            <img
              className="w-32 h-32 m-auto rounded-lg"
              src={nextPost.imageUrl}
              alt=""
            />
            <h1 className="text-2xl font-bold w-2/3">{nextPost.title}</h1>
          </Link>
        )}
      </div>
    </div>
  );
}
