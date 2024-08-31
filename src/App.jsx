import { useState } from 'react'
import './App.css'

function App() {
  const [apiData, setApiData] = useState(null);

  const fetchData = async() => {
    try {
        const response = await fetch(`https://payload.vextapp.com/hook/QK9R5Y4Q3O/catch/$(Samarth15$)`, { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json", 
                "Apikey": `Api-Key BuKAjp53.e7OpImABMCyoexPn2MDKgxBJBIOfMjAI` 
            }, 
            body: JSON.stringify({ 
                "payload": "What is machine learning" 
            }) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Assuming the API returns JSON
        console.log(data);
        setApiData(data)
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
      <button onClick={fetchData}>Generate Response</button>
      <div>{apiData ? JSON.stringify(apiData) : "Click the button to generate a response"}</div>
    </div>
    </>
  )
}

export default App
