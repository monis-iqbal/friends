import { useEffect, useReducer } from "react";
import Header from "./Componenets/Header";
import './Form.css'
import { getStorage } from "firebase/storage";
import { Card } from 'antd';
import { db } from "./Firebase/Firebase";
import { doc, onSnapshot } from "firebase/firestore";





const Home = () => {
    const { Meta } = Card;




    const unsub = onSnapshot(doc(db, "users", "JKJpUPXWhzbvUUCyR70STD1rSRs1"), (doc) => {
        let name;

        console.log("Current data: ", doc.data().username);
        name = doc.data().username;
        localStorage.setItem("userName", name);

    })
    unsub()
    function naam() {
        let getName = JSON.parse(localStorage.getItem("userName"))
        return getName
    }






    // const userName = getStorage(users.username)

    return (

        <>
            <Header />

            <Card
                hoverable
                style={{ width: 400, height: 170 }}
                cover={<img alt="Profile Picture" src='' />}
            >
                <Meta title="{name}" description='my name is ' />
            </Card>


        </>


    )
}

export default Home;