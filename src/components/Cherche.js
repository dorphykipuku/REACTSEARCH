import axios from "axios"
import { useEffect, useState } from "react"

const Cherche = ()=>{
const [nom, setNom] = useState("")
const [famille, setFamille]= useState("")
const [resultats, setResultats]=useState([])

const handleChange= (e)=>{
    setNom(e.target.value)
    setFamille(e.target.value)
}

const handleSearch = async()=>{
    let response = await axios.get(`http://localhost:8080/animaux/get/getbyall/${nom}/${famille}`)
    setResultats(response.data)
}

useEffect(()=>{
    handleSearch()
})
 
 
     
    return(
        <div>
                 <form >
                <input type="text" value={nom}  onChange={handleChange}/>
                <button onClick={handleSearch}>Rechercher</button>
                </form>
           

            <ul>
                {resultats.map((resultat)=>(
                    <li key={resultat.id}> {resultat.id} {resultat.nom} {resultat.famille}</li>
                   
                ))}
            </ul>
   

        </div>

    );
  

   
    


}
export default Cherche