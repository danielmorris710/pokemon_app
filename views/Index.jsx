const React = require('react')

const myStyle = {
    color: '#2a75bb',
    backgroundColor: '#ffcb05',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

const row = {
    display: "flex", 
    padding: "10px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "space-between" ,
};

class Index extends React.Component {
   render () {
    const { pokemon } = this.props
    return (
    <div style = {myStyle}>
      <h1> 'Welcome To Your PokeDex!' </h1>
      <h2> 'See All The Pokemon!' </h2>
      <ul>
        {pokemon.map((pokemon) => {
            return(
                <li style = {row}>
                   <a href={`/pokemon/${pokemon.id}`}> 
                    {pokemon.name}
                    </a>
                    <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method='POST'> <button type="submit"> Delete </button> </form>
                    <a href={`/pokemon/${pokemon.id}/edit`}><button type="submit">Edit Pokemon</button></a>
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