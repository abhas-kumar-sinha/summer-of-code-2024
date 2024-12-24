import 'boxicons/css/boxicons.min.css';
import PropType from "prop-types";
import { useAppContext } from '../GlobalContext/GlobalContext';

const CheckoutAside = (props) => {

    const {formDataContext} = useAppContext();

    function handleItemDelete(e) {
        const deleteItemName = e.currentTarget.id;
        props.setAddedItems(props.addedItems.filter(item => item.itemName !== deleteItemName))
    }

    function handleQtyDec(e) {
        const itemName = e.currentTarget.id;

        props.setAddedItems((prevItems) =>
            prevItems.map((item) =>
                item.itemName === itemName && item.itemQty>1
                    ? { ...item, itemQty: (parseInt(item.itemQty, 10) - 1).toString() }
                    : item
            )
        );
    }

    function handleQtyInc(e) {
        const itemName = e.currentTarget.id;

        props.setAddedItems((prevItems) =>
            prevItems.map((item) =>
                item.itemName === itemName
                    ? { ...item, itemQty: (parseInt(item.itemQty, 10) + 1).toString() }
                    : item
            )
        );
    }

    function generateItemsListDiv() {

        if (props.addedItems.length === 0) {
            return(
                <>
                <p className='text-secondary mt-5'>Items added to cart will be</p>
                <p style={{marginTop: "-1vw"}} className='text-secondary'>displayed here</p>
                </>
            )
        }

        return props.addedItems.map((addedItem) => {
            return(
                <div key={addedItem.itemName} className="card-wrapper w-100 d-flex align-items-center">
                <div className="card cardCheck mb-2 rounded-4 p-2 ps-1" style={{maxWidth: "540px", backgroundColor: "#fffafa"}}>
                    <div className="row g-0 h-100">
                        <div className="col-md-4">
                            <img src="/favicon.png" className="img-fluid rounded-start" alt="..." height="70" width="70" />
                        </div>
                        <div className="col-md-8">
                            <div style={{marginLeft: "-2.7vw", marginTop: "-1.2vw"}} className="card-body">
                                <h5 className="card-title">{addedItem.itemName.replace("-", " ")}</h5>
                                <p style={{marginTop: "-1vw"}} className="card-text d-flex text-secondary">{addedItem.itemPrice.replace("-", " ")} 
                                    <div style={{height: "26px"}} className='QtyBar rounded-3 d-flex ms-auto'>
                                        <div id={addedItem.itemName} role='button' onClick={(e) => {handleQtyDec(e)}} className="decrementDiv col d-flex align-items-center justify-content-center element-bg fs-6 fw-bold rounded-start user-select-none">
                                           —
                                        </div>
                                        <div className="showValue col d-flex align-items-center justify-content-center user-select-none">
                                            {addedItem.itemQty}
                                        </div>
                                        <div id={addedItem.itemName} role='button' onClick={(e) => {handleQtyInc(e)}} className="incrementDiv col d-flex align-items-center justify-content-center element-bg fs-5 rounded-end user-select-none">
                                            +
                                        </div>
                                    </div>
                                </p>
                                <p style={{marginTop: "-1vw"}} className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <i role='button' id={[addedItem.itemName]} onClick={(e) => handleItemDelete(e)} style={{marginTop: "-1vw"}} className='bx bx-trash ms-3 fs-4 text-danger'></i>
                </div>
            )
        })
    }

    return (
        <div className="CheckoutAside">
            <nav className='navbar navbar-expand-lg bg-white py-3 pb-3 border-bottom'>
            <div className='container w-100'>
                <a className='navbar-brand' href='#'>
                <div className='logo-wrapper px-2 py-1 element-bg rounded-4 fs-4'>
                <i className='bx bxs-notepad'></i>
                </div>
                </a>
                <div style={{marginLeft: "-0.7vw"}} className='text-wrapper'>
                <p className='fs-5 fw-semibold'>{formDataContext.name}</p>
                <p style={{marginTop: "-0.5vw"}} className='small-text'>Order Menu</p>
                </div>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <i className='bx bx-edit ms-auto fs-4 text-secondary me-2'></i>
                <i className='bx bx-dots-vertical-rounded fs-4 text-secondary'></i>
                </div>
            </div>
            </nav>
            <div className="itemsList d-flex align-items-center flex-column justify-content-start py-3  ms-2">
            {generateItemsListDiv()}
            </div>

            <hr />

            <div className="placeOrder mt-4 element-bg px-3 py-2 fs-5 rounded-4 border-black d-flex align-items-center mx-4">
                <div className="message me-auto">
                    <p style={{color: "#ffaf7e"}} className='fs-6 m-0 p-0 text-start'>No of items : {props.addedItems.length}</p>
                    <p style={{marginTop: "-1vw"}} className='fs-5 m-0 p-0'>Total Price</p>
                </div>

                <div className="save-wrapper p-1 pb-0 ms-5 rounded-3 element-bg-reverse btn btn-light">
                <i className='bx bxs-save fs-4'></i>
                </div>
                <button type="button" className="btn btn-light rounded-4 px-4 ms-3">Order</button>
            </div>
        </div>
    )
    }

CheckoutAside.propTypes = {
    addedItems: PropType.arrayOf(PropType.shape({
        itemName: PropType.string,
        itemPrice: PropType.string,
        itemQty: PropType.string,
    })),
    setAddedItems: PropType.func.isRequired,
}

export default CheckoutAside;