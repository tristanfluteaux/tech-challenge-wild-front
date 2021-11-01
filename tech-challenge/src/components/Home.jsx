import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css'
import InputSearch from './InputSearch';

const Home = () => {

    const [argo, setArgo] = useState('')
    const [name, setName] = useState([])
    const [refresh, setRefresh] = useState(false)
    
    useEffect(() => {
        const getName = () => {
            axios.get('http://localhost:4000/argonauts')
                .then (res => setName(res.data))
        }
        getName()
    }, [refresh])
    
    return (
        <>  
        <div className='home-container'>
            <h1>Tech Challenge Wild</h1>
            <h2>Ajouter un(e) Argonaute</h2>
        </div>
        <InputSearch 
        argo={argo}
        setArgo={setArgo}
        refresh={refresh}
        setRefresh={setRefresh}
        />
            <h3>Membres de l'équipage</h3>
        <div className='member-container'>
            {name && 
            name.map(user => (
                <div className='pmap'><p key={user.id}>{user.argo_name}</p></div>
            ))
            }
        </div>
        </>
    );
}
 
export default Home;