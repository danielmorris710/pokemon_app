const React = require('react')


const myStyle = {
    color: '#2a75bb',
    backgroundColor: '#ffcb05',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    class Home extends React.Component {
        render () {
         const { pokemon } = this.props
         return (
         <div style = {myStyle}>
           <h1> 'Welcome to the Pokemon App!' </h1>
               <a href="/pokemon"><button type="submit"> Go To PokeDex </button></a>
         </div>
          );
         }
      }

    module.exports = Home