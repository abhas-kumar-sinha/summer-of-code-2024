import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

const BootstrapToast = ({ message, show, onClose }) => {
    return (
        show && (
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="/favicon.png" className="rounded me-2" alt="..." height="30" width="30" />
                        <strong className="me-auto">Notification</strong>
                        <small>just now</small>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="toast-body">{message}</div>
                </div>
            </div>
        )
    );
};

BootstrapToast.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.bool.isRequired,
}

export default BootstrapToast;
