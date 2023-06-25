import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from "./redux/actions";
import { deleteModeChange } from "./redux/actions";

function ChangeList() {
    
    const modalState = useSelector(state => state.changeModalReducer.modalState);

    const dispatch = useDispatch();

    const handleclickPlus = () => {
        dispatch(changeModal(!modalState));
    };

    const handleclickMinus = () => {
        dispatch(deleteModeChange());
    };

    return (
        <div className="changeList">
            <p className="changeList-title">Change list</p>
            <Button className="plus" onClick={handleclickPlus}>+</Button>
            <span></span>
            <Button className="minus" 
                    onClick={handleclickMinus}>-</Button>
        </div>
    );
}

export default ChangeList;
