import { Link } from 'react-router-dom';
import Botones from '../img/botones.png';
import Chia from '../img/chia_1080.jpg';
import MD from '../img/md_1580x600.jpg';
import MD_big from '../img/md_3000x1000.jpg';
import MiniGallery from './MiniGallery';

export default function Home() {

    return(

        <div className='row mx-0'>
            <div className='col-12 mx-auto text-center px-0'>
                <img className='col-auto d-none d-md-block' src={ MD } style={{ 'zIndex': '0' }}></img>
                <img className='w-100 d-block d-md-none' src={ MD_big } 
                style={{ 'zIndex': '0', 'width': '600px', 'height': '150px' }}></img>
            </div>
            <div className='row col-12 mx-auto p-4 border-b-darkblack bg-dark'>
                <div className='col-md-4 ml-md-4 text-justify'>
                    <h3 className='border-bottom pb-2 pl-2 pl-md-3'>¿Quién soy?</h3>
                    <p className='mt-4'>
                        Soy Marcos Guánchez, un diseñador venezolano cuya pasión es diseñar a gran nivel sin 
                        importar la complicación del proyecto ya que los retos hacen a los verdaderos profesionales. 
                    </p>
                </div>
                <div className='col-md-7 text-center px-0 ml-md-2'>
                    <img src={ Chia } className='col-12 px-0' />
                </div>
            </div>
            <MiniGallery />
        </div>

    )

}