import { Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAutorisationModal } from "./redux/actions";

function Autorisation() {

    const modalState = useSelector(state => state.changeModalReducer.modalState);
    const currentAccount = useSelector(state => state.autorisationReducer.currentAccount); 
    const accounts = useSelector(state => state.autorisationReducer.accounts); 

    const dispatch = useDispatch();

    const handleclick = () => {
        dispatch(changeAutorisationModal(!modalState));
    };


    return (
        <Col xs={4} className="user">
                <p>{accounts[currentAccount].name}</p>
                <Button onClick={handleclick}>log in</Button>
        </Col>
    )
}
export default Autorisation;