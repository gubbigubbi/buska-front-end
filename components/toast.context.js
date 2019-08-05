import React, { Component } from 'react';
import Toast from './toast';
const ToastContext = React.createContext();

export default class ToastProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: 'this is the toast message',
    };
  }

  openToast = message => {
    this.setState({
      message,
      isOpen: true,
    });

    this.toastTimeout();
  };

  closeToast = () => {
    this.setState({
      message: '',
      isOpen: false,
    });
  };

  toastTimeout = () => {
    setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    }, 4000);
  };

  render() {
    const { children } = this.props;

    return (
      <ToastContext.Provider
        value={{
          openToast: this.openToast,
          closeToast: this.closeToast,
          ToastIsOpen: this.state.isOpen,
          message: this.state.message,
        }}
      >
        <Toast />
        {children}
      </ToastContext.Provider>
    );
  }
}

export const ToastConsumer = ToastContext.Consumer;
