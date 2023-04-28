import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Home = () => {

    const[nameAnimal, setNameAnimal]=useState("")
    const[animaux, setAnimaux]=useState([])

    const getAnimaux=async()=>{
        let res = await axios.get("http://localhost:8080/animaux/get")
        setAnimaux(res.data)
    }

    useEffect(()=>{
        getAnimaux()
    },[])

    const handleNameAnimalChange=(e)=>{
        setNameAnimal(e.target.value)
    }

    const handleRecherche=()=>{
      axios.get(`http://localhost:8080/animaux/get/getByNom/${nameAnimal}`).then(res=>setAnimaux(res.data)).catch(error=>console.log(error))
    }

    const handleSearchClick=()=>{
        if(nameAnimal===""){
            getAnimaux()
        }else{
            handleRecherche(nameAnimal)
        }
    }
   
    return (
        <div className='container'>
           <input type="text" value={nameAnimal} onChange={handleNameAnimalChange}/>
           <button onClick={handleSearchClick} className="btn btn-success">Rechercher</button>
           <table className='table'>
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Famille</th>
                    </tr>
               </thead>
               <tbody>
                   { animaux.length > 0 ? animaux.map((animal)=>(
                       <tr key={animal.id}>
                        <td>{animal.id}</td>
                        <td>{animal.nom}</td>
                        <td>{animal.famille}</td>
                        <td><button className='btn btn-danger'>supprimer</button></td>
                       </tr>
                        )):(
                            <tr>
                                <td colSpan={3}>Aucun animal trouvé</td>
                            </tr>
                        )}
               </tbody>
           </table>
          
        </div>
    );
};

export default Home;