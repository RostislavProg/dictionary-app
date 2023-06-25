import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeModal } from "./redux/actions";
import { addWord, findOutPageNumbers } from "./redux/actions";
import close from './icons/close.png';

function ModalWindow() {
    const [eng, setEng] = useState('');
    const [deut, setDeut] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const words = useSelector(state => state.creationWordsReducer.words);
    const modalState = useSelector(state => state.changeModalReducer.modalState);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeModal(!modalState));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isWordExists = words.some((word) => {
            return word.eng.toLowerCase() === eng.toLowerCase() || word.deut.toLowerCase() === deut.toLowerCase();
        });

        if (isWordExists) {
            setErrorMessage('Word already exists');
            dispatch(changeModal(!modalState));
        } else if (!eng || !deut) {
            setErrorMessage('Please fill in all fields');
            dispatch(changeModal(!modalState));
        } else {
            setErrorMessage('');
            setEng('');
            setDeut('');
            dispatch(addWord({ eng, deut }));
            dispatch(findOutPageNumbers());
        }
    };

    const onChangeEng = (event) => {
        setEng(event.target.value);
    };

    const onChangeDeut = (event) => {
        setDeut(event.target.value);
    };

    return (
        <div className={'modalWindow-container ' + (modalState ? 'show' : 'hidden')}>
            <form onSubmit={handleSubmit} className="modalWindow">
                <div className="modalWindow-title">
                    <p>Change List</p>
                    <button onClick={handleClick} type="button" name="cancel">
                        <img src={close} alt="Cancel" />
                    </button>
                </div>
                <input
                    type="text"
                    value={deut}
                    className="modalWindow-input"
                    maxLength="15"
                    placeholder="German word"
                    onChange={onChangeDeut}
                />
                <input
                    type="text"
                    value={eng}
                    className="modalWindow-input"
                    maxLength="15"
                    placeholder="English word"
                    onChange={onChangeEng}
                />
                <input onClick={handleClick} type="submit" value="Add word" />
                {errorMessage && <p style={{ fontSize: '16px', color: '#E32636' }}>{errorMessage}</p>}
                <p style={{ marginBottom: '30px' }}></p>
            </form>
        </div>
    );
}

export default ModalWindow;