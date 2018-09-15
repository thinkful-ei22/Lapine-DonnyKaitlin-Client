import React from 'react';


export default class Statslist extends React.Component{

    render(){

        if(!this.props  === undefined ){
            return null   
        }

        // console.log('STATS PROPS',this.props);
      
        return (
            <ul className="score_list" aria-live="polite">
           {
            this.props.wordList.map(word=>{
              
                return (
                <li className="board-list-item" key={word}  >
                   {word.lapineWord} : {Math.floor(word.percentCorrect)} % 
                 
                </li>
                )
            })
           } 
           </ul>
    );
  } 
}
