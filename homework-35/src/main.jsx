import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className="grid-container">
            <Header text="Header" />
            <Sidebar
                title="Sidebar"
                items={[
                    {href: '#', text: 'Link 1'},
                    {href: '#', text: 'Link 2'},
                    {href: '#', text: 'Link 3'},
                    {href: '#', text: 'Link 4'},
                    {href: '#', text: 'Link 5'},
                    {href: '#', text: 'Link 6'},
                ]}
            />
            <Content />
        </div>
    </>
);
