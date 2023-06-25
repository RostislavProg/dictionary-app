import { Button } from 'react-bootstrap';
import arrowOrange from "./icons/arrow.png";
import arrowWhite from "./icons/arrowWhite.png";
import { useState } from 'react';
import deleteImg from './icons/delete.png'
import { deleteWord, findOutPageNumbers } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function SingleWord({eng, deut}) {

    const [arrow, setArrow] = useState(arrowOrange);
    const [show, setShow] = useState(false);
    const [turn, setTurn] = useState(false);
    const words = useSelector(state => state.creationWordsReducer.words);
    const deleteMode = useSelector(state => state.creationWordsReducer.deleteMode);

    const dispatch = useDispatch();

    const mouseEnter = () =>{
        setArrow(arrowWhite)
    }

    const mouseOut = () =>{
        setArrow(arrowOrange)
    }

    const handleclick = () =>{
        if(words.length === 1){
            setShow(!show);
            setTurn(!turn);
        }else if(deleteMode){
            dispatch(deleteWord({eng, deut}));
            dispatch(findOutPageNumbers());
        }else{
            setShow(!show);
            setTurn(!turn);
        }
    }

    return (
        <div className="word">
            <p>
                <span>{deut}</span>
                <span style={{padding: '0'}} className={show ? 'show' : 'hidden'}>
                    <span className="word_equals">=</span>
                    <span>{eng}</span>
                </span>
            </p>
            <Button className="arrow_btn" 
            onMouseEnter={mouseEnter} 
            onMouseLeave={mouseOut}
            onClick={handleclick}>
                <img src={deleteMode ? deleteImg : arrow} 
                alt="arrow_img" 
                className="arrow_img" 
                style={{ 
                transform: turn ? 'rotate(180deg)' : undefined,
                transition: '0.4s'}}/>
            </Button>
        </div>
    )
}

export default SingleWord;