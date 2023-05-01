import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Home = () => {

    const[nameAnimal, setNameAnimal]=useState("")
   
    const[animaux, setAnimaux]=useState([])

    const getAnimaux=async()=>{
        let res = await axios.get("http://localhost:8080/animaux/get")
        setAnimaux(res.data)
    }

   // useEffect(()=>{
     //   getAnimaux()
       
    //}, [])

    useEffect(()=>{
        if(nameAnimal===""){
            getAnimaux()
        }
        
        else{
            handleRecherche()
        }
    })

    const handleNameAnimalChange=(e)=>{
        setNameAnimal(e.target.value)

    }

    const handleRecherche=()=>{
      axios.get(`http://localhost:8080/animaux/get/getByNom/${nameAnimal}`).then(res=>setAnimaux(res.data)).catch(error=>console.log(error))
    }

   // const handleSearchClick=()=>{
    //    if(nameAnimal===""){
      //      getAnimaux()
        //}
        
       // else{
        //    handleRecherche()
       // }
  //  }
   
    return (
        <div className='container'>
           <input type="text" value={nameAnimal} name="famille" placeholder='Rehercher ici......' onChange={handleNameAnimalChange}/>
          
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