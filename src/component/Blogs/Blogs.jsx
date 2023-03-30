import React from "react";

const Blogs = () => {
  return (
    <div>
      <div class="overflow-hidden bg-white rounded-lg shadow-md pb-5">
        <img
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div className="px-6">
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <div>
                  <p class="mx-2 font-semibold text-gray-800 ">Jone Doe</p>
                  <p class="mx-2 text-xs text-gray-800 ">21 SEP 2015</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-800">05 min read</p>{" "}
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
              <h3 class="block text-3xl font-semibold text-gray-800 mt-5">
                I Built A Successful Blog In One Year
              </h3>
              <p className="text-gray-600">#tag #tag</p>
              <button class="text-sm text-blue-900 capitalize rounded-sm hover:underline">
                Mark as read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
