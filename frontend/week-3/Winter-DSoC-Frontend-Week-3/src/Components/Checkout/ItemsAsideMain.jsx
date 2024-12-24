import PropType from 'prop-types';
import { useState } from 'react';
import BootstrapToast from '../Toast/BootstrapToast';

const ItemsAside = (props) => {

    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const [isActiveItem, setIsActiveItem] = useState(props.asideData.elements[0].replace(" ", "-"));

    function handleItemClick(e) {
        setIsActiveItem(e.currentTarget.id);
    }

    function generateAsideItems() {
        if (props.asideData.elements.length === 0) {
            return(
                <p>
                    Add Elements
                </p>
            )
        }

        return props.asideData.elements.map((ele) => {
            const newEle = ele.replace(" ", "-");
            return(
                <div 
                onClick={(e) => handleItemClick(e)} 
                key={newEle} 
                id={newEle} 
                className={
                    isActiveItem === newEle?   "categories w-100 d-flex align-items-center mb-2 itemActive" : 
                                            "categories w-100 d-flex align-items-center mb-2"
                }
                >
                    <div
                    className="categories-h-line h-100"></div>
                    <p 
                    className="ms-4 fs-6 item-text-color mt-3">{ele}</p>
                </div>
            )
        })
    }

    function handleCardClick(e) {
        const arrayData = e.currentTarget.id.split(",")
        const itemExists = props.addedItems.some((item) => item.itemName === arrayData[0]);

        if (!itemExists){
            props.setAddedItems((prevItems) => [
                ...prevItems,
                {itemName: arrayData[0],
                itemPrice: arrayData[1],
                itemQty: "1",
                },
            ])
        }
        else{
        setToastMsg("Item has already been added!");
        setShowToast(true);
        }
    }

    function generateItemCards() {
        
        const cardObjects = props.asideData[isActiveItem];

        return cardObjects.map((card) => {
            return(
                <>
                <div 
                key={card.itemName.replace(" ", "-")}
                id={[card.itemName.replace(" ", "-"), card.itemPrice.replace(" ", "-")]}
                onClick={(e) => handleCardClick(e)}
                className="col-sm-3 mb-3 mb-sm-0"
                >
                    <div className="card cardMy p-2" style={{width: "100%"}}>
                    <img src="/favicon.png" className="card-img-top" alt="..." height="70" width="30" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{card.itemName}</h5>
                        <p style={{marginTop: "-0.5vw"}} className="card-text text-center">{card.itemPrice}</p>
                    </div>
                    </div>
                </div>
                </>
            )
        })
    };

    return (
        <div className="itemsAsideMain d-flex">

        <BootstrapToast
            message={toastMsg}
            show={showToast}
            onClose={() => setShowToast(false)}
        />

        <div className="ItemsAside">
            <div className="asideHead d-flex align-items-center pt-3 px-2">
            <i className='bx bx-store text-color fs-4'></i>
            <span className="text-uppercase item-text-color fs-5 fw-semibold ms-2">{props.asideData.Head}</span>
            </div>
            <hr className="itemsAsideHr mt-1 mb-0"/>
            <div className="items-wrapper w-100">
                {generateAsideItems()}
            </div>
        </div>

        <div className="itemCard-holder w-75 pt-3">
            <div className="row container-fluid ms-0">
                {generateItemCards()}
            </div>
        </div>
        </div>
    )
}

ItemsAside.propTypes = {
    asideData: PropType.shape({
        Head: PropType.string,
        elements: PropType.arrayOf(PropType.string),
        "Category-1": PropType.arrayOf(PropType.shape({
            itemName: PropType.string,
            itemPrice: PropType.string,
        })),
        "Category-2": PropType.arrayOf(PropType.shape({
            itemName: PropType.string,
            itemPrice: PropType.string,
        })),
        "Category-3": PropType.arrayOf(PropType.shape({
            itemName: PropType.string,
            itemPrice: PropType.string,
        })),
        "Category-14": PropType.arrayOf(PropType.shape({
            itemName: PropType.string,
            itemPrice: PropType.string,
        })),
        isActiveItem: PropType.string,
    }),
    addedItems: PropType.arrayOf(PropType.shape({
        itemName: PropType.string,
        itemPrice: PropType.string,
        itemQty: PropType.string,
    })),
    setAddedItems: PropType.func.isRequired,
}

export default ItemsAside