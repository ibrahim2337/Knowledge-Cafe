import Blogs from "./component/Blogs/Blogs";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <hr />
      <main className="grid grid-cols-12 gap-5 py-5">
        <div className="col-span-9">
          <Blogs />
        </div>
        <div className="col-span-3"></div>
      </main>
    </div>
  );
}

export default App;
