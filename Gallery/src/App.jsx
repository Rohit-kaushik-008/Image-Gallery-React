import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import Card from './components/Card'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const getData = async () => {

      setLoading(true); // start loading

      try {
        let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);

        setUserData(response.data)
      }

      catch(error) {
        console.log("Error Fetching data: ", error);
      }
      finally {
        setLoading(false); // stop loading (success or fail)
      }
      
    };

    getData()
  }, [index])

  return (
    <div className='bg-black h-screen'>

      <Navbar />

      <Card data={userData} index={index} setIndex={setIndex} loading={loading}/>

    </div>
  )
}

export default App
