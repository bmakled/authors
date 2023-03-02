import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
const OneAlbum = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [album, setAllAlbum] = useState({})
    
    useEffect (()=>{
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAllAlbum(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
     