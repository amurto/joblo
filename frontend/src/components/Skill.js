import React from 'react';

import './Skill.css';

const Skill = props => {
    return (
        <button className="button btn rounded outline-4">{props.skill}</button>
    )
}

export default Skill;