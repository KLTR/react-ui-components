import React, { Component } from 'react';

const MENU_ITEMS = [
{
    title: 'Africa',
    href: '/africa'
},
{   title: 'Asia',
    href: '/asia'
}
];

export default class ContinentsDropdown extends Component {
    static get boundFunctions() {
        return [
            'open',
            'close',
            'onOutsideClick'
        ];
    }

    constructor() {
        super();

        this.state = {
            isOpen: false
        };

        this.menuElm = React.createRef();
        this.constructor.boundFunctions.forEach((fn) => this[fn] = this[fn].bind(this));
    }

    open() {
        this.setState({ isOpen: true });
        document.body.addEventListener('click', this.onOutsideClick);
    }

    close() {
        this.setState({ isOpen: false });
    }

    onOutsideClick(event) {
        if (this.menuElm.current.contains(event.target)) { return; }
        document.body.removeEventListener('click', this.onOutsideClick);
        this.close();
    }

    render() {
        const { isOpen } = this.state;
        const className = isOpen ? 'is-open' : 'is-hidden';

        return ( 
            <div className = "continents-menu" >

            <button className="dropdown-btn" onClick = { this.open } > Continents </button> 
            <ul  className = {"dropdown-menu " + className }
            ref = { this.menuElm } > {
                MENU_ITEMS.map((menuItem, idx) => {
                    const {
                        title,
                        href
                    } = menuItem;

                    return ( 
                        <li key = { idx } > < a href = { href } > { title } </a></li >
                    );
                })
            } 
            </ul> 
            </div>
        );
    }
}
