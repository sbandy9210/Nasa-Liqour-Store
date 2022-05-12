import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'


const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState ({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const [response, setResponse] = useState('')

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        setResponse('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const serverResponse = await RegisterUser({
            username: formValues.username,
            register_password: formValues.password
        })

        if(serverResponse.message){
            setResponse(serverResponse.message)
        } else {
            setFormValues({
                username: '',
                password: '',
                confirmPassword: ''
            })

            navigate('/Login')
        }
    }


    return(
        <div className='Register'>
            <h1>Sign Up</h1>
            <form className='register' onSubmit={handleSubmit}>
                <div className='usernameContainer'>
                    <input className='username' type='text' placeholder='Create your username' id='username' name='username' onChange={handleChange} value={formValues.username} style={{ textAlign: 'center'}} required 
                    />
                    <br/>
                    {response}
                </div>
                <div className='passwordContainer'>
                    <input type='password' placeholder='Create a password' id='password' name='password' onChange={handleChange} value={formValues.password} style={{ textAlign: 'center'}}
                    required
                    />
                    <br/>
                </div>
                <div className='confirmPasswordContainer'>
                    <input type='password' placeholder='Confirm password' id='confirm password' name='confirmPassword' onChange={handleChange} value={formValues.confirmPassword} style={{textAlign: 'center'}} 
                    required
                    />
                    <br/>
                </div>
                <button className='registerButton' type='submit' 
                disabled={
                    !formValues.email ||
                    ! formValues.username ||
                    !formValues.password ||
                    !formValues.confirmPassword ||
                    !(formValues.confrimPassword === formValues.password) || 
                    response.length > 0}
                    > Register 

                </button>
            </form>
            <br/>

        </div>
    )
}

export default Register