import { BaseSyntheticEvent, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Profile } from '../../types/profile/profile';
import Navbar from '../../components/Navbar';
import CardResult from '../../components/CardResult';
import CardLoader from '../../components/CardResult/CardLoader';


const Search = () => {

    const [username, setUsername] = useState();
    const [user, setUser] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (event: BaseSyntheticEvent) => {
        setUsername(event.target.value);
    };

    const handleSubmit = () => {
        searchUser();
    }

    const searchUser = () => {
        setIsLoading(true);
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                setUser(res.data);
            }).finally(() => {
                setIsLoading(false);
            })
            .catch();
    }


    return (
        <>
            <Navbar />
            <form className='card-search-container'>
                <h1>Encontre um perfil Github</h1>
                <input type="text" placeholder='Usuário Github' onChange={handleInput} />
                <div className='btn-container'>
                    <button type='button' onClick={handleSubmit} className='btn btn-primary'>Encontrar</button>
                </div>
            </form>
            {(isLoading) ? <CardLoader /> :
                ((user) ?
                    <CardResult user={user} /> : ''
                )
            }
        </>
    );
}

export default Search;