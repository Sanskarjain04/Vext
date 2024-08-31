import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Footer from './components/Footer';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null)
  console.log(payload)
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://payload.vextapp.com/hook/QK9R5Y4Q3O/catch/$(Samarth15$)', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Apikey": `Api-Key BuKAjp53.e7OpImABMCyoexPn2MDKgxBJBIOfMjAI`
        },
        body: JSON.stringify({
          "payload": payload
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setLoading(false);
      setApiData(data);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setPayload(e.target.value);
  };

  return (
    <>
    <Navbar/>
    <div className=' flex flex-col justify-center h-80 align-middle items-center container my-24 mx-auto px-4 space-y-4'>
    <div className="w-72">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " onChange={handleInputChange} /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Describe your Specifications
    </label>
  </div>
</div> 
      <button
                onClick={fetchData}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-800 via-green-600 to-green-900 text-white mb-4"
                disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate AI Data'}
              </button>
      {loading && <Loader/>}
      {apiData && (
        <div className="border p-4 rounded-md shadow-md bg-[#fdff8a] max-w-96 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-2">Generated Data:</h2>
        <p>{apiData.text}</p>
    </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default App;


// https://payload.vextapp.com/hook/QK9R5Y4Q3O/catch/$(Samarth15$)