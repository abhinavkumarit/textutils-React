import React from 'react'

export default function About(props) {
    return (
        <div className="container" style={{color: props.mode==='light'? 'black' : 'black'}}>
            <h1 className='my-3'>About us</h1>
            <div className="accordion"  id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyzie Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
