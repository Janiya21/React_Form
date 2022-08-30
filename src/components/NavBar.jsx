import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    <a class="item">
                        <Link to="/">Item</Link>
                    </a>
                    <a class="item">
                        <Link to="/customer">Customer</Link>
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBar;