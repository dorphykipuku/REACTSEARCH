import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Modifier = () => {

    const [animaux, setAnimaux] = useState({nom:"", famille:""})
    const {id}= useParams()
    let navigate = useNavigate()
    const {nom, famille} = animaux

    const onInputChange=(e)=>{
        setAnimaux({...animaux, [e.target.name]: e.target.value})
    }

    const modifierAnimaux= async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8080/animaux/put/${id}`, animaux)
        navigate("/")
        alert("un animal modifier")
    }

    const getbyid = async()=>{
        let result = await axios.get(`http://localhost:8080/animaux/get/${id}`)
        setAnimaux(result.data)
    }

    useEffect(()=>{
     getbyid()
    },[])


    return (
        <div className='container mt-3'>
              <form className='col-offset-4 col-md-6 col-offset-2' onSubmit={(e)=>modifierAnimaux(e)}>
             <label>nom</label> <input type='text' name='nom' value={nom} onChange={(e)=>onInputChange(e)} className='form-control'/><br/>
             <label>famille</label> <input type='text' name='famille' value={famille} onChange={(e)=>onInputChange(e)} className='form-control'/><br/>
             <button className='btn btn-outline-primary' type='submit'>Modifier</button>  <Link to='/' ><button className='btn btn-outline-danger'>Retour</button></Link>
            </form>
        </div>
    );
};

export default Modifier;