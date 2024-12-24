import { useState } from "react"
import NavBar from "../Dashboard/NavBar"
import "./Checkout.css"
import CheckoutAside from "./CheckoutAside"
import ItemsAsideMain from "./ItemsAsideMain"

const Checkout = () => {

    const [addedItems, setAddedItems] = useState([])

    const categories = {
                        Head: "Category",
                        elements: ["Category 1", "Category 2", "Category 3", "Category 4"],
                        "Category-1": Array.from({ length: 7 }, (_, i) => ({
                            itemName: `Item ${i + 1}`,
                            itemPrice: `Price ${i + 1}`,
                        })),
                        "Category-2": Array.from({ length: 4 }, (_, i) => ({
                            itemName: `Item ${i + 8}`,
                            itemPrice: `Price ${i + 8}`,
                        })),
                        "Category-3": Array.from({ length: 10 }, (_, i) => ({
                            itemName: `Item ${i + 12}`,
                            itemPrice: `Price ${i + 12}`,
                        })),
                        "Category-4": Array.from({ length: 20 }, (_, i) => ({
                            itemName: `Item ${i + 22}`,
                            itemPrice: `Price ${i + 22}`,
                        })),
    }

    return (
        <div className="d-flex">
        <div className="navBarCheckout">
            <NavBar buttonValue={"←"} navigationValue={"/Dashboard"} />
            <div className="checkoutHero">
            <ItemsAsideMain asideData = {categories} setAddedItems={setAddedItems} addedItems={addedItems}/>
            </div>
        </div>
        <CheckoutAside setAddedItems={setAddedItems} addedItems={addedItems} />
        </div>
    )
}

export default Checkout