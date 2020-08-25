import { FC, ReactElement, ReactNode } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export type BaseDialogProps = {
  open: boolean;
  title: string;
  handleClose: () => void;
  children: ReactNode;
};

const BaseDialog: FC<BaseDialogProps> = (
  props: BaseDialogProps
): ReactElement => {
  const { open, handleClose, title, children } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
