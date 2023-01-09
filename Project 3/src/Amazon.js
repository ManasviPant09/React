import Appdata from "./Appdata"
import Card from "./Card"
const p =   'Amazon';
const Amazon = () =>{
  if(p==='Amazon'){
    return(
      <Card
      imgsrc = {Appdata[2].imgsrc}
      cardcategory = {Appdata[2].cardcategory}
      cardtitle = {Appdata[2].cardtitle}
      link={Appdata[2].link}
      />      
    );
  }
}
export default Amazon;