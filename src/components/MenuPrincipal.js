import { useState, children } from 'react';


function MenuPrincipal({onChildClick}) {
    return (
        <div className="bg-gunMetal">
            <div onClick={onChildClick} className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400">+</p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400">+</p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded border-2 border-gray-200 border-dashed">
                        <p className="text-2xl text-gray-400">+</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded  border-2 border-gray-200 border-dashed">
                        <p className="text-2xl text-gray-400 ">+</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded  h-28  border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                        <div className="flex items-center justify-center rounded  h-28 border-2 border-gray-200 border-dashed">
                            <p className="text-2xl text-gray-400 ">+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPrincipal