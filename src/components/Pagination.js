import axios from "axios"
import { useEffect, useState } from "react"

const Pagination =()=>{
const [animal, setAnimal]=useState([])
const [currentPage, setCurrentPage]=useState(1)
const [animalParPage]=useState(10)



useEffect(()=>{
 getAnimaux()
})

const getAnimaux =async()=>{
    let res = await axios.get("http://localhost:8080/animaux/get")
    setAnimal(res.data)
}

const handleClick=(e)=>{
  setCurrentPage(Number(e.target.id));
}
const indexOfLastAnimal= currentPage * animalParPage
const indexOfFirstAnimal = indexOfLastAnimal - animalParPage
const currentAnimal = animal.slice(indexOfFirstAnimal, indexOfLastAnimal)

const pageNumbers = [];
for(let i =1; i<= Math.ceil(animal.length/animalParPage); i++){
  pageNumbers.push(i)
}

const renderPagesNumbers = pageNumbers.map(number =>{
  return(
    <li key={number} id={number} onClick={handleClick}
    className={currentPage === number ? 'active' : ''}>  {number}</li>
  )
})

return(
  <div>
    <h1>ANIMAL</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>nom</th>
          <th>famille</th>
        </tr>
      </thead>
      <tbody>
        {currentAnimal.map(anim =>(
          <tr key={anim.id}>
            <td>{anim.nom}</td>
            <td>{anim.famille}</td>

          </tr>
        ))}
      </tbody>
    </table>
    <b>nombre de page</b>
    <ul id="page-numbers">
      {renderPagesNumbers}
    </ul>
  </div>
)



}
export default Pagination