import { Container, Row, Col } from 'react-bootstrap';

import Search from "./Search";
import Autorisation from "./Autorisation";
import Words from "./Words";
import Random from "./Random";
import ChangeList from "./ChangeList"
import PageNumbers from './PageNumbers';
import ModalWindow from './ModalWindow';
import AutorisationModalWindow from './AutorisationModalWindow';
import RegistrationModalWindow from './RegistrationModalWindow';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <section>
      <Container>
        <Row className='nav'>
          <Search />
          <Autorisation />
        </Row>
        <Row>
          <Col xs={8}>
            <Words />
            <PageNumbers/>
          </Col>
          <Col xs={4}>
            <Random />
            <ChangeList />
          </Col>
        </Row>
      </Container>
      <ModalWindow />
      <AutorisationModalWindow />
      <RegistrationModalWindow />
    </section>
  );
}

export default App;
