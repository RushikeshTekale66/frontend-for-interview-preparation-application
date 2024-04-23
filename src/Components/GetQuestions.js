import React, { useEffect, useState } from 'react'

const GetQuestions = () => {
    const [question, setquestion] = useState('');

    const getData = async () => {
        let result = await fetch('http://localhost:5000/getdata');
        result = await result.json();
        setquestion(result);
        console.log(result);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className=' container text-center align-middle mt-4' style={{ width: "40rem" }}>
            {
                question.length > 0 ?
                    question.map((item, index) => {
                        return (
                            <ul className='card' key={item._id}>
                                <p className=' card-title text-start p-3 mb-2 fs-3 bg-danger text-white'>{index + 1} : {item.question} ?</p>
                                <p className='text-start m-2 p-1'>* {item.answer}</p>
                                <div className='text-end'>
                                    <span className='bg-warning rounded-pill px-4 m-2 ' style={{ width: "20%" }}>{item.difficulty}</span>
                                    <span className='bg-success rounded-pill px-4 m-2 text-light' style={{ width: "20%" }}>{item.language}</span>

                                </div>
                            </ul>
                        )
                    }
                    )
                    : <h1 className='fs-1'>No Question</h1>
            }
        </div>

    )
}

export default GetQuestions;