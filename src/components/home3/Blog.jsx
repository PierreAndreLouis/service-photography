import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);


  return (

    <div>
      {posts && posts.length > 0 && (
        < div className="dark:bg-gray-900 dark:text-gray-100 bg-white" >


          <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-between mb-14">
              <h2 className="mr-10 text-3xl font-semibold text-sky-500 dark:text-gray-100">
                Découvrez Nos Derniers Articles
              </h2>
              <a href="#"
                className="block pb-1 mt-2 text-base text-sky-600 dark:text-sky-400 uppercase border-b border-transparent hover:border-sky-600 dark:hover:border-sky-400">
                - Lire Plus -
              </a>
            </div>

            <div className="flex flex-wrap -mx-4">


              {posts.slice(0, 3).map((post) => (
                <Link to={`/post/${post.slug}`} key={post._id} className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover object-center w-full h-52 border rounded-t-xl border-gray-400 dark:border-gray-600 border-b-0"
                  />
                  <div className="flex flex-col rounded-b-xl px-4 py-6 bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-600">
                    <p href="#"
                      className="inline-block mb-3 text-xs capitalize border-b-2 border-sky-600 dark:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400">
                      {post.category}
                    </p>
                    <h3 href="#"
                      className=" line-clamp-2 mb-2 text-xl font-black leading-tight hover:underline hover:text-sky-600 dark:hover:text-sky-400">
                      {post.title}
                    </h3>
                    <style>
                      {`
                                                .post_content a {
                                                // color: #494949;
                                                background: none !important;
                                                }
                                            `}
                    </style>
                    <p
                      className='post_content text-md line-clamp-3'
                      dangerouslySetInnerHTML={{ __html: post && post.content }}
                    >
                    </p>
                    <a href="#"
                      className="inline-block mt-4 pb-1 text-base font-black text-sky-600 dark:text-sky-400 uppercase border-b border-transparent hover:border-sky-600 dark:hover:border-sky-400">
                      Lire Plus -
                    </a>
                  </div>
                </Link>
              ))}














            </div>
          </section >
        </div >
      )}

    </div >
  );
}
