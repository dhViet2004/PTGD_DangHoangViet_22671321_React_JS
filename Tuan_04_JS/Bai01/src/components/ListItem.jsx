import { useEffect, useState } from "react";

export default function ListItem() {
    var url = 'https://my.api.mockaroo.com/list_item.json?key=49f87070';
    var [arr, setArr] = useState([]);

    useEffect(()=>{
        var fn = fetch(url).then((r)=> r.json())
        .then(
            (data)=>{
                setArr(data);
                console.log(arr);
                
            }
        )
    },[])
    return(
        <>
        </>
    );
}