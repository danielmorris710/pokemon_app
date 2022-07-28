const React = require('react')

const myStyle = {
    color: 'blue',
    backgroundColor: 'yellow',
  };

class Index extends React.Component {
   render () {
    const { pokemon } = this.props
    return (
    <div style = {myStyle}>
      <h1> 'See All The Pokemon!' </h1>
      <ul>
        {pokemon.map((pokemon) => {
            return(
                <li>
                    {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </li>
            )
        })}
      </ul>
    </div>
     );
    }
 }
 module.exports  = Index