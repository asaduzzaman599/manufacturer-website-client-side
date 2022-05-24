import React from 'react';

const DeleteConfirmModal = ({ selectedProduct, children }) => {
    return (
        <>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{selectedProduct?.name}</h3>
                    <p className="py-4">Are you sure you want to delete this?</p>
                    <div className="modal-action">
                        {children}
                        <label for="delete-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmModal;