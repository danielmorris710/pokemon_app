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
        {pokemon.map((pokemon) => {
            return(
                <li>
                   <a href={`/pokemon/${pokemon.id}`}> 
                    {pokemon.name}
                    </a>
                </li>
            )
        })}
      </ul>
        <nav>
            <a href="/pokemon/new">Catch a New Pokemon</a>
        </nav>
    </div>
     );
    }
 }
 module.exports  = Index