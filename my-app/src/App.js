import { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {
  const [categ,setCateg] = useState("general")

  const setCategory = (val) =>{
    setCateg(val);
  }
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={categ}/>
    </div>
  )
}

export default App