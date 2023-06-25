import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { changeAutorisationModal, changeRegistrationModal, changeCurrentAccount, authorization, updateData, pageNumberReset } from "./redux/actions";
import close from './icons/close.png';

function AutorisationModalWindow() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const modalState = useSelector(state => state.changeModalReducer.autorisationModalState);
    const regModalState = useSelector(state => state.changeModalReducer.registrationModalState);
    const currentAccount = useSelector(state => state.autorisationReducer.currentAccount); 
    const words = useSelector(state => state.creationWordsReducer.words); 
    const accounts = useSelector(state => state.autorisationReducer.accounts); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCurrentAccount(currentAccount));
    }, [currentAccount])

    const handleClick = () => {
        dispatch(changeAutorisationModal(!modalState));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const accountCheck = accounts.some((account) => {
            return account.name.toLowerCase() === login.toLowerCase() && account.password.toLowerCase() === password.toLowerCase();
        });

        if (!login || !password) {
            setErrorMessage('Please fill in all fields');
            dispatch(changeAutorisationModal(!modalState));
        }else if(!accountCheck){
            setErrorMessage('Incorrect login or password');
            dispatch(changeAutorisationModal(!modalState));
        }else {
            setErrorMessage('');
            dispatch(updateData(words, currentAccount));
            dispatch(authorization(login));
            dispatch(pageNumberReset());
            setPassword('');
            setLogin('');
        }
    };

    const onChangeLogin = (event) => {
        setLogin(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleClickRegLink = () => {
        setPassword('');
        setLogin('');
        dispatch(changeAutorisationModal(!modalState));
        dispatch(changeRegistrationModal(!regModalState))
    };

    return (
        <div className={'modalWindow-container ' + (modalState ? 'show' : 'hidden')}>
            <form onSubmit={handleSubmit} className="modalWindow">
                <div className="modalWindow-title">
                    <p>Autorisation</p>
                    <button onClick={handleClick} type="button" name="cancel">
                        <img src={close} alt="Cancel" />
                    </button>
                </div>
                <input
                    type="login"
                    value={login}
                    className="modalWindow-input"
                    maxLength="15"
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
                <input onClick={handleClick} style={{ marginBottom: '0' }} type="submit" value="log in" />
                {errorMessage && <p style={{ fontSize: '16px', color: '#E32636', margin: '0' }}>{errorMessage}</p>}
                <p onClick={handleClickRegLink} className="modalWindow-reg_button">sign up</p>
                <p style={{ marginBottom: '30px' }}></p>
            </form>
        </div>
    );
}

export default AutorisationModalWindow;