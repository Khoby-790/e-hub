import React, { useState } from 'react'
import { GridListing, TableListing } from '../../components'
import { BsGrid1X2, BsListUl } from 'react-icons/bs'

const Election = () => {

    const [viewType, setViewType] = useState("table")


    return (
        <div>
            <div className="w-auto px-24 h-20 flex flex-row justify-end items-center">
                <div onClick={() => setViewType("table")} className={` ${viewType === "table" ? 'bg-gray-500 text-white' : ""} mr-2 hover:bg-gray-500 hover:p-2 hover:text-white p-2 cursor-pointer`}>
                    <BsListUl size={30} />
                </div>
                <div onClick={() => setViewType("grid")} className={` ${viewType === "grid" ? 'bg-gray-500 text-white' : ""} hover:bg-gray-500 hover:p-2 hover:text-white p-2 cursor-pointer`}>
                    <BsGrid1X2 size={30} />
                </div>
            </div>
            <div className="">
                {viewType === "table" && <TableListing />}
                {viewType === "grid" && <GridListing />}
            </div>
        </div>
    )
}

export default Election
