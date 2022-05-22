import React from 'react';

const DeleteConfirmModal = ({ selectedProduct, children }) => {
    return (
        <>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{selectedProduct?.name}</h3>
                    <p class="py-4">Are you sure you want to delete this product?</p>
                    <div class="modal-action">
                        {children}
                        <label for="delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmModal;