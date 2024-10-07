import * as React from 'react';
import Backdrop from '../../Backdrop/Backdrop.tsx';

interface AlertProps {
  type: "primary" | "success" | "danger" | "warning";
  showAlert: boolean;
  onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({type, showAlert, onDismiss}) => {

  return (
    <>
      <Backdrop show={showAlert}></Backdrop>
      <div className='modal show'  style={{display: showAlert ? "block" : "none"}}>
        <div className='modal-dialog'>
          <div className="modal-content">
            <div className={`d-flex justify-content-between rounded-2 bg-${type}`}>
              <p className='m-2 p-2 rounded-2'>This is a {type} type alert</p>
              <button style={{display: onDismiss ? "block" : "none"}} onClick={onDismiss} type='button'
                      className="bg-warning border border-0 rounded-2">
                <svg width="40" height="35" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z"
                    fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Alert;

