import { Button, Col } from 'react-bootstrap';
import search from "./icons/search.png";
import searchWhite from "./icons/searchWhite.png"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findOutSearchValue, pageNumberReset, findOutPageNumbers } from './redux/actions';


function Search() {

    const [searchColor, setSearchColor] = useState(search);
    const [searchValue, setSearchValue] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(findOutSearchValue(searchValue));
        dispatch(findOutPageNumbers());
        dispatch(pageNumberReset());
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const mouseEnter = () =>{
        setSearchColor(searchWhite)
    }

    const mouseOut = () =>{
        setSearchColor(search)
    }
    

    return (
        <Col xs={8}>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange} 
                placeholder='English-German dictionary' 
                type="text" className="search-txt-input" 
                maxLength="15" />

                <Button 
                type="submit"
                className="search-button"
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseOut}>
                    <img src={searchColor} alt="search" className="fa fa-search" />
                </Button>
            </form>
        </Col>
    )
}
export default Search;