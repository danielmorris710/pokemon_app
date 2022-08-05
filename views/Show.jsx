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

class Show extends React.Component {
   render () {
    const { pokemon } = this.props
    return (
    <html style = {body}>
      <div style = {myStyle}>
        <h1> 'Gotta Catch 'Em All' </h1>
        <h2>{pokemon.name}</h2>
        <img src={`http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`}></img>
        <br/>
          <nav>
            <a href="/pokemon"> Back </a>
          </nav>
      </div>
    </html>
     );
    }
 }
 
 module.exports  = Show