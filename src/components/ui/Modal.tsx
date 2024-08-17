import { createPortal } from "react-dom";
import cn from "../../ultis/cn";

function Modal({ isOpen, OnClose, children }) {
  return createPortal(
    <div
      className={cn("invisible z-[999] fixed inset-0 bg-gray-500/70", {
        visible: isOpen,
      })}
    >
      <div className="bg-purple-500 text-white">{children}</div>
    </div>,
    document.getElementById("portal") as Element
  );
}

export default Modal;
