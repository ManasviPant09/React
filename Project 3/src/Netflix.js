import Appdata from "./Appdata"
import Card from "./Card"
const p =   'Netflix';
const Netflix = () =>{
  if(p==='Netflix'){
    return(
      <Card
      imgsrc = {Appdata[0].imgsrc}
      cardcategory = {Appdata[0].cardcategory}
      cardtitle = {Appdata[0].cardtitle}
      link={Appdata[0].link}
      />      
    );
  }
}
export default Netflix;