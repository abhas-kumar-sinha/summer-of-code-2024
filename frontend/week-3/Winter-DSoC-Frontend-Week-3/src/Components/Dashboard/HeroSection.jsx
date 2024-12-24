import { useState } from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import BootstrapToast from '../Toast/BootstrapToast';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../GlobalContext/GlobalContext.jsx';

const HeroSection = (props) => {
    const {formDataContext, setFormDataContext} = useAppContext();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const navigate = useNavigate();

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handlePhoneNumberChange(e){
        setPhoneNumber(e.target.value);
    }

    function handleAddressChange(e){
        setAddress(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setToastMsg("Data Updated Sucessfully!");
        setShowToast(true);
        props.setFormData({name, phoneNumber, address})
        setFormDataContext({name, phoneNumber, address})
        setName("")
        setPhoneNumber("")
        setAddress("")
    }

    function handleCheckout(){
        navigate("/Checkout")
    }

    function getUserDetails() {
        if (formDataContext.name === '') {
            return(
                <>
                    <p className="text-secondary">Enter customer details</p>
                    <p className="text-secondary" style={{marginTop: "-1rem"}}>to proceed to checkout</p>
                </>
            )
        }

        return(
            <form style={{opacity: "1"}}>
                <p className="fs-3 text-color mt-3 mb-3 font-monospace text-uppercase text-center">Details Entered</p>
                <hr className="mb-3" />
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-uppercase text-color fs-5 fw-semibold">Name</label>
                <div disabled type="email" className="form-control element-bg fw-semibold py-2" id="exampleFormControlInput1">{formDataContext.name}</div>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-uppercase text-color fs-5 fw-semibold">Phone Number</label>
                <div disabled type="email" className="form-control element-bg fw-semibold py-2" id="exampleFormControlInput1">{formDataContext.phoneNumber}</div>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-uppercase text-color fs-5 fw-semibold">Address</label>
                <div disabled type="email" className="form-control element-bg fw-semibold py-2" id="exampleFormControlInput1">{formDataContext.address}</div>
                </div>
                <button
                className='btn-color btn mt-5 mb-4 px-3 fs-5 rounded-3 border-black'
                type='button'
                onClick={() => handleCheckout()}
                >
                Proceed to Checkout <span>→</span>
                </button>
            </form>
        )
    }

  return (
    <div className="hero-section p-4 d-flex gap-3">
    <BootstrapToast
        message={toastMsg}
        show={showToast}
        onClose={() => setShowToast(false)}
    />
    <div className="form-wrapper rounded-4 px-5 bg-white h-100 " style={{ width: "68%" }}>
      <p className="fs-1 text-color mt-4 mb-3 font-monospace text-uppercase">Customer Details</p>
      <hr className="mb-4" />

      <form onSubmit={(e) => handleFormSubmit(e)} id="contact-form-submit">
        <div className="mb-4 row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label fs-4 element-color space-letters text-uppercase">Name*</label>
          <div className="col-sm-8">
            <input type="text" value={name} onChange={(e) => handleNameChange(e)} maxLength="25" className="form-control form-input-bg mt-2" id="inputName" required/>
          </div>
        </div>

        <div className="mb-4 row">
          <label htmlFor="inputPhone" className="col-sm-4 col-form-label fs-4 element-color space-letters text-uppercase">Mobile*</label>
          <div className="col-sm-8">
            <input type="number" value={phoneNumber} onChange={(e) => handlePhoneNumberChange(e)} maxLength="10" className="form-control form-input-bg mt-2" id="inputPhone" required />
          </div>
        </div>

        <div className="mb-4 row">
          <label htmlFor="inputAddress" className="col-sm-4 col-form-label fs-4 element-color space-letters text-uppercase">Address</label>
          <div className="col-sm-8">
            <textarea value={address} onChange={(e) => handleAddressChange(e)} className="form-control form-input-bg mt-2" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>
        </div>

        <div className="submit-wrapper mt-4 w-100 d-flex align-items-end text-secondary">
          <span className="fs-6 mt-3">
            (*) marked fields are mandatory
          </span>
          <button type="submit" className="btn text-uppercase ms-auto mt-3 px-5 fs-5 btn-color hover-opacity">Go</button>
        </div>
      </form>
    </div>

    <div className="hero-section-aside rounded-4 h-100 d-flex flex-column align-items-center justify-content-center" style={{width: "32%", backgroundColor: "var(--element-color-opacity)"}}>
        {getUserDetails()}
    </div>
  </div>
  )
}

HeroSection.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number,
    address: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default HeroSection