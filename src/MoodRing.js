import React from 'react';

class MoodRing extends React.Component{
    // lets us share info throughout the Component
    state = {
        mood: 'melancholy',
        color: 'Magenta'
    } // end state
    // run when the component is ready (kinda like document ready, but just for this component, not the whole page)
    componentDidMount(){
        console.log( 'MoodRing mounted. Mood at component did mount:', this.state.mood, this.state.color );
    } // end func
    // run when the user changes a property
    handleChangeFor = ( event, property )=>{
        console.log( 'in handleChangeFor:', property, event.target.value );
        this.setState({
            [property]: event.target.value
        }) // end setState
    } // end handleChangeFor

    render(){
        return(
            <div>
                {/* comments work in here... */}
                <p>Some mood ring stuff. Set color and mood. Then display on DOM</p>
                <input type="text" placeholder="mood?" onChange={ ( event )=>this.handleChangeFor( event, "mood" ) }></input>
                <select onChange={ ( event )=>this.handleChangeFor( event, "color" ) }>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Magenta</option>
                    <option>Purple</option>
                    <option>Tan</option>
                </select>
                <h4>Current Mood: { this.state.mood }</h4>
                <h4>Current Color: { this.state.color }</h4>
            </div>
        ); //end return JSX
    } // end render
} // end component

export default MoodRing;