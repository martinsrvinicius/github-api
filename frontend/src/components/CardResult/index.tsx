import './styles.css'
import { Profile } from '../../types/profile/profile';

type Props = {
    user: Profile
}

const CardResult = ({ user }: Props) => {
    return (
        <>
            <div className='card-result-container'>
                <div className='image-container'>
                    <img src={user.avatar_url} alt="" />
                </div>
                <div className='details-container'>
                    <h4>Informações</h4>
                    <p className='detail '>Perfil: <span className='perfil-url'>{user.url}</span></p>
                    <p className='detail'>Seguidores: {user.followers}</p>
                    <p className='detail'>Localidade: {user.location}</p>
                    <p className='detail'>Nome: {user.name}</p>
                </div>
            </div>
        </>
    );
}

export default CardResult;