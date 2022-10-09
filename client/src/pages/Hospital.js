import React from 'react'

export default function Hospital() {
    return (
        <div>
            <div className='text-white'>
                <div className="grid place-items-center">
                    <h1 className="py-5 text-5xl font-bold text-white">Hospitals Near Me</h1>
                    <div className='h-1 w-56 bg-secondary mb-8'></div>
                    <iframe src="/map/index.html" height="500" width="800" title=" " className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}
