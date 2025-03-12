import { useEffect, useState } from "react";
import NewItem from "./NewItem";
import "./ListItem.css";

export default function ListItem() {
    const url = "https://my.api.mockaroo.com/list_item.json?key=49f87070";
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setArr(data);
                console.log("API response:", data);
            });
    }, []);

    return (
        <div className="grid-container">
            {arr.slice(0, 8).map((e, i) => ( // Lấy 8 mục để đảm bảo 2 dòng 4 cột
                <NewItem key={i} id={i} name={e.name} image={e.image} time={e.time} />
            ))}
        </div>
    );
}
