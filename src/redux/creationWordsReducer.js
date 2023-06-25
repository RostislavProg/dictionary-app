import { initialState as autorisationInitialState } from './autorisationReducer';

import { CREATION_WORDS } from "./type"
import { ADD_WORD } from "./type"
import { DELETE_WORD } from "./type"
import { DELETE_MODE } from "./type"
import { PAGE_NUMBERS } from "./type"
import { PAGE_NUMBER } from "./type"
import { PAGE_SLICES } from "./type"
import { SEARCH_FILTER } from "./type"
import { NEW_WORDS_LIST } from "./type"
import { PAGE_RESET } from "./type"




const initialState = {
    words: autorisationInitialState.words,
    deleteMode: false,
    pageNumbers: 1,
    currentPage: 1,
    pageSlice: [],
    searchValue: "",
    filteredWordsList: []
  };
  
export const creationWordsReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATION_WORDS:
            return {
                ...state,
                words: action.autoWords
            }
        case ADD_WORD:
            return {
                ...state,
                words: state.words.concat(action.word)
            }
        case DELETE_WORD:
            return {
                ...state,
                words: state.words.filter(word => word.eng + word.deut !== action.word.eng + action.word.deut)
            };
        case DELETE_MODE:
            return {
                ...state,
                deleteMode: !state.deleteMode
            };
        case PAGE_NUMBERS:
            return {
                ...state,
                pageNumbers: Math.ceil(state.words.length/8)
            };
        case PAGE_NUMBER:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case PAGE_SLICES:

            const startIndex = (state.currentPage - 1) * 8;
            const endIndex = startIndex + 8;
            const itemsOnCurrentPage = state.words.slice(startIndex, endIndex);

            return {
                ...state,
                pageSlice: itemsOnCurrentPage
            };
        case SEARCH_FILTER:
            return {
                ...state,
                searchValue: action.searchValue
            };
        case NEW_WORDS_LIST:
            const startNewIndex = (state.currentPage - 1) * 8;
            const endNewIndex = startNewIndex + 8;
            const itemsOnNewCurrentPage = state.filteredWordsList.slice(startNewIndex, endNewIndex);

            return {
                ...state,
                filteredWordsList: action.wordsList,
                pageSlice: itemsOnNewCurrentPage,
                pageNumbers: Math.ceil(state.filteredWordsList.length/8)
            };
        case PAGE_RESET:
            return {
                ...state,
                currentPage: 1
            };
        default:
            return state;
    }
};
