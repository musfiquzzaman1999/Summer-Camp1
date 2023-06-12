import { useEffect, useState } from "react";
import Class from "./Class";


const Classes = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    return (
        <div className=" grid md:grid-cols-3 mb-12 ">
            {
                menu.map(item => <Class
                 key={item._id}
                 item={item}
                ></Class>)
            }
        </div>
    );
};

export default Classes;