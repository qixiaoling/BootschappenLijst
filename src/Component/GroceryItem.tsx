import React from "react";
import {GroceryItemInterface} from '../App';
type Props = {
    itemToBuy : GroceryItemInterface,
    deleteItem (name: string) : void;/*let op! Made a mistake*/
}
const GroceryItem = ({ itemToBuy, deleteItem}: Props) => {
    return (
        <div className="Grocery-list-content">
                <p>{itemToBuy.itemName}</p>
                <p>{itemToBuy.number}</p>
                <button className='check-btn'>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">Gedaan</label>
                </button >
                <button className='delete-btn' onClick={()=> deleteItem(itemToBuy.itemName)}>
                    <i className="fas fa-times"></i>
                </button>

        </div>
    ) }
export default GroceryItem;