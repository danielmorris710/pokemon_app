const React = require('react')

const myStyle = {
    color: '#2a75bb',
    backgroundColor: '#ffcb05',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

class Index extends React.Component {
   render () {
    const { pokemon } = this.props
    return (
    <div style = {myStyle}>
      <h1> 'See All The Pokemon!' </h1>
      <ul>
        {pokemon.map((pokemon, x) => {
            return(
                <li>
                   <a href={`/pokemon/${x}`}> 
                    {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                    </a>
                </li>
            )
        })}
      </ul>
    </div>
     );
    }
 }
 module.exports  = Index