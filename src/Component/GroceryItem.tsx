import React from "react";
import {GroceryItemInterface} from '../App';
type Props = {
    itemToBuy : GroceryItemInterface,
}
const GroceryItem = ({ itemToBuy }: Props) => {
    return (
        <div>
            <p>{itemToBuy.itemName}</p>
            <p>{itemToBuy.number}</p>
        </div>
    ) }
export default GroceryItem;