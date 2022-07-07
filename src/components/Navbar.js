import React from 'react'
//import Proptypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {



    return (


        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{color:'blue',fontStyle:'italic' ,fontSize:'x-large' ,fontWeight:'bold'}} href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                           {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                              </li>*/}

                        </ul>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>





    )
}

