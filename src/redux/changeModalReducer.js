import { CHANGE_MODAL } from "./type";
import { CHANGE_AUTORISATION_MODAL } from "./type";
import { CHANGE_REGISTRARION_MODAL } from "./type";

const initialState = {
    modalState: false,
    autorisationModalState: false,
    registrationModalState: false
};

export const changeModalReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MODAL:
            return {
                ...state,
                modalState: action.modalState
              };
        case CHANGE_AUTORISATION_MODAL:
        return {
                ...state,
                autorisationModalState: action.modalState
            };
        case CHANGE_REGISTRARION_MODAL:
            return {
                ...state,
                registrationModalState: action.modalState
            };
        default:
            return state;
    }
};
