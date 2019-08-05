import React from 'react';
import { ToastConsumer } from './toast.context';

const Toast = () => (
  <ToastConsumer>
    {({ ToastIsOpen, message }) => (
      <React.Fragment>
        <div className={ToastIsOpen ? 'toast is-open' : 'toast'}>{message}</div>
        <style jsx>{`
          .toast {
            position: fixed;
            bottom: 20px;
            right: 50%;
            z-index: 10;
            transform: translateX(50%);
            opacity: 0;
            background-color: #8660fe;
            border-radius: 4px;
            color: #fff;
            padding: 0.5rem;
            transition: all 0.4s ease;
          }
          .toast.is-open {
            opacity: 1;
          }
        `}</style>
      </React.Fragment>
    )}
  </ToastConsumer>
);

export default Toast;
