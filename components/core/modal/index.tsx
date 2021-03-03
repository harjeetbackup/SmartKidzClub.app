import { IChildren } from 'models';
import ReactModal, { Props } from 'react-modal';
import v from 'styles/variables';
import { CloseButton } from './style';

ReactModal.setAppElement('#__next');

export default function Modal({ children, ...p }: Props & IChildren) {
  return (
    <ReactModal
      {...p}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          padding: 0,
          marginRight: 0,
          border: 'none',
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          background: 'transparent',
          transform: 'translate(-50%, -50%) translateZ(0)',
        },
        overlay: {
          zIndex: v.zIndex.modal,
          backgroundColor: '#2b2b2bab',
        },
      }}
    >
      <CloseButton
        title='Close Modal'
        aria-label='Close Modal'
        onClick={p.onRequestClose}
      >
        ×
      </CloseButton>
      {children}
    </ReactModal>
  );
}
