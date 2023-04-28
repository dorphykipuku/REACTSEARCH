import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = ()=>{

    const [animaux, setAnimaux]= useState({})
     const {id} = useParams()
    useEffect(()=>{
      getanimaux()
    }, [])

    const getanimaux = async ()=>{
        let res = await axios.get(`http://localhost:8080/animaux/get/${id}`)
        setAnimaux(res.data)

    }

return(

    <div className="container">
        <div className="card-header">
        <h2> information sur l'animal numero {animaux.id}</h2>
        </div>
        <div className="card-body">
         <h4> nom : {animaux.nom}</h4>
         <h4> famille : {animaux.famille}</h4>
        </div>

        
        


    </div>


)
}
 export default Details