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

    class Home extends React.Component {
        render () {
         const { pokemon } = this.props
         return (
         <html style = {body}>
          <div style = {myStyle}>
            <h1> 'Welcome to the Pokemon App!' </h1>
                <a href="/pokemon"><button type="submit"> Go To PokeDex </button></a>
          </div>
         </html>
          );
         }
      }

    module.exports = Home