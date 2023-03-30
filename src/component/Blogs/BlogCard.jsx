import React from "react";

const BlogCard = ({ blog }) => {
  const {
    id,
    title,
    thumbnail,
    authorImg,
    authorName,
    publishedDate,
    readingTime,
    tags,
  } = blog;
  console.log(blog);
  return (
    <div>
      <div className="overflow-hidden bg-white rounded-lg shadow-md pb-5">
        <img
          className="object-cover w-full h-auto"
          src={thumbnail}
          alt="Article"
        />

        <div className="px-6">
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="object-cover h-10 rounded-full"
                  src={authorImg}
                  alt="Avatar"
                />
                <div>
                  <p className="mx-2 font-semibold text-gray-800 ">
                    {authorName}
                  </p>
                  <p className="mx-2 text-xs text-gray-800 ">
                    {publishedDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-800">0{readingTime} min read</p>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              <h3 className="block text-3xl font-semibold text-gray-800 mt-5">
                {title}
              </h3>
              <p className="text-gray-600">{tags}</p>
              <button className="text-sm text-blue-900 capitalize rounded-sm hover:underline">
                Mark as read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
