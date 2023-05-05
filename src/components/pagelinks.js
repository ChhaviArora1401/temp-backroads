import React from 'react'
import { pageLinks } from '../data';

const Pagelinks = ({parentclass, itemClass}) => {
    return (
        <ul className={parentclass} id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.href} className={itemClass}>{link.text}</a>
                    </li>
                );
            })}
        </ul>
    )
}

export default Pagelinks