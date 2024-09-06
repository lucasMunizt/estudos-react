import { useState,useEffect } from 'react'
import './App.css'
import {useFetch} from "./hooks/useFetch"
const url = "http://localhost:3000/products"

function App() {
  const [products,setProducts] = useState([])
  const { data: items,httpConfig,loading } = useFetch(url);
  const [name,setName] = useState("") 
  const [price,setPrice] = useState("") 

 /* useEffect(()=>{
    async function getData(params) {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setProducts(data)
    }
    getData()
  },[])

    const handleSumit = async (e) =>{
      e.preventDefault()
      const product = {
        name,
        price
      }
      const res = await fetch(url,{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product) 
      });
      const addProduct = await res.json()
      setProducts((prevProducts)=>[...prevProducts,addProduct])
    }*/
      const handleSumit = async (e) =>{
        e.preventDefault()
        const product = {
          name,
          price,
        }
        httpConfig(product,"POST")
      }
  return (
    <>
    <h1>ola</h1>
      {loading && <p>Carregando..</p>}
      
      <ul>
        {items && items.map((product)=>(
          
          <li key={product.id}>Nome:{product.name}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSumit}>
          <label>nome:</label>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
          <label>preço:</label>
          <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  )
}

export default App