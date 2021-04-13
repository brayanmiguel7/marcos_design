import { Menu } from '@material-ui/icons';
import Logotipo from '../img/logotipo_white.png';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return(

        <nav className='navbar navbar-expand-md bg-dark box-shadow'>
            <Link className='navbar-brand pl-2 pl-md-4' to='/'>
                <img src={ Logotipo } id='logotipo' alt='Marcos Design Logo' />
            </Link>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Contactos</a>
                </li>
            </ul>
            <div className='d-md-none text-cyan'>
                <Menu />
            </div>
        </nav>

    )

}