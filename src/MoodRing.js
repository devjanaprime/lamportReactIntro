import React from 'react';

class MoodRing extends React.Component{
    // lets us share info throughout the Component
    state = {
        currentMood: {
            mood: 'melancholy',
            color: 'Magenta'
        },
        savedMoods: []
    } // end state
    // run when the component is ready (kinda like document ready, but just for this component, not the whole page)
    componentDidMount(){
        console.log( 'MoodRing mounted. Mood at component did mount:', this.state.currentMood.mood, this.state.currentMood.color );
    } // end func
    // run when the user changes a property
    handleChangeFor = ( event, property )=>{
        console.log( 'in handleChangeFor:', property, event.target.value );
        this.setState({
            currentMood:{
                ...this.state.currentMood,
                [property]: event.target.value
            }
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
                <h4>Current Mood: { this.state.currentMood.mood }</h4>
                <h4>Current Color: { this.state.currentMood.color }</h4>
                <button onClick={ this.saveMood }>Save</button>
                <ul>
                    { this.state.savedMoods.map( ( item )=> <li key={item.mood}>{ item.mood }: { item.color }</li> ) }
                </ul>
                <p>{ JSON.stringify( this.state ) }</p>
            </div>
        ); //end return JSX
    } // end render

    saveMood = () => {
        console.log( 'in saveMood' );
        this.setState({
            // b/c this is an array, we use spread to retain existing values
            savedMoods: [ ...this.state.savedMoods, this.state.currentMood ]
        })
    }

} // end component

export default MoodRing;