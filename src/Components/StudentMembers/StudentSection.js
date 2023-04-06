import React, { Component } from 'react'

// Sections
import StudentMemberCard from './StudentMemberCard'
import SectionHeading from '../Section-Heading/SectionHeading'
import { Circle } from '../Home-Page-Components/Back-Ground-Objects/BackGroundObj'

// Data
import StudentsData from './StudentsData'

// Styles
import "./StudentSection.scss"

class StudentSection extends Component {
    constructor(){
        super()
        this.state = {
            boardMembers: StudentsData
        }
    }

    render(){
        return (
            <section className='board-section'>
                <SectionHeading heading='Student-Members' center />
                <div className='board-list'>
                <div className='circle'>
                    <Circle />
                </div>
                {
                    this.state.boardMembers.map(member => <StudentMemberCard key={member.id} member={member} />)
                }
                </div>
            </section>
        )
    }
}

export default StudentSection