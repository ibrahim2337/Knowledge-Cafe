import React from "react";
import BlogCard from "./BlogCard";

const Blogs = ({
  blogs,
  readingTime,
  setReadingTime,
  bookmarkItems,
  setBookmarkItems,
}) => {
  return (
    <div className="space-y-10">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          readingTime={readingTime}
          setReadingTime={setReadingTime}
          bookmarkItems={bookmarkItems}
          setBookmarkItems={setBookmarkItems}
        />
      ))}
    </div>
  );
};

export default Blogs;
