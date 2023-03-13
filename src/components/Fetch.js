// import React, { useState } from "react";
// import {db} from '../firebaseConfig'
// import { addDoc, collection} from 'firebase/firestore'
// import firebase from 'firebase/compat/app';

function Fetch(){
//     const [allDocs, setAllDocs] = useState([]);
//     const [singleDoc, setSingleDoc] = useState({});

//     const db = firebase.firestore();

//     function fetchAll(e){
//         e.preventDefault();
//         db.collection("userinfo")
//         .get()
//         .then((snapshot) => {
//             if(snapshot.docs.length > 0){
//                 snapshot.docs.forEach((doc)=>{
//                     setAllDocs((prev)=>{
//                         return[...prev,doc.data()];
//                     });
//                 });
//             }
//         });
//         console.log(allDocs);
//     }

//     function fetching(e){
//         e.preventDefault();
//         db.collection("userinfo")
//         .doc("cJiP5IE5Y7zUO4kBTRuI")
//         .get()
//         .then((snapshot)=>{
//             if(snapshot){
//                 setSingleDoc(snapshot.data());
//             }
//         });
        
//         console.log(singleDoc);

//     }



    return(
        <div>
            <h1>
                fetching data
            </h1>
        </div>


    )
}

export default Fetch;
