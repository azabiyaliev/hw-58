import Modal from './components/Modal/Modal.tsx';
import { useState } from 'react';



const App = () => {

  const [showModal, setShowModal] = useState<boolean>(true);
  const Cancel = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Modal
        show={showModal}
        onClose={Cancel}
        title='Some kinda modal title'
      >
        <p className="mx-2 mt-2">This is modal content</p>
      </Modal>
    </>
  );
};

export default App;
