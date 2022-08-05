const React = require('react')

const body = {
  backgroundColor: '#ffcb05',
}

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
    <html style = {body}>
      <div style = {myStyle}>
          <h1>New Pokemon</h1>
           {/* NOTE: action will be the route, method will be the HTTP verb */}
          <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" /><br/>
            <input type="submit" name="" value="Catch Pokemon"/>
            </form>   
      </div>
    </html>
          );
    }
  }

module.exports = New