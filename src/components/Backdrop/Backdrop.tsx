import * as React from 'react';

interface IBackdropProps {
  show: boolean;
}

const Backdrop:React.FC<IBackdropProps> = ({show}) => {
  return (
    <div
      className="modal-backdrop show"
      style={{display: show ? 'block' : 'none'}}
    />
  );
};

export default Backdrop;