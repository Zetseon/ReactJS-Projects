import { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
	const [showModal, setShowModal] = useState(false);
	
	function handleDelete() {
		setShowModal(true);
	}
	function handleCancel() {
		setShowModal(false);
	}

	function handleConfirmDelete() {
		props.onDelete(); // Call the onDelete callback received from the parent component
		setShowModal(false);
	  }
	return (
		<div className="card">
			<h2>{props.name}</h2>
			<div className="actions">
				<button className="btn" onClick={handleDelete}>Delete</button>
			</div>
			{showModal && <Modal onCancel={handleCancel} onDelete={handleConfirmDelete} />}
			{showModal && <Backdrop onCancel={handleCancel} />}
	
		</div>
	);
}
export default Todo;
