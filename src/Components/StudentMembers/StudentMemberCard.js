import React from 'react'

// Animations
import 'aos'

// Icons
import {BsInstagram,BsLinkedin,BsGithub} from "react-icons/bs"

// Styles
import "./StudentMemberCard.scss"

const StudentMemberCard = ({member}) => {
    return (
        <div className='board-member-card'>
            <figure className='img-container' data-aos="zoom-in">
                <div className='border'>
                    <img src={member.image} alt={member.name} className='img' />
                    <figcaption className='links'>
                        <a className='linkedin' href={member.links.linkedIn} target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin />
                        </a>
                        <a className='instagram' href={member.links.instagram} target='_blank' rel='noopener noreferrer'>
                            <BsInstagram />
                        </a>
                        <a className='github' href={member.links.github} target='_blank' rel='noopener noreferrer'>
                            <BsGithub />
                        </a>
                    </figcaption>
                </div>
                <img src={member.image} alt={member.name} className='out-img' />
            </figure>
            <p className='name'>{member.name}</p>
            <p className='post'>{member.post}</p>
        </div>
    )
}

export default StudentMemberCard