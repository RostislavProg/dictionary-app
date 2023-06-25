import { useSelector, useDispatch } from 'react-redux';
import { findOutPageNumbers, findOutCurrentNumber } from './redux/actions';
import { useEffect } from 'react';

function PageNumbers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findOutPageNumbers());
  }, []);

  const pageNumbers = useSelector((state) => state.creationWordsReducer.pageNumbers);
  const currentPage = useSelector((state) => state.creationWordsReducer.currentPage);
  const autoWords = useSelector((state) => state.autorisationReducer.words);

  const handleClick = (pageNumber) => {
    dispatch(findOutCurrentNumber(pageNumber));
  };

  useEffect(() => {
    dispatch(findOutPageNumbers());
  }, [autoWords]);

  const getPageNumbers = () => {
    const numbers = [];

    if (pageNumbers <= 5) {
      for (let i = 1; i <= pageNumbers; i++) {
        numbers.push(
          <span
            onClick={() => handleClick(i)}
            key={i}
            className={`pageNumber ${currentPage === i ? "pageNumber-activ" : ""}`}
          >
            {i}
          </span>
        );
      }
    } else {
      numbers.push(
        <span
          onClick={() => handleClick(1)}
          key={1}
          className={`pageNumber ${currentPage === 1 ? "pageNumber-activ" : ""}`}
        >
          {1}
        </span>
      );

      if (currentPage > 3) {
        numbers.push(<span key="ellipsis-start">...</span>);
      }

      let startPage;
      let endPage;
      if (currentPage <= 2) {
        startPage = 2;
        endPage = Math.min(4, pageNumbers - 1);
      } else if (currentPage >= pageNumbers - 1) {
        startPage = Math.max(1, pageNumbers - 3);
        endPage = pageNumbers - 1;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        numbers.push(
          <span
            onClick={() => handleClick(i)}
            key={i}
            className={`pageNumber ${currentPage === i ? "pageNumber-activ" : ""}`}
          >
            {i}
          </span>
        );
      }

      if (endPage < pageNumbers - 1) {
        numbers.push(<span key="ellipsis-end">...</span>);
      }

      numbers.push(
        <span
          onClick={() => handleClick(pageNumbers)}
          key={pageNumbers}
          className={`pageNumber ${currentPage === pageNumbers ? "pageNumber-activ" : ""}`}
        >
          {pageNumbers}
        </span>
      );
    }

    return numbers;
  };

  return (
    <div style={{
      WebkitUserSelect: 'none', /* Safari */
      MozUserSelect: 'none', /* Firefox */
      msUserSelect: 'none', /* IE10+/Edge */
      userSelect: 'none' /* Standard */
    }} className="pageNumbers">
      {getPageNumbers()}
    </div>
  );
}

export default PageNumbers;