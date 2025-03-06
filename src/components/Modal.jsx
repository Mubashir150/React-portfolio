import { useRef, useImperativeHandle, forwardRef } from 'react';


const Modal = forwardRef(function Modal({ title, description, video }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }));

    return (
        <dialog id="dialog-box" ref={dialog}>
            <h2>{title}</h2>
            <video controls width="650" loop>
                <source src={video} type='video/mp4'/>
            </video>
            <p>{description}</p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default Modal;