import './App.css';
let currenttime= new Date();
currenttime=currenttime.getHours();
let greeting = '';
const cssstyle={};
if (currenttime>=1 && currenttime<12){
  greeting="Good Morning";
  cssstyle.color='green';
}
else if (currenttime>=13 && currenttime<19){
  greeting="Good Afternoon";
  cssstyle.color='orange';
}
else{
  greeting="Good Night";
  cssstyle.color='black';
}
const cssstyle0={
  color: 'white'
};
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <h1><span style={cssstyle0}>Hello Sir, </span><span style={cssstyle}>{greeting}</span></h1>
      </header>
    </div>
    </>
  );
}

export default App;
