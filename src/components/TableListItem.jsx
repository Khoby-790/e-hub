/* eslint-disable jsx-a11y/anchor-is-valid */
import { Drawer } from 'antd'
import React, { Fragment, useState } from 'react'
import UpdateElection from '../pages/Election/UpdateElection'
import { useDispatch } from 'react-redux'
import { REMOVE_ELECTION } from '../redux/actions/types'
import moment from 'moment'
import { Popconfirm, message } from 'antd';
import { BsTrash, BsPencilSquare, BsClipboard } from 'react-icons/bs'




const TableListItem = ({ item, id }) => {
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
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">

                        <div className="">
                            <div className="text-sm leading-5 font-medium text-gray-900">
                                {item.name}
                            </div>

                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">{item.date}</div>
                    {/* <div className="text-sm leading-5 text-gray-500">Optimization</div> */}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${moment(item.date).isAfter(moment(), "day") ? "bg-green-100" : "bg-red-100"} ${moment(item.date).isAfter(moment(), "day") ? " text-green-800" : " text-red-800"}`}>
                        {moment(item.date).isAfter(moment(), "day") ? "Upcoming" : "Held"}
                    </span>
                </td>
                <td className="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-500">
                    {item.positions.length}
                </td>
                <td className="px-6 py-4 d-flex whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <div className="flex flex-row">
                        <Popconfirm
                            title="Are you sure delete this slot?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <BsTrash className="text-red-600 hover:text-indigo-900 cursor-pointer" />
                        </Popconfirm>

                        <BsPencilSquare onClick={() => setViewElection(true)} className="text-indigo-600 cursor-pointer hover:text-indigo-900 ml-3" />

                        {moment(item.date).isAfter(moment(), "day") ?
                            <BsClipboard onClick={() => navigator.clipboard.writeText("relkrtjjoljljl;jgfljlj")} className="text-indigo-600 cursor-pointer hover:text-indigo-900 ml-3" />
                            : null}
                    </div>
                </td>
            </tr>


            <Drawer visible={viewElection} width="40%" onClose={() => setViewElection(prev => !prev)} destroyOnClose>
                <UpdateElection setCreateElection={setViewElection} id={id} election={item} />
            </Drawer>

        </Fragment>
    )
}

export default TableListItem
