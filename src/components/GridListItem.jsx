/* eslint-disable jsx-a11y/anchor-is-valid */
import { Drawer } from 'antd'
import React, { Fragment, useState } from 'react'
import UpdateElection from '../pages/Election/UpdateElection'
import { useDispatch } from 'react-redux'
import { REMOVE_ELECTION } from '../redux/actions/types'
import moment from 'moment'
import { Popconfirm, message } from 'antd';
import { BsTrash, BsPencilSquare, BsClipboard } from 'react-icons/bs'



const GridListItem = ({ election, id }) => {

    const _dispatch = useDispatch()
    const [viewElection, setViewElection] = useState(false)

    function confirm(e) {
        console.log(e);
        _dispatch({ type: REMOVE_ELECTION, payload: id })
        message.success('Election slot removed Successfully');
    }

    function cancel(e) {
        console.log(e);
    }

    return (
        <Fragment>

            <li class="col-span-1 bg-white rounded-lg shadow">
                <div class="w-full flex items-center justify-between p-6 space-x-6">
                    <div class="flex-1 truncate">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-gray-900 text-sm leading-5 font-medium truncate">{election.name}</h3>
                            <span class={`flex-shrink-0 inline-block px-2 py-0.5 ${moment(election.date).isAfter(moment(), "day") ? "text-teal-800" : "text-red-800"}  text-xs leading-4 font-medium ${moment(election.date).isAfter(moment(), "day") ? "bg-teal-100" : "bg-red-100"} rounded-full`}>
                                {moment(election.date).isAfter(moment(), "day") ? "Upcoming" : "Held"}
                            </span>
                        </div>
                        <p class="mt-1 text-gray-500 text-sm leading-5 truncate">{election.date}</p>
                    </div>
                    <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                </div>
                <div class="border-t border-gray-200">
                    <div class="-mt-px flex">
                        <div class="w-0 flex-1 flex border-r border-gray-200">
                            <Popconfirm
                                title="Are you sure delete this slot?"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Yes remove"
                                cancelText="No"
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                            >

                                <BsTrash className="w-5 h-5 text-gray-400" />
                                <span class="ml-3">Remove</span>
                            </Popconfirm>
                        </div>
                        <div class="-ml-px w-0 flex-1 flex border-r">
                            <a onClick={() => setViewElection(true)} class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                <BsPencilSquare className="w-5 h-5 text-gray-400" />
                                <span class="ml-3">Edit</span>
                            </a>
                        </div>
                        {moment(election.date).isAfter(moment(), "day") ? <div class="-ml-px w-0 flex-1 flex">
                            <a onClick={() => navigator.clipboard.writeText("relkrtjjoljljl;jgfljlj")} class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                <BsClipboard className="w-5 h-5 text-gray-400" />
                                <span class="ml-3">Get Link</span>
                            </a>
                        </div> : null}
                    </div>
                </div>
            </li>

            <Drawer visible={viewElection} width="40%" onClose={() => setViewElection(prev => !prev)} destroyOnClose>
                <UpdateElection setCreateElection={setViewElection} id={id} election={election} />
            </Drawer>

        </Fragment >
    )
}

export default GridListItem
