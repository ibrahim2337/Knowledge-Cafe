import React from "react";
import BookmarkItem from "./BookmarkItem";

const Sidebar = ({ readingTime }) => {
  return (
    <div className="">
      <p className="text-center border-2 border-[#6047EC] text-[#6047EC] py-5 rounded-md bg-[#EFEDFD] font-bold text-xl">
        Spent time on read : {readingTime} min
      </p>
      <div className="bg-[#F3F3F3] mt-5 rounded-md">
        <p className="text-xl font-medium p-5">Bookmarked Blogs : 0</p>
        <div className="p-4 pt-0 space-y-3">
          <BookmarkItem />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
