import React, {ChangeEvent, useState} from 'react';
import './App.css';
import GroceryItem from "./Component/GroceryItem";

export interface GroceryItemInterface  {
    itemName: string;
    number: number;
}

const App: React.FC =()=> {
    const [item, setItem] = useState<string>("");
    const [number, setNumber] = useState<number>(0);
    const [groceryList, setGroceryList] = useState<GroceryItemInterface[]>([]);

    const handleChange  = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "item") {
            setItem(e.target.value);
        }else {
            setNumber(Number(e.target.value));
        }
    }
    const handleAdd = ():void => {
        const newItem = {itemName: item, number : number};
        setGroceryList([...groceryList, newItem]);
        setItem("");
        setNumber(0);
        console.log(groceryList)
    }
    const deleteItem = (name: string):void => {/*let op! Made a mistake*/
        const newList = groceryList.filter((item)=> item.itemName !== name);
        setGroceryList(newList);/*let op! Made a mistake*/
    }
    return (
        <div className="App-container">
            <div className="App-content">
                <h2>Bootschappen Lijstje</h2>
                <div className="form-container">
                    <input type="text"
                           value={item}
                           placeholder="e.g. eieren"
                           className="item"
                           name="item"
                        onChange={handleChange}
                    />
                    <input type="text"
                           value={number}
                           placeholder="Aantal"
                           className="number"
                           name="number"
                           onChange={handleChange}
                    />
                    <button className="btn" onClick={handleAdd}>Toevoegen</button>
                </div>
                <div className="Grocery-list-container">
                    {groceryList.map((listItem, key: number)=>{
                        return <GroceryItem itemToBuy={listItem} key={key} deleteItem={deleteItem}/>
                    })}
                </div>
            </div>

        </div>
    );
}

export default App;
