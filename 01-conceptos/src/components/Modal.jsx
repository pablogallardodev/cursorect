import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {

  return (
    <div className="modal-container" style={{ display: isOpen ? 'grid' : 'none' }}>
      <div className="modal-body">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  )
}

export default Modal