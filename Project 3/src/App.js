import Card from "./Card";
import Appdata from "./Appdata";
import './App.css';
import Netflix from "./Netflix";
import Amazon from "./Amazon";
{/* <Card
imgsrc = {Appdata[0].imgsrc}
cardtitle = {Appdata[0].cardtitle}
link={Appdata[0].link}
/> */}
const p =   'Amazon';
const Preference = () =>{
  if(p==='Netflix'){
    return(
      <Netflix />
    );
  }
  else{
    return(
      <Amazon />
    );
  }
};
const App = () => (
    <>
    <div className="body">
      <div className="heading">
        Netflix recommendations
      </div>
      {p==='Netflix'? <Netflix /> : <Amazon />}
      {/* <Card
        imgsrc = {Appdata[0].imgsrc}
        cardcategory = {Appdata[0].cardcategory}
        cardtitle = {Appdata[0].cardtitle}
        link={Appdata[0].link}
        /> */}
      {/* {Appdata.map(function data(val){
        return(
          <Card 
          // key = {val.id}
          imgsrc = {val.imgsrc}
          cardcategory = {val.cardcategory}
          cardtitle = {val.cardtitle}
          link={val.link}
          />
        );
      })} */}
    </div>
    </>
);
export default App;