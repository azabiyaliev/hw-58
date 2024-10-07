import Modal from './components/Modal/Modal.tsx';
import { useState } from 'react';
import Alert from './components/UI/Alert/Alert.tsx';

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const cancel = () => {
    setShowModal(!showModal);
  }

  const modalBtn = () => {
    setShowModal(!showModal);
  };

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const cancelAlert = () => {
    setShowAlert(!showAlert);
  }

  const firstAlertBtn = () => {
    setShowAlert(!showAlert);
    console.log('btn clicked');
  }
  const [showSecondAlert, setShowSecondAlert] = useState<boolean>(false);
  const secondAlertBtn = () => {
    setShowSecondAlert(!showSecondAlert);
  }

  return (
    <>
      <Modal
        show={showModal}
        onClose={cancel}
        title='Some kinda modal title'
      >
        <p className="mx-2 mt-2">This is modal content</p>
        <div>

        </div>
      </Modal>
      <button onClick={modalBtn} type='button' className='btn btn-secondary m-4'>Modal</button>
      <button onClick={firstAlertBtn} type='button' className='btn btn-secondary m-4'>First Alert</button>
      <button onClick={secondAlertBtn} type='button' className='btn btn-secondary m-4'>Second Alert</button>
      <Alert
        type='warning'
        showAlert={showAlert}
        onDismiss={cancelAlert}
      />
      <Alert
        type='success'
        showAlert={showSecondAlert}
      />
    </>
  );
};

export default App;
