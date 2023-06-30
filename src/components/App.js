
import React,{useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then((res) => {
        // console.log(res);
        setData(res)
      })
      .catch((error) => {
        console.log(error);
        setdata(`An error occurred: ${error}`)
      })
  }, [])

  if (!data) {
    return <p>Loading product data...</p>;
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        <pre className="data">{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default App
