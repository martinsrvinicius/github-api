import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './styles.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home-container'>
                <h1>Desafio Github API</h1>
                <p>DevSuperior - Escola de programação</p>
                <div className='btn-container'>
                    <Link to="/search">
                        <button type="button" className='btn btn-primary'>Começar</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;