import React from 'react';

class MoodRing extends React.Component{
    componentDidMount(){
        console.log( 'MoodRing mounted' );
    }

    render(){
        return(
            <div>
                <h1>Hello from inside MoodRing render!!!</h1>
                {/* comments work in here... */}
                { 3 * 9 }
            </div>
        ); //end return JSX
    } // end render
} // end component

export default MoodRing;