import { Dialog, Transition } from '@headlessui/react';
import {
  FC,
  Fragment,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import Button from '../Button/Button';

export interface IModal {
  renderContent: () => ReactNode;
  renderTrigger?: (openModal: () => void) => ReactNode;
  contentExtraClass?: string;
  contentPaddingClass?: string;
  triggerText?: ReactNode;
  modalTitle?: ReactNode;
  isOpenProp?: boolean;
  onCloseModal?: () => void;
  disableCrossIcon?: boolean;
}

const Modal: FC<IModal> = ({
  renderTrigger,
  renderContent,
  contentExtraClass = 'max-w-screen-xl',
  contentPaddingClass = 'py-4 px-6 md:py-5',
  triggerText = 'Open Modal',
  modalTitle = 'Modal title',
  isOpenProp,
  onCloseModal,
  disableCrossIcon = false,
}) => {
  const [isOpen, setIsOpen] = useState(!!isOpenProp);

  function closeModal() {
    if (typeof isOpenProp !== 'boolean') {
      setIsOpen(false);
    }
    onCloseModal && onCloseModal();
  }

  function openModal() {
    if (typeof isOpenProp !== 'boolean') {
      setIsOpen(true);
    }
  }

  useLayoutEffect(() => {
    if (!isOpenProp) {
      document.documentElement.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('padding-right');
    }
  }, [isOpenProp]);

  useEffect(() => {
    setIsOpen(!!isOpenProp);
  }, [isOpenProp]);

  return (
    <div className='nc-NcModal'>
      {renderTrigger ? (
        renderTrigger(openModal)
      ) : (
        <Button onClick={openModal}> {triggerText} </Button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-1 text-center md:px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-75'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-75'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80' />
            </Transition.Child>

            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-75'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-75'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div
                className={`inline-block w-full my-5 text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 ${contentExtraClass}`}
              >
                <div className='py-4 px-6 text-start relative pb-0 border-neutral-100 dark:border-neutral-700 md:py-5'>
                  {modalTitle && (
                    <Dialog.Title
                      as='h3'
                      className='text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200'
                    >
                      {modalTitle}
                    </Dialog.Title>
                  )}
                </div>
                <div className={contentPaddingClass}>{renderContent()}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
