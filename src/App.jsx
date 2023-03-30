import { useEffect, useState } from "react";
import Blogs from "./component/Blogs/Blogs";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=> {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])

  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <hr />
      <main className="grid grid-cols-12 gap-5 py-5">
        <div className="col-span-9">
          <Blogs blogs={blogs}/>
        </div>
        <div className="col-span-3">
          Sidebar
        </div>
      </main>
    </div>
  );
}

export default App;
