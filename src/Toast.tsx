import React, { useState } from 'react';
import './Toast.css';
import Flash from './icons/Flash';

interface ToastProps {
  message: string;
  onConfirm: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onConfirm }) => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false);
    onConfirm();
  };

  return (
    <div className={`toast ${showToast ? 'show' : ''}`}>
      <div className="toast-content">
        <Flash/>
        <div className='toast-text-container'>
        <div className="toast-title">Toast title</div> 
        <div className="toast-description">
          Long details go here after the title, long details go here after the title
        </div>
        <div className="toast-buttons">
          <button className='toast-button-1' onClick={handleClose}>Button</button>
          <button className='toast-button-2' onClick={handleClose}>Button</button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Toast;
