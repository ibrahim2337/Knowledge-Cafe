import Navbar from "./component/Navber/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <hr />
      <main className="grid grid-cols-12">
        <div className="col-span-9"></div>

        <div className="col-span-3"></div>
      </main>
    </div>
  );
}

export default App;
