import React from "react";
import BlogCard from "./BlogCard";

const Blogs = ({blogs}) => {
  return (
    <div className="space-y-10">
      {
        blogs.map(blog => <BlogCard key={blog.id} blog={blog}/>)
      }
    </div>
  );
};

export default Blogs;
