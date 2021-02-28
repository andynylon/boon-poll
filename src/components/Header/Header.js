import React from 'react';

import './Header.scss'
import {PollSvg} from '../../assets/svg'

const Header = (props) => {
    return (
        <div className="poll-header">
            <PollSvg></PollSvg>
            <div className="next-live">Next Live</div>
            <h1 className="poll-header__heading">{props.title}</h1>
        </div>
    )
}

export default Header;
