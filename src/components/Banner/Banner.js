import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bonsai from '../../images/bonsai.jpg'
import rose from '../../images/rose.png'
import grass from '../../images/grass.png'
import { Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className='mt-5 mb-5'>
            <Carousel  className="square border">
                <Carousel.Item interval={1000}>
                    <div className='row'>
                        <div className='col-lg-7'>
                        <img
                        className="d-block"
                        src={bonsai}
                        alt="Second slide" width="567" 
                          />
                        </div>
                        <div className='col-lg-5  d-flex align-items-center ps-3 pb-3'>
                            
                             <div>
                             <h1>Bonsai</h1>
                             <p className="fs-5">Bonsai is the Japanese art of growing and training miniature trees in containers, developed from the traditional Chinese art form of penjing.</p>
                             <h3>400 BDT</h3>
                            
                             <Button variant="warning">Buy Now</Button>
                             </div>
                             
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                <div className='row'>
                        <div className='col-lg-7'>
                        <img
                        className="img-fluid"
                        src={rose} width="685"
                    />
                        </div>
                        <div className='col-lg-5  d-flex align-items-center ps-5 pb-3'>
                        <div>
                        <h1>Multi Coloured Rose</h1>
                        <p className="fs-5">We provide the best Pink Rose Nursery Plants. Plants are fresh and healthy and looks good.</p>
                        <h3>400 BDT</h3>
                            
                        <Button variant="warning">Buy Now</Button>
                        </div>
                        </div>
                 </div>

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                <div className='row'>
                        <div className='col-lg-7'>
                        <img
                        className="img-fluid "
                        src={grass} width="605" 
                    />
                        </div>
                        <div className='col-lg-5  d-flex align-items-center p-2'>
                       <div>
                       <h1>Rare Chinsa grass</h1>
                        <p className="fs-5">The plant, an herbaceous perennial, is usually many-branched in the wild state and grows about 1 to 2 metres (3 to 7 feet) high.<span className="fs-4 fw-bold">25% OFF</span> For New Users! - Buy Fresh China Grass 20gm at lowest prices </p>
                        <h3>400 BDT</h3>
                            
                        <Button variant="warning">Buy Now</Button>
                       </div>
                        </div>
                 </div>
                    
                  
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;