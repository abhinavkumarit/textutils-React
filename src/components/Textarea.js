//import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers'
import React, { useState } from 'react'  //1 step for state

export default function Textarea(props) {
    const handleOnChange = (event) => {      //3 step for state
        console.log("value got changed")
        setText(event.target.value)
    }

    const handleOnClickupper = () => {
        console.log("uppercase is activated");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Upper case is enabled', 'success')

    }

    const handleOnClicklower = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('Lower case is enabled', 'success')
    }

    const handleOnClearText = () => {
        let newText = ("");
        setText(newText);
        props.showAlert('clear text is enabled', 'success')

    }

    const handleOnCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copy text is enabled', 'success')

    }

    

    const [text, setText] = useState("enter any thing")   //2nd step for state

   



    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}> {/*adding font color which will change accordingly*/}
                <div className="mb-3">
                    <h1>welcome</h1>
                    
                   

                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>{/*textarea color will change according*/}
                    <div className="my-3">
                        <select className="form-select" aria-label="Default select example" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
                            <option selected style={{ backgroundColor: "purple" }}>Open this select menu</option>
                            <option value="1" onClick={handleOnClickupper} style={{ backgroundColor: "purple" }}>convert to uppercase</option>
                            <option value="2" onClick={handleOnClicklower} style={{ backgroundColor: "purple" }}>convert to lowercase</option>
                            <option value="3" onClick={handleOnClearText} style={{ backgroundColor: "purple" }}>clear text</option>
                            <option value="4" onClick={handleOnCopyText} style={{ backgroundColor: "purple" }}>copy text</option>
                        </select>
                    </div>


                </div>
                <div className='container'>
                    <h2>YOUR TEXT SUMMARY</h2>
                    {text.split(" ").filter((element) => { return element.length !== 0 }).length}
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minute read </p>
                    <h3>Privew</h3>
                    <p>{text}</p>
                </div>

            </div>
        </>
    )


}
