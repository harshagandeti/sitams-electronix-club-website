import React from 'react'

// Styles
import './SectionHeading.scss'

const SectionHeading = ({heading, center, dark,disable}) => {
    return (
        <div className={disable ? "disable":'section-heading'}>
            <hr color= {dark ? 'white' : 'black'} size='2' />
            <h1 className={`${center ? 'center' : 'left'} ${dark ? 'dark' : 'light'}`}>{heading}</h1>
        </div>
    )
}

export default SectionHeading