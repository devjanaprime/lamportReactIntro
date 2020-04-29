import React from 'react';

class Mood extends React.Component{
    render(){
        return(
            <li>{ this.props.myMood.mood }: { this.props.myMood.color }</li>
        ) // end return
    } // end render
} //end class

export default Mood;