import logo from './logo.svg';
import './App.css';

function App() {
  let tar=['roshogolla', "dudh", "chana"];
  let pc_game= ["valorant", "COD", "Dota2"];
  const product= [
    {product_name: 'Game 1', game: 'Valorant', price: '$500'},
    {product_name: 'Game 2', game: 'Dota 2', price: '$800'},
    {product_name: 'Game 3', game: 'Pubg', price: '$1000'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Ridhan</h1>
        <Game food="kacchi" sport="football"></Game>
        <Game food= "biriyani" sport="cricket"></Game>
        <Game food={tar[0]} sport={pc_game[0]}></Game>
        <Game food={tar[2]} sport={pc_game[1]}></Game>
        <Game food={tar[1]} sport={pc_game[2]}></Game> */}
        <Box tag= {product[0]} name={product[0].game} price0={product[0]}></Box>
        <Box tag= {product[1]} name={product[1].game} price0={product[1]}></Box>
        <Box tag= {product[2]} name={product[2].game} price0={product[2]}></Box>
      </header>
    </div>
  );
}

// function Game(x){
//   let bc= {backgroundColor: "red"};
//   let mc= {backgroundColor: "gray"};
//   return (
//     <div style={{border: '3px solid white', padding: '0px 100px', marginBottom: '30px'}}>
//     <p style={bc}>Food: {x.food}</p>
//     <h6 style={mc}>Sports: {x.sport}</h6>
//     </div>
//   );
// }


function Box(props){
  let design={
      backgroundColor: 'gray',
      border: '1px solid gray',
      borderRadius: '5px',
      height: '300px',
      width: '200px',
      margin: '5px 0px'
    }
  let btn={
    padding: '5px 15px',
    float: "right",
    marginRight: '5px',
    marginTop: '-25px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'green',
    color: 'white'
  }
    const {product_name, game, price} = props.tag;
    return (
      <div style={design}>
          <h3> {product_name}</h3>
          <h4>{props.name}</h4>
          <h2 style={{color:"red"}}>{props.price0.price}</h2>
          <button style={btn}>Buy Now</button>
      </div>
    )
}

export default App;
