import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Test = () => {


    const [animaux, setAnimaux] = useState({nom:"", famille:""})

    const {nom, famille}= animaux

    let navigate = useNavigate()

    const onInputChange=(e)=>{
        setAnimaux({...animaux, [e.target.name] : e.target.value})
    }

    const ajouterAnimaux= async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/animaux/pos", animaux) 
        navigate("/")
    }

    return (
        <div className='container'>
            <form className='col-md-6' onSubmit={(e)=>ajouterAnimaux(e)}>
             <label>nom</label> <input type='text' name='nom' value={nom} onChange={(e)=>onInputChange(e)} className='form-control'/><br/>
             <label>famille</label> <input type='text' name='famille' value={famille} onChange={(e)=>onInputChange(e)} className='form-control'/><br/>
             <button className='btn btn-outline-primary'>Ajouter</button>  <Link to='/' ><button className='btn btn-outline-danger'>Retour</button></Link>
            </form>
        </div>
    );
};

export default Test;