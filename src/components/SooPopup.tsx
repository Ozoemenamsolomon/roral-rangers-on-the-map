import React, { MouseEventHandler, ReactElement, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export interface SooPopupProps {
  trigger: ReactElement;
  btns: { handler: MouseEventHandler; content: String }[];
}

const SooPopup: React.FC<SooPopupProps> = ({ btns, children, trigger }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <Popup
        open={open}
        closeOnDocumentClick
        trigger={trigger}
        onClose={closeModal}
        position="right center"
      >
        <div>{children}</div>
        {btns.map((btn, id) => {
          const { handler } = btn;
          return (
            <button key={id} onClick={handler}>
              {btn.content}
            </button>
          );
        })}
      </Popup>
    </div>
  );
};

export default SooPopup;
