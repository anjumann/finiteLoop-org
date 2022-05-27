import React, { useState, useEffect } from 'react'
import Button from '../BasicComponents/Button';

function Contact() {
    const [Msg, setMsg] = useState({
        name: "",
        email: "",
        message: "",
    })

    let name, value;
    const postMsg = (event) => {
        name = event.target.name;
        value = event.target.value;

        setMsg({ ...Msg, [name]: value });
    };

    // firebase connection

    const submitData = async (events) => {
        events.preventDefault();
        const { name, email, message } = Msg;

        if (name && email && message) {

            const res = await fetch("https://finiteloop-club-default-rtdb.firebaseio.com/userData.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }
            );

            if (res) {
                alert("Submitted to DB");
            }
            else {
                alert("Failed to Submit message");
            }
        }
        else {
            
            
        }

    }

    return (
        <>

            <form className='text-left' method='POST' >
                <div className="relative z-0 w-full mb-6 group ">
                    <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " value={Msg.name} onChange={postMsg} required="" />
                    <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Name</label>
                </div>

                <div className="relative z-0 w-full mb-6 group ">
                    <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " value={Msg.email} onChange={postMsg} required="" />
                    <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email address</label>
                </div>

                <div className="relative z-0 w-full mb-6 group ">
                    <textarea rows="4" cols="50" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " value={Msg.message} onChange={postMsg} required="" />
                    <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Message</label>
                </div>

                
                <button type="submit" className="mt-4 w-44" onClick={submitData} >
                    <Button text="Submit" />
                </button>
                
            </form>
        </>
    )
}

export default Contact