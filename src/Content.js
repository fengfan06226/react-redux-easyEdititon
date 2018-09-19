import React, { Component } from 'react';
import { connect } from 'react-redux';

import ThemeSwitch from './ThemeSwitch'; 

class Content extends Component {

    render() {
        return (
            <div>
                <p style={{color:this.props.themeColor}}>bbb</p>
                <ThemeSwitch/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

Content = connect(mapStateToProps)(Content);

export default Content;
