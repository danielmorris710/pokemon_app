const React = require('react')

const myStyle = {
  color: '#2a75bb',
  backgroundColor: '#ffcb05',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

class Show extends React.Component {
   render () {
    const { pokemon } = this.props
    return (
    <div style = {myStyle}>
      <h1> 'Gotta Catch 'Em All' </h1>
      <h2>{pokemon.name}</h2>
      <img src={`http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`}></img>
      <br/>
        <nav>
          <a href="/pokemon"> Back </a>
        </nav>
    </div>
     );
    }
 }
 
 module.exports  = Show