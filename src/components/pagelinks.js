import React from 'react'
import { pageLinks } from '../data';
import PageLink from './PageLink';

const Pagelinks = ({parentclass, itemClass}) => {
    return (
        <ul className={parentclass} id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <PageLink link={link} itemClass={itemClass}/>
                );
            })}
        </ul>
    )
}

export default Pagelinks