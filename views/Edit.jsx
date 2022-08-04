const React = require('react')

const myStyle = {
    color: '#2a75bb',
    backgroundColor: '#ffcb05',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

class Edit extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
        <div style = {myStyle}>
            <h1>Edit Pokemon</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
              Name: <input type="text" name="name" /><br/>
              <input type="submit" name="" value="Edit Pokemon"/>
            </form>
            
        </div>);
    }
  }

module.exports = Edit