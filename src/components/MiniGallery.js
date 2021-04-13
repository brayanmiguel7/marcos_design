import RedMoon from '../img/moon.jpg';
import Church from '../img/church.jpg';
import AhoraSi from '../img/ahorasi.jpg';
import Zombies from '../img/zombies.jpg';

export default function MiniGallery() {

    return(

        <div className='row col-12 mx-0 bg-dark border-b-darkblack p-4'>
            <div className='col-12 mx-auto px-0'>
                <h3 className='border-bottom pb-2 pl-2 pl-md-3'>Galería</h3>
                <div className='row mt-4'>
                    <div className='col-6 col-md-3 mx-md-0 px-md-0'>
                        <img src={ RedMoon } className='col-12 px-0' alt='Red Moon' />
                    </div>
                    <div className='col-6 col-md-3 mx-md-0 px-md-0'>
                        <img src={ Church } className='col-12 px-0' alt='Church' />
                    </div>
                    <div className='col-6 col-md-3 mx-md-0 px-md-0'>
                        <img src={ AhoraSi } className='col-12 px-0' alt='Ahora Sí' />
                    </div>
                    <div className='col-6 col-md-3 mx-md-0 px-md-0'>
                        <img src={ Zombies } className='col-12 px-0' alt='Zombies' />
                    </div>
                </div>
            </div>
        </div>

    )

}