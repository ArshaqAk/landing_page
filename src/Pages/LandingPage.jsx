import React from 'react';
import qr from '../Assets/qradacode.png'
import './LandingPage.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function LandingPage() {
    return (
        <>
          <div className="container-fluid">
                <h2 className='text-center mt-4 font-weight-bold'>MEET OUR TEAM</h2>
                <div className="row py-5 mt-2">
                <div className="col-lg-6 col-sm-12 mt-4">
                    <div className='h-100 d-flex'>
                        <div className="cards m-2 shadow-sm">
                        <MDBCard>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                        <MDBCardBody>
                            <hr />
                            <h5 className='text-center'>Muhammed Shameem</h5>
                            <h6 className='text-center'>Managing Partner</h6>
                        </MDBCardBody>
                        </MDBCard>

                        </div>
                        <div className="cards m-2 shadow-sm">
                        <MDBCard>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                        <MDBCardBody>
                            <hr />
                            <h5 className='text-center'>Muhammed Muzammil</h5>
                            <h6 className='text-center'>Managing Partner</h6>
                        </MDBCardBody>
                        </MDBCard>

                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-sm-12 text-center mt-4">
                    <div style={{backdropFilter:"blur(200px)"}} className='py-2 h-100 border border-1 border-seccondary rounded-5 py-4 '>
                        <div>
                        <h4>Connect With Us</h4>
                        <h6>Scan this QR to get information</h6>
                        </div>
                        {/* QR Code */}
                        <div className='mt-3 text-center'>
                            <img src={qr} alt="QR Code Scanner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 mt-5 text-center my-4 p">
                <span><button className='btn border border-seccondary rounded-pill px-4  mx-2 py-2  btn-light'>Home</button></span>
                <span><button className='btn border border-seccondary rounded-pill px-4  mx-2 py-2  btn-light'>Home</button></span>
                <span><button className='btn border border-seccondary rounded-pill px-4  mx-2 py-2  btn-light'>Home</button></span>
                </div>
            </div>
          </div>
        </>
    )
}

export default LandingPage