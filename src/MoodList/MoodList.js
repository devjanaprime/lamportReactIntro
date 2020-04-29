import React, { Component } from 'react';
import Mood from '../Mood/Mood';

class MoodList extends Component{
    componentDidMount(){
        console.log( 'MoodList mounted' );
    }
    render(){
        return(
            this.props.listOfMoods.map( ( item )=> <Mood key={ item.mood } myMood={ item }/> )
        ) // end return
    } //end render
} // end class

export default MoodList;