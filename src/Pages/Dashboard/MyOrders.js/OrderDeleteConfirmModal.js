import React from 'react';

const OrderDeleteConfirmModal = ({ children, selectedOrder }) => {
    return (
        <>
            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{selectedOrder?.product}</h3>
                    <p className="py-4">Are you sure you want to delete this {selectedOrder?.product} Order?</p>
                    <div className="modal-action">
                        {children}
                        <label htmlFor="delete-order-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteConfirmModal;