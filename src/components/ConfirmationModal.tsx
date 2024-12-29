import BasicModalCard from './BasicModalCard';
import { Label } from './Typography';

type TConfirmationModalProps = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  onClose: () => void;
  contentText: string;
  confirmText?: string;
  cancelText?: string;
};

const ConfirmationModal = (confirmationModalProps: TConfirmationModalProps) => {
  return (
    <BasicModalCard
      title={confirmationModalProps.title}
      onCancel={confirmationModalProps.onCancel}
      onConfirm={confirmationModalProps.onConfirm}
      isOpen={confirmationModalProps.isOpen}
      onClose={confirmationModalProps.onClose}
      confirmText={confirmationModalProps.confirmText}
      cancelText={confirmationModalProps.cancelText}
    >
      <Label
        size='xl'
        className='overflow-hidden whitespace-normal break-words text-center'
        text={confirmationModalProps.contentText}
      />
    </BasicModalCard>
  );
};

export default ConfirmationModal;
