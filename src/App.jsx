import { useState , useEffect} from 'react'
import './App.css'
import { DATA } from './data';
const alfabe = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z"]
function App() {
  const [index , setIndex] = useState(0);
  const [soru , setSoru] = useState("");
  const [cevap, setCevap] = useState("");
  const [cevapArray, setCevapArray] = useEffect([]);

  useEffect(()=>{
    const cevap = DATA[index].cevap.toLowerCase()
    setCevap(cevap)
    setSoru(DATA[index].soru)
    const cevapArray = cevap.split("");
    cevapArray.push(alfabe[Math.floor(Math.random() * alfabe.length)])
    cevapArray.push(alfabe[Math.floor(Math.random() * alfabe.length)])
    cevapArray.push(alfabe[Math.floor(Math.random() * alfabe.length)])
    const alfabeLowerData = cevapArray.map((cevap) => cevap.toLowerCase())
    console.log(alfabeLowerData)
  },[])
  return (
    <>
    <div className="App">
      <div>
        <span>{soru}</span>
      </div>
      
    </div>
      
    </>
  )
}

export default App