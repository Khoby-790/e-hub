/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { CREATE_ELECTION } from '../../redux/actions/types'
import { BsX } from 'react-icons/bs'
import { message } from 'antd'

const CreateElection = ({ setCreateElection }) => {
    const _dispatch = useDispatch()
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [setOfPositions, setPositions] = useState([])


    const handleChangePosition = (value, key) => {
        const __ = [...setOfPositions]
        __[key]["name"] = value;
        setPositions(__)
    }

    const handleSubmitElection = () => {
        if (!name || !date || !setOfPositions.length) {
            return
        }
        const election = {
            name,
            date,
            positions: [...setOfPositions]
        }
        _dispatch({ type: CREATE_ELECTION, payload: election })
        setCreateElection(prev => !prev)
        message.success('Election slot created Successfully')
    }

    const handleAddPosition = () => {
        const newPostion = {
            name: "",
            participants: []
        }
        const __ = [...setOfPositions, newPostion]
        setPositions(__)
    }

    const handleRemoveInput = useCallback((id) => {
        const __ = [...setOfPositions];
        __.splice(id, 1);
        setPositions(_ => [...__])
    }, [setOfPositions])

    return (
        <div className="mt-10">
            <div className="mb-3">
                <h1 className="font-bold text-lg">Create Election</h1>
            </div>
            <div className="mb-2">
                <label for="email" class="">Name</label>
                <div class="relative rounded-md shadow-sm">
                    <input id="email" onChange={e => setName(e.target.value)} class="form-input block w-full sm:text-sm sm:leading-5" placeholder="you@example.com" />
                </div>
            </div>
            <div className="mb-2">
                <label for="email" class="">Date</label>
                <div class="relative rounded-md shadow-sm">
                    <input type="date" onChange={e => setDate(e.target.value)} id="email" class="form-input block w-full sm:text-sm sm:leading-5" placeholder="you@example.com" />
                </div>
            </div>
            <button onClick={handleAddPosition} class="mb-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">Add Position</button>
            {setOfPositions.length ? <div>
                <h3>Provide Postion Names</h3>
            </div> : null}
            {setOfPositions.map((_, key) => {
                return (
                    <div class="relative flex rounded-md mb-2 shadow-sm" key={key}>
                        <input type="text" value={_.name} onChange={(e) => handleChangePosition(e.target.value, key)} class="form-input rounded-r-none block w-full sm:text-sm sm:leading-5" />
                        <span onClick={() => handleRemoveInput(key)} className="inline-flex items-center px-3 text-white border border-red-500 bg-red-500 sm:text-sm">
                            <BsX />
                        </span>
                    </div>
                )
            })}

            <div>
                <button onClick={handleSubmitElection} type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Button text
                </button>
            </div>
        </div>
    )
}

export default CreateElection
