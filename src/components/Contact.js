import React from 'react'
import './Contact.css'
import {db} from '../firebaseConfig'
import { useState } from 'react'
import { addDoc, collection} from 'firebase/firestore'



const Contact = () => {

    

    const [name, setName] = useState();
    const [dob, setDob] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const userCollectionRef = collection(db, "userinfo")

    const handelSubmit = ()=>{
        addDoc(userCollectionRef,{
            name: name,
            dob: dob,
            email: email,
            phone: phone
        }).then(()=>{
            if(!alert("Form submitted"));
        })
    }

  return (
    <div className='outer-container'>
      <h1>
        User Form
      </h1>
      <form className='contactForm' onSubmit={handelSubmit} >
        <label> Full name </label>
        <input type='text' 
            name='name'
            placeholder='Enter your Full Name' 
            
            onChange={(event) =>{
                setName(event.target.value)
            }}
            
            
        />
        
        <label> DOB </label>
        <input type='date' 
            name='dob'
            placeholder='Enter your Date of birth' 
            onChange={(event) =>{
                setDob(event.target.value)
            }}

        />
        
        <label> Email </label>
        <input type='email'
            name='email'
            placeholder='Enter your Email' 
            onChange={(event) =>{
                setEmail(event.target.value)
            }}

        />
        
        <label> Phone number </label>
        <input type='text'
            name='phone'
            placeholder='Enter your Phone number' 
            onChange={(event) =>{
                setPhone(event.target.value)
            }}

        />
      </form>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Contact;
