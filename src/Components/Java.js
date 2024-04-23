import React, { useEffect, useState } from 'react'

const Java = (props) => {
    const [question, setQuestion] = useState([]);
    let key = props.language;

    console.log(key);

    const getData = async () => {
        
        console.log(question);
        if (key) {
            let result = await fetch(`http://localhost:5000/getdata/${key}`);
            result = await result.json();
            if (result) {
                setQuestion(result);
            }
        }

    }

    useEffect(() => {
        getData();
    }, [key])

    return (
        <div className=' container text-center align-middle mt-4'  style={{width:"40rem"}}>
            {
                question.length > 0 ?
                    question.map((item, index) => {
                            return(
                        <ul className='card' key={item._id}>
                            <p className=' card-title text-start p-3 mb-2 fs-3 bg-danger text-white'>{index + 1} : {item.question} ?</p>
                            <p className='text-start m-2 p-1'>* {item.answer}</p>
                            <span className='bg-warning rounded-pill px-4 m-2'style={{width:"20%"}}>{item.difficulty}</span>
                            
                        </ul>

                    )}

                    )
                    : <h1 className='fs-1'>No Question</h1>
            }
        </div>

    )
}

export default Java;