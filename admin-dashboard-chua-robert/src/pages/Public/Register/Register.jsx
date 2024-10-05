import { useState, useRef } from 'react';
import './Register.css'; // You can style according to your needs
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('idle');

  const navigate = useNavigate();
  const fnameRef = useRef();
  const mnameRef = useRef();
  const lnameRef = useRef();
  const contactRef = useRef();

  const handleRegister = async () => {
    const data = { fname, mname, lname, contact };
    setStatus('loading');

    try {
      const response = await axios.post('/api/register', data);
      // Handle success (for example, store token, etc.)
      console.log(response.data);
      navigate('/main/dashboard'); // Navigate after successful registration
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className='Register'>
      <div className='main-container'>
        <h3>Register</h3>
        <form>
          <div className='form-container'>
            {/* First Name */}
            <div className='form-group'>
              <label>First Name:</label>
              <input
                type='text'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                ref={fnameRef}
                required
              />
            </div>

            {/* Middle Name */}
            <div className='form-group'>
              <label>Middle Name:</label>
              <input
                type='text'
                value={mname}
                onChange={(e) => setMname(e.target.value)}
                ref={mnameRef}
              />
            </div>

            {/* Last Name */}
            <div className='form-group'>
              <label>Last Name:</label>
              <input
                type='text'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                ref={lnameRef}
                required
              />
            </div>

            {/* Contact */}
            <div className='form-group'>
              <label>Contact:</label>
              <input
                type='text'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                ref={contactRef}
                required
              />
            </div>

            {/* Submit Button */}
            <div className='submit-container'>
              <button
                type='button'
                disabled={status === 'loading'}
                onClick={handleRegister}
              >
                {status === 'idle' ? 'Register' : 'Loading...'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
