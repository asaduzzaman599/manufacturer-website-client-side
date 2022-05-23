import React from 'react';

const OrderDeleteConfirmModal = ({ children, selectedOrder }) => {
    return (
        <>
            <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{selectedOrder?.product}</h3>
                    <p class="py-4">Are you sure you want to delete this {selectedOrder?.product} Order?</p>
                    <div class="modal-action">
                        {children}
                        <label for="delete-order-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteConfirmModal;