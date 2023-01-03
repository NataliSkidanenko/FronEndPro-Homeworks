import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
    const listItems = props.items.map((item, index) => (
        <NavItem href={item.link} text={item.text} key={index} />
    ));

    return (
        <>
            <aside className="sidebar">
                <p className="title">{props.title}</p>
                <ul className="nav">{listItems}</ul>
            </aside>
        </>
    );
}

function NavItem(props) {
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

export default Sidebar;
