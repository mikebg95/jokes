const Joke = ({setup, punchline}) => {
  return (
    <div>
        { setup &&  <div>Setup: {setup}</div>}
        
        <div>Punchline: {punchline}</div>
        <br/>
    </div>
  )
}

export default Joke
