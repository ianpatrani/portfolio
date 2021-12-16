import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Popup extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {

    const modalStyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    const image = {
      left: '50px',
      height: '300px'
    }
    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button onClick={this.abrirModal}>About me</Button>

          </div></div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            <img style={image} src='https://media-exp1.licdn.com/dms/image/C4E03AQHcN7ovgQ-BxQ/profile-displayphoto-shrink_800_800/0/1630611335419?e=1645056000&v=beta&t=yQn2iTIb8iCWF1BRQRcIiM9Yp4qCmTeV3UmQy2Y76o8'></img>
          </ModalHeader>
          <ModalBody>
            <FormText>
              <ul>
                <li><a className="anchor" href="https://www.linkedin.com/in/inp/">https://www.linkedin.com/in/inp/</a></li>
                <li><a className="anchor" href="https://github.com/ianpatrani/">https://github.com/ianpatrani/</a></li>
                <li><a className="anchor" href="iannpatrani@gmail.com">iannpatrani@gmail.com</a></li>
              </ul>
            </FormText>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default Popup;