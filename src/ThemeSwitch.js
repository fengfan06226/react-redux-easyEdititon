import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThemeSwitch extends Component {

    constructor(){
        super();
        this.changeContentColor = this.changeContentColor.bind(this);
    }

    changeContentColor(color) {
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button style={{color:this.props.themeColor}} onClick={()=>{this.changeContentColor('red')}}>红色</button>
                <button style={{color:this.props.themeColor}} onClick={()=>{this.changeContentColor('blue')}}>蓝色</button>
            </div>
        ) 

    }
}

const mapStateToProps = (state) => {
    return {
      ...state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'changeColor', themeColor: color })
    }
  }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch;
