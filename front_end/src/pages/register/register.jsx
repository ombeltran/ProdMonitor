import './register.css'
import { Card, Button } from '../../components';
import { useForm } from "react-hook-form";
import { createReport } from "../../api/report.api";
import { useState } from 'react';

const Register = () => {

    const { register, handleSubmit, reset: resetForm } = useForm();
    const [selectedTypeOption, setSelectedTypeOption] = useState('');
    const [selectedCategoryOption, setSelectedCategoryOption] = useState('');

    const onSubmit = handleSubmit(async (data, e) => {
        e.preventDefault();
        await createReport(data);
        resetForm();
        setSelectedTypeOption('');
        setSelectedCategoryOption('');
        window.alert('Successfully craeted');
    });

    return (
        <div className='registerPadre'>
            <Card>
                <div className='register'>
                    <form className="Register_form" onSubmit={onSubmit}>
                        <h2>Register</h2>

                        <div className="form_column" >
                            <label htmlFor='type'>Type</label>
                            <select
                                id='type'
                                name='type'
                                className='select'
                                autoFocus                                
                                {...register('type', {
                                    required: true,
                                })}
                                value={selectedTypeOption}
                                onChange={(e) => setSelectedTypeOption(e.target.value)}
                                required
                            >
                                <option value="" disabled >Select type</option>
                                <option value="televisor">Televisor</option>
                                <option value="monitor">Monitor</option>
                            </select>
                        </div>


                        <div className="form_column">
                            <label htmlFor='model'>Model</label>
                            <input
                                type="text"
                                placeholder="Write the Model"
                                required
                                {...register('model')} >
                            </input>
                        </div>

                        <div className="form_column">
                            <label htmlFor='serial_number'>Serial number </label>
                            <input
                                type="text"
                                placeholder="Write the serial number"
                                required
                                {...register('serial_number')} >
                            </input>
                        </div>

                        <div className="form_column">
                            <label htmlFor='category'>Category</label>
                            <select
                                className='select'                                
                                {...register('category')} 
                                value={selectedCategoryOption}
                                onChange={(e) => setSelectedCategoryOption(e.target.value)}
                                required
                                >
                                <option value="" disabled>Select category</option>
                                <option value="open box">Open box</option>
                                <option value="refurbished">Refurbished</option>
                                <option value="damaged">Damaged</option>
                                <option value="defective">Defective</option>
                                <option value="crack">Crack</option>
                            </select>
                        </div>


                        <div className="form_column">
                            <label htmlFor='comment'>Comment</label>
                            <textarea
                                className='comment'
                                rows="6"
                                cols="50"
                                placeholder='Insert your comment'
                                {...register('comment')} />
                        </div>

                        <div className='button'>
                            <Button>Save</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Register;