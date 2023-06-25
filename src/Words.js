import SingleWord from './SingleWord';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findOutPageSlices, findOutnewWordsList, changeCurrentAccount, createWords } from './redux/actions';

function Words() {
  const words = useSelector(state => state.creationWordsReducer.words);
  const autoWords = useSelector(state => state.autorisationReducer.words);
  const pageSlice = useSelector(state => state.creationWordsReducer.pageSlice);
  const currentPage = useSelector(state => state.creationWordsReducer.currentPage);
  const searchValue = useSelector(state => state.creationWordsReducer.searchValue);
  const currentAccount = useSelector(state => state.autorisationReducer.currentAccount); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createWords(autoWords));
  }, [autoWords, currentAccount ])

  useEffect(()=>{
    dispatch(findOutPageSlices());
    
    const filteredWords = words.filter(
      word =>
        word.eng.toLowerCase().includes(searchValue.toLowerCase()) ||
        word.deut.toLowerCase().includes(searchValue.toLowerCase())
    );
    if(filteredWords.length !== words.length){  
        dispatch(findOutnewWordsList(filteredWords));
    }
  }, [words, currentPage, searchValue])

  useEffect(()=>{
    const filteredWords = words.filter(
      word =>
        word.eng.toLowerCase().includes(searchValue.toLowerCase()) ||
        word.deut.toLowerCase().includes(searchValue.toLowerCase())
    );
    if(filteredWords.length !== words.length){  
        dispatch(findOutnewWordsList(filteredWords));
    }
  }, [searchValue])

  return (
    <div className="words">
      {pageSlice.map(res => {
        const eng = res.eng;
        const deut = res.deut;
        return <SingleWord key={eng} eng={eng} deut={deut} />;
      })}
    </div>
  );
}

export default Words;