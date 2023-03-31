const FAQ = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 ">
          
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            How Does React Work ?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
            React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            What Is Difference Between Props And State ?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
            Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
           {" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
