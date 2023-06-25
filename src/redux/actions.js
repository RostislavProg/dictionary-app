import { CREATION_WORDS } from "./type"
import { ADD_WORD } from "./type"
import { CHANGE_MODAL } from "./type"
import { DELETE_WORD } from "./type"
import { DELETE_MODE } from "./type"
import { PAGE_NUMBERS } from "./type"
import { PAGE_NUMBER } from "./type"
import { PAGE_SLICES } from "./type"
import { SEARCH_FILTER } from "./type"
import { NEW_WORDS_LIST } from "./type"
import { CHANGE_AUTORISATION_MODAL } from "./type"
import { CURRENT_ACCOUNT } from "./type"
import { AUTORIZATION } from "./type"
import { REGISTRATION } from "./type"
import { CHANGE_REGISTRARION_MODAL } from "./type"
import { UPDATE_DATA } from "./type"
import { PAGE_RESET } from "./type"


export function createWords(autoWords){
    return{
        type: CREATION_WORDS,
        autoWords
    }
}

export function addWord(word){
    return{
        type: ADD_WORD,
        word
    }
}

export function deleteWord(word){
    return{
        type: DELETE_WORD,
        word
    }
}

export function changeModal(modalState){
    return{
        type: CHANGE_MODAL,
        modalState
    }
}

export function changeAutorisationModal(modalState){
    return{
        type: CHANGE_AUTORISATION_MODAL,
        modalState
    }
}

export function changeRegistrationModal(modalState){
    return{
        type: CHANGE_REGISTRARION_MODAL,
        modalState
    }
}

export function deleteModeChange(){
    return{
        type: DELETE_MODE
    }
}

export function findOutPageNumbers(){
    return{
        type: PAGE_NUMBERS
        
    }
}

export function findOutCurrentNumber(pageNumber){
    return{
        type: PAGE_NUMBER,
        pageNumber
    }
}

export function findOutPageSlices(){
    return{
        type: PAGE_SLICES
    }
}

export function findOutSearchValue(searchValue){
    return{
        type: SEARCH_FILTER,
        searchValue
    }
}

export function findOutnewWordsList(wordsList){
    return{
        type: NEW_WORDS_LIST,
        wordsList
    }
}

export function changeCurrentAccount(currentAccount){
    return{
        type: CURRENT_ACCOUNT,
        currentAccount
    }
}

export function authorization(login){
    return{
        type: AUTORIZATION,
        login
    }
}

export function registration(login, password){
    return{
        type: REGISTRATION,
        login,
        password
    }
}

export function updateData(words, currentAccount){
    return{
        type: UPDATE_DATA,
        words,
        currentAccount
    }
}

export function pageNumberReset(){
    return{
        type: PAGE_RESET
    }
}










