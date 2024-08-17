import { createPortal } from "react-dom";
import cn from "../../ultis/cn";
import { useRef, ReactNode, createContext, useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalContextType {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "invisible flex justify-center items-center z-[999] fixed inset-0 bg-gray-500/70",
          {
            visible: isOpen,
          }
        )}
        onClick={handleModalClose}
      >
        <div
          ref={containerRef}
          className="bg-white p-7 w-full rounded-lg max-w-sm"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
}

interface CloseButtonProps {
  children?: ReactNode;
}

const CloseButton = ({ children }: CloseButtonProps) => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("CloseButton must be used within a Modal");
  }

  const { onClose } = context;

  return (
    <div className="ml-auto">
      {children ? (
        children
      ) : (
        <IoCloseCircleOutline
          onClick={onClose}
          className="text-4xl font-semibold hover:text-red-500"
        />
      )}
    </div>
  );
};

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex w-full justify-between mb-3 items-center">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
