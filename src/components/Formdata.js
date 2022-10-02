import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import countryState from './../../src/countryState.json';
import countryMobileCode from './../../src/country.json';
import axios from 'axios'


const Formdata = (props) => {
    let history = useHistory();
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    const [countryCode, setCountryCode] = useState('');


    const handlecountry = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countryState.find(country => country.country_id === getcountryId);
        setValues({
            ...values,
            "country": getStatedata.country_name
        })
        setState(getStatedata.states);
        setCountryid(getcountryId);

        const countryMobileCodeData = countryMobileCode.find(country => country.name === getStatedata.country_name);
        console.log(countryMobileCodeData);
        setCountryCode(countryMobileCodeData.dial_code);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        const getStatedata = countryState.find(country => country.country_id === countryid);
        const selectedStateIdd = getStatedata.states.find((state) => state.state_id == stateid);
        setValues({
            ...values,
            "state": selectedStateIdd.state_name
        })
        setStateid(stateid);
    }



    const handleChange = (e) => {
        console.log(e);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleChangePhone = (e) =>{
        console.log(countryCode);
        setValues({
            ...values,
            // "phone": e.target.value
            "phone": e.target.value

        })
    }

    const [values, setValues] = useState({
        fname: "",
        lname: "",
        mname: "",
        address: "",
        country: "",
        state: "",
        zip: "",
        email: "",
        phone: "",
        height: "",
        weight: ""
    })
    const submitForm = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/success',
            state: values
          });
        axios.post('http://localhost:3001/form/save-details', values)
        .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            })

    
    }

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h1 className='title'>Vitasoft Technologies P Ltd</h1>
                    <h2 className='title'>Enter your Details</h2>
                </div>
                <form className='form-wrapper' method='POST'>

                    <div className='name'>
                        <label className='label'>First Name</label>
                        <input className='input' type='text' name='fname' value={values.fname} onChange={handleChange} />
                    </div>



                    <div className='name'>
                        <label className='label'>Last Name</label>
                        <input className='input' type='text' name='lname' value={values.lname} onChange={handleChange} />
                    </div>
                    <div className='name'>
                        <label className='label'>Middle name</label>
                        <input className='input' type='text' name='mname' value={values.mname} onChange={handleChange} />
                    </div>
                    <div className='address'>
                        <label className='label'>Address</label>
                        <input className='input' type='text' name='address' value={values.address} onChange={handleChange} />
                    </div>
                    <div className='country'>
                        <label className='label'>Country</label>
                        <select className='input' name='country' onChange={(e) => handlecountry(e)}>
                            <option value="">--Select Country---</option>
                            {
                                countryState.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index} className='input'>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='state'>
                        <label className='label'>Country</label>
                        <select className='input' name='state' onChange={(e) => handlestate(e)}>
                            <option value="">--Select State---</option>
                            {
                                state.map((getstate, index) => (
                                    <option value={getstate.state_id} key={index} className='input'>{getstate.state_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='zip'>
                        <label className='label'>Zip Code</label>
                        <input className='input' type='text' name='zip' value={values.zip} onChange={handleChange} />
                    </div>
                    <div className='email'>
                        <label className='label'>Email</label>
                        <input className='input' type='email' name='email' value={values.email} onChange={handleChange} />

                    </div>
                    <div className='phone'>
                        <label className='label'>Phone Number</label>
                        <div>
                        <p>{countryCode}</p>
                        <input className='input' type='text' name='phone' value={values.phone} onChange={handleChangePhone} />
                        </div>
                    </div>
                    <div className='height'>
                        <label className='label'>Height in Ft/Inches</label>
                        <input className='input' type='text' name='height' value={values.height} onChange={handleChange} />
                    </div>
                    <div className='weight'>
                        <label className='label'>weight in Kgs</label>
                        <input className='input' type='text' name='weight' value={values.weight} onChange={handleChange} />
                    </div>

                    {/* <div>
                <Link className='submit'
                to={{
                    pathname:"/success",
                }}
                >
                submit
                </Link>
                </div> */}

                    <div>
                        <button type='submit' onClick={submitForm}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formdata