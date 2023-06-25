import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeRegistrationModal, registration, authorization } from "./redux/actions";
import close from './icons/close.png';

function RegistrationModalWindow() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [secPassword, setSecPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const modalState = useSelector(state => state.changeModalReducer.registrationModalState);
    const accounts = useSelector(state => state.autorisationReducer.accounts); 
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(changeRegistrationModal(!modalState));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        function isPasswordStrong(password) {
            const minLength = 8;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasDigit = /[0-9]/.test(password);
          
            return (
              password.length >= minLength &&
              hasUppercase &&
              hasLowercase &&
              hasDigit
            );
          }

        const repeatCheck = accounts.some((account) => {
            return account.name.toLowerCase() === login.toLowerCase();
        });

        if (!login || !password || !secPassword) {
            setErrorMessage('Please fill in all fields');
            dispatch(changeRegistrationModal(!modalState));
        }else if(password !== secPassword ){
            setErrorMessage('Password mismatch');
            dispatch(changeRegistrationModal(!modalState));
        }else if(!isPasswordStrong(password)){
            setErrorMessage('Password is not strong');
            dispatch(changeRegistrationModal(!modalState));
        }else if(repeatCheck){
            setErrorMessage('Login already exist');
            dispatch(changeRegistrationModal(!modalState));
        }else {
            setErrorMessage('');
            dispatch(registration(login, password));
            dispatch(authorization(login))
            setLogin('');
            setPassword('');
            setSecPassword('');
        }
    };

    const onChangeLogin = (event) => {
        setLogin(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeSecPassword = (event) => {
        setSecPassword(event.target.value);
    };

    return (
        <div className={'modalWindow-container ' + (modalState ? 'show' : 'hidden')}>
            <form onSubmit={handleSubmit} className="modalWindow ">
                <div className="modalWindow-title">
                    <p>Registration</p>
                    <button onClick={handleClick} type="button" name="cancel">
                        <img src={close} alt="Cancel" />
                    </button>
                </div>
                <input
                    type="login"
                    value={login}
                    className="modalWindow-input"
                    maxLength="9"
                    placeholder="login"
                    onChange={onChangeLogin}
                />
                <input
                    type="password"
                    value={password}
                    className="modalWindow-input"
                    maxLength="15"
                    placeholder="password"
                    onChange={onChangePassword}
                />
                <input
                    type="password"
                    value={secPassword}
                    className="modalWindow-input"
                    maxLength="15"
                    placeholder="confirm password"
                    onChange={onChangeSecPassword}
                />
                <input onClick={handleClick} type="submit" value="sind up" />
                {errorMessage && <p style={{ fontSize: '16px', color: '#E32636', margin: '0' }}>{errorMessage}</p>}
                <p style={{ marginBottom: '30px' }}></p>
            </form>
        </div>
    );
}

export default RegistrationModalWindow;