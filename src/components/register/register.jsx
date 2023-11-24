import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div className='register'>            
            <form className="Register_form">
                <h2>Register</h2>

                <div className="form_column">
                    <label>Type</label>
                    <select className='select' required>
                        <option value="select type" selected>Select type</option>
                        <option value="televisor">Televisor</option>
                        <option value="monitor">Monitor</option>
                    </select>
                </div>
                

                <div className="form_column">                    
                    <label>Model</label>
                    <input type="text" placeholder="Write your Model" required></input>
                </div>

                <div className="form_column">
                    <label>Serial number </label>
                    <input type="text" placeholder="Write your password" required></input>
                </div>

                <div className="form_column">
                    <label>Category</label>
                    <select className='select' required>
                        <option value="select caregory" selected>Select category</option>
                        <option value="open box">Open box</option>
                        <option value="refurbished">Refurbished</option>
                        <option value="damaged">Damaged</option>
                        <option value="defective">Defective</option>
                        <option value="crack">Crack</option>
                    </select>
                </div>
                

                <div className="form_column">
                    <label>Comment</label>
                    <textarea className='comment' rows="6" cols="50" placeholder='Insert your comment'/>
                </div>
                    
                <button className="button">Save</button>
            </form>
        
        </div>
    )
}

export default Register;