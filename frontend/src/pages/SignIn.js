import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
            username: '',
            password: ''
        })
        props.setUser(payload)
        props.setUserID(payload.id)
        props.setAuthenticated(true)
        navigate('/products')
    }


    return(
        <div>
            <h1>Sign In </h1>
            <form className='signin' onSubmit={handleSubmit}>
                <div className='signInUsername'>
                    <input type='text' id='username' placeholder='Enter your username' name='username' onChange={handleChange} value={formValues.username} style={{textAlign: 'center'}}/>
                    <br/>
                </div>
                <div className='SignInPassword'>
                    <input type='password' id='password' placeholder='Enter your password ' name='password' onchange={handleChange} value={formValues.username} style={{ textAlign: 'center'}}
                    />
                    <br/>
                </div>
                <button className='signInButton' type='submit' onClick={handleSubmit}disabled={!formValues.username || !formValues.password}> Sign In 
                </button>

            </form>
        </div>
    )
}

export default SignIn