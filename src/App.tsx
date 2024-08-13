function App() {
  return (
    <div className="bg-gray-800 p-5 font-Inter">
      <div className="container mx-auto">
        <header className="h-max flex flex-col items-center">
          <h1 className="text-gray-300 text-2xl font-semibold">Pricing</h1>
          <p className="text-white text-xl lg:text-4xl mt-2">The right price for you, whoever you are</p>
          <p className="text-gray-400 mt-5 text-sm lg:text-xl max-w-5xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad quam ipsa fugiat quos quidem, unde, neque repellat asperiores, modi tempore cumque repellendus
            voluptates odio. Nesciunt, suscipit molestiae? Quas, quis?
          </p>
        </header>
        <main className="lg:flex lg:justify-center lg:items-center lg:space-y-0 space-y-8 p-8">
          <section className="lg:w-3/12 h-80 rounded lg:rounded-r-none overflow-hidden">
            <div className="bg-gray-50 w-full h-1/3 flex flex-col justify-center items-center space-y-1 text-base border-b-2 border-gray-200">
              <span className="font-semibold text-indigo-700">Hobby</span>
              <div className="flex items-center">
                <span>$</span>
                <span className="lg:text-3xl text-2xl font-bold">79</span>
                <span className="font-medium ml-1.5 text-gray-500">/month</span>
              </div>
            </div>
            <div className="bg-gray-100 w-full h-2/3 flex flex-col">
              <ul className="text-gray-600 pl-1 pt-5 leading-7">
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Paritor quod Good</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Best good ever</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Husaprt kdaass lldsa</p>
                </li>
              </ul>
              <a
                href="#"
                className="bg-white text-indigo-600 mt-7 w-2/3 h-8 text-sm text-center flex justify-center items-center self-center font-medium rounded-lg shadow-md hover:ring-2 hover:ring-indigo-500"
              >
                Buy Option
              </a>
            </div>
          </section>
          <section className="lg:w-4/12 h-96 relative ring-2 ring-indigo-600 rounded">
            <div className="flex justify-center">
              <span className="rounded-full bg-indigo-600 text-white text-sm lg:text-base px-4 py-1 absolute -top-4 lg-top-5">Most Popular</span>
            </div>
            <div className="bg-gray-50 w-full rounded-t h-1/3 flex flex-col justify-center items-center space-y-3 text-base border-b-2 border-gray-200">
              <span className="lg:text-xl font-semibold text-banafsh">Growth</span>
              <div className="flex items-center">
                <span>$</span>
                <span className="lg:text-4xl text-2xl font-bold">149</span>
                <span className="font-medium ml-1.5 text-gray-500">/month</span>
              </div>
            </div>
            <div className="bg-gray-100 w-full rounded-b h-2/3 flex flex-col">
              <ul className="text-gray-600 pl-2 pt-5 leading-7">
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Paritor quod Good</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Best good ever</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Husaprt kdaass lldsa</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Paritor quod Good</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Best good ever</p>
                </li>
              </ul>
              <a href="#" className="bg-indigo-600 text-white font-medium w-2/3 h-9 self-center mt-7 flex justify-center items-center rounded-lg hover:bg-indigo-500">
                Buy Option
              </a>
              {/* <a href="#"className="mt-10 block w-5/6 rounded-md self-center bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a> */}
            </div>
          </section>
          <section className="lg:w-3/12 h-80 rounded lg:rounded-l-none overflow-hidden">
            <div className="bg-gray-50 w-full h-1/3 flex flex-col justify-center items-center space-y-1 text-base border-b-2 border-gray-200">
              <span className="font-semibold text-indigo-700">Scale</span>
              <div className="flex items-center">
                <span>$</span>
                <span className="lg:text-3xl text-2xl font-bold">349</span>
                <span className="font-medium ml-1.5 text-gray-500">/month</span>
              </div>
            </div>
            <div className="bg-gray-100 w-full h-2/3 flex flex-col">
              <ul className="text-gray-600 pl-2 pt-5 leading-7">
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Paritor quod Good</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Best good ever</p>
                </li>
                <li className="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-banafsh">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Husaprt kdaass lldsa</p>
                </li>
              </ul>
              <a
                href="#"
                className="bg-white text-indigo-600 mt-7 w-2/3 h-8 text-sm font-medium text-center flex justify-center items-center self-center rounded-lg shadow-md hover:ring-2 hover:ring-indigo-500"
              >
                Buy Option
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
