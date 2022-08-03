const React = require('react');

const myStyle = {
    color: '#2a75bb',
    backgroundColor: '#ffcb05',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

class New extends React.Component {
  render() {
    return (
        <div style = {myStyle}>
            <h1>New Pokemon</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image URL: <input type="text" name="img" /><br/> 
              <input type="submit" name="" value="Create Pokemon"/>
            </form>
            
        </div>);
    }
  }

module.exports = New;