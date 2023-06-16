import { Link } from "react-router-dom";
import LiItems from "../components/LiItems";
import { posts } from "../ts/posts";

export default function home() {
  return (
    <div className="flex">
      <div className="flex-col p-8 mt-10 m-auto w-3/4 md:w-4/5 max-w-1024px">
        <h1 className="font-bold text-4xl">개발</h1>
        <ul className="mt-20">
          {posts.map((post) => (
            <li className="group mb-20" key={post.id}>
              <Link
                className="flex flex-col md:flex-row "
                to={`/post/${post.id}`}
              >
                <LiItems
                  id={post.id}
                  imageUrl={post.imageUrl}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
