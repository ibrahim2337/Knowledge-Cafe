import { useEffect, useState } from "react";
import Blogs from "./component/Blogs/Blogs";
import FAQ from "./component/FAQ/FAQ";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [bookmarkItems, setBookmarkItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto px-5">
      <header>
        <Navbar />
      </header>
      <hr />
      <main className="grid grid-cols-12 gap-5 py-5">
        <div className="col-span-12 lg:col-span-9">
          <Blogs
            blogs={blogs}
            readingTime={readingTime}
            setReadingTime={setReadingTime}
            bookmarkItems={bookmarkItems}
            setBookmarkItems={setBookmarkItems}
          />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <Sidebar readingTime={readingTime}  bookmarkItems={bookmarkItems}/>
        </div>
      </main>
      <footer>
        <FAQ />
      </footer>
    </div>
  );
}

export default App;
