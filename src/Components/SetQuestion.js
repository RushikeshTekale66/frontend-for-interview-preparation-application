import React, { useState } from 'react'

const SetQuestion = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [language, setLanguage] = useState('');
    const [error, setError] = useState(false);

    const addQuestion = async () => {
        console.log(question, answer, difficulty);

        if (!question || !answer || !difficulty || !language) {
            setError(true);
            return false;
        }

        let result = await fetch('http://localhost:5000/setData',
            {
                method: 'post',
                body: JSON.stringify({ question, answer, difficulty, language }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        console.log(result);
        alert("Question Added Successfully");

    }
    return (
        <div className='container-lg shadow mt-5 p-4 text-start' >
            <form className='m-3'>
                <div className='mb-3'>
                    <label className="form-label fs-4 ">Enter Question</label>
                    <input className='form-control' type='text' value={question} onChange={(e) => { setQuestion(e.target.value) }} placeholder='Enter Question' />
                    {error && !question && <span className="form-text">Enter Valid Question</span>}

                </div>


                <div className=' mb-3'>
                    <label className='form-label fs-4'>Enter the Answer</label>
                    <textarea  className='form-control d-flex ' style={{height:"100px", width:"100%"}} type='text' value={answer} onChange={(e) => { setAnswer(e.target.value) }} placeholder='Enter Answer' />
                    {error && !answer && <span className="form-text">Enter Valid Answer</span>}

                </div>


                <div className=' mb-3'>
                    <label className='fs-4'>Choose language</label>
                    <select className='form-control' value={language} onChange={(e) => { setLanguage(e.target.value) }}>
                        <option value="">Select an option</option>
                        <option value="Java">Java</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="MySQL">MySQL</option>
                    </select>
                    {error && !language && <span className="form-text">Choose language option</span>}

                </div>

                <div className=' mb-3'>
                    <label className='fs-4'>Choose difficulty</label>
                    <select className='form-control' value={difficulty} onChange={(e) => { setDifficulty(e.target.value) }}>
                        <option value="">Select an option</option>
                        <option value="Easy">Easy</option>
                        <option value="Mediun">Mediun</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                    {error && !difficulty && <span className="form-text">Choose correct option</span>}

                </div>


                <button className='btn btn-primary m-2' onClick={addQuestion}>Add Question</button>
            </form>
        </div>

    )
}

export default SetQuestion