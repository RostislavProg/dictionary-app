import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';



function Random() {

    const words = useSelector(state => state.creationWordsReducer.words);

    const [randomWord, setRandomWord] = useState('');
    const [click, setClick] = useState(0);

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * words.length);
        let randomWord = words[randomIndex];
        setRandomWord(randomWord);
    }, [click, words])

    const handleClick = () => {
        setClick(click + 1);
      };

    return (
        <div className="randomWord">
            <p className="randomWord-title">Random word</p>
            <div className="randomWord-main">
                <p>{randomWord.deut}</p>
                <p className="randomWord-main_equals">=</p>
                <p>{randomWord.eng}</p>
            </div>
            <Button onClick={handleClick}>next</Button>
        </div>
    )
}
export default Random;