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
    // run when the user selects a new color
    handleColorChange = ( event ) =>{
        // get the newly selected color
        console.log( 'in handleColorChange:', event.target.value );
        // MUST use setState (don't "mutate state directly")
        this.setState({
            color: event.target.value
        })
    }

    handleMoodChange = ( event ) =>{
        console.log( 'in handleMoodChange:', event.target.value );
        this.setState(
            {
                mood: event.target.value
            }
        ) // end set state
    } // end func

    render(){
        return(
            <div>
                {/* comments work in here... */}
                <p>Some mood ring stuff. Set color and mood. Then display on DOM</p>
                <select onChange={ this.handleMoodChange }>
                    <option>elated</option>
                    <option>content</option>
                    <option>meh</option>
                    <option>melancholy</option>
                    <option>confused</option>
                    <option>jubilant</option>
                    <option>sad</option>
                </select>
                <select onChange={ this.handleColorChange }>
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