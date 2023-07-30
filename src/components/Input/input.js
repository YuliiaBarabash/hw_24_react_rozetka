import './input.css';
import { AiFillEye } from "react-icons/ai";

const Input = ({ shouldHide }) => {
    let iconStyles = { color: '#44B26F', fontSize: '2em' };

    return (
        <label>
            {shouldHide ? <input className='login-input' type='password' placeholder='Password'>  
            </input> : <input className='login-input' type='text' placeholder='User Name'>  
            </input>}
            {shouldHide ? <AiFillEye className='eye' style={iconStyles}/> : null}
        </label>
    );
}

export default Input;