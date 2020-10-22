import { message } from 'antd'
import React, { useState, useCallback } from 'react'
import { BsX } from 'react-icons/bs'

const CreatePoll = ({ setCreatePoll }) => {
    const [question, setquestion] = useState("")
    const [options, setOptions] = useState([])


    const handleChangePosition = (value, key) => {
        const __ = [...options]
        __[key]["name"] = value;
        setOptions(__)
    }

    const handleAddOption = () => {
        const newOption = {
            name: "",
            votes: []
        }
        const __ = [...options, newOption]
        setOptions(__)
    }

    const handleRemovOption = () => {
        const __ = [...options]
        __.pop();
        setOptions(__)
    }

    const handleRemoveOption = useCallback((id) => {
        const __ = [...options];
        __.splice(id, 1);
        setOptions(_ => [...__])
    }, [options])

    const handleSubmitPoll = () => {
        if (!question || options.length < 1) {
            return
        }
        message.success("Surray Poll created")
        setCreatePoll(prev => !prev)
    }

    return (
        <div className="mt-10">
            <div className="mb-3">
                <h1 className="font-bold text-lg">Create Poll</h1>
            </div>
            <div className="mb-2">
                <label for="email" class="">Question</label>
                <div class="relative rounded-md shadow-sm">
                    <input id="email" value={question} onChange={e => setquestion(e.target.value)} class="form-input block w-full sm:text-sm sm:leading-5" placeholder="Question" />
                </div>
            </div>
            {options.length ? <h3>Possible Answers</h3> : null}
            <div>
                {options.map((_, key) => {
                    return (
                        <div class="relative flex rounded-md mb-2 shadow-sm" key={key}>
                            <input type="text" value={_.name} onChange={(e) => handleChangePosition(e.target.value, key)} class="form-input rounded-r-none block w-full sm:text-sm sm:leading-5" />
                            <span onClick={() => handleRemoveOption(key)} className="inline-flex items-center px-3 text-white border border-red-500 bg-red-500 sm:text-sm">
                                <BsX />
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row justify-between">
                <button onClick={handleAddOption} class="mb-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">Add Answer</button>
                <button onClick={handleRemovOption} class="mb-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">Remove Answer</button>
            </div>
            <div>
                <button onClick={handleSubmitPoll} type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Create Poll
                </button>
            </div>
        </div>
    )
}

export default CreatePoll
