import React from 'react'

export const Line = () => {
    return (
        <div>
            <svg width="360" height="642" viewBox="0 0 360 642" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M360 1.00031C332.893 0.90554 277.885 22.321 255.446 109.609C229.571 210.259 259.802 342.751 225.083 395.919C190.363 449.086 115.896 412.305 86.0726 458.184C55.5776 505.097 33.3993 606.597 0 641" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="10 20"/>
            <defs>
                <linearGradient id="paint0_linear" x1="180" y1="1" x2="180" y2="641" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CEE7F2"/>
                    <stop offset="0.317708" stopColor="#15B4E7"/>
                    <stop offset="0.677083" stopColor="#60C9EB"/>
                    <stop offset="1" stopColor="#35DDE8"/>
                </linearGradient>
            </defs>
            </svg>
        </div>
    )
}

export const Circle = () => {
    return (
        <div>
            <svg width="1002" height="1002" viewBox="0 0 1002 1002" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="501" cy="501" r="499.5" stroke="black" strokeWidth="3" strokeDasharray="10 20"/>
            </svg>
        </div>
    )
}

export const CircleSmall = () => {
    return(
        <div>
            <svg width="396" height="396" viewBox="0 0 396 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="198" cy="198" r="196.5" stroke="black" strokeWidth="3" strokeDasharray="10 20"/>
            </svg>
        </div>
    )
}
