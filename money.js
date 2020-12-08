


function tests(){
    const obj1=document.getElementById("selectValue").value;
    const obj2=document.getElementById("selectValue2").value;
    const inputFrom = document.getElementById("objectFrom").value;
    //value money rem/em/pixel
    const remToPixel = 16;
    const pixelToRem = 1/16;
   //value money pt/rem/em
    const ptToRem = 1/12 ;
    const remToPt = 12 ;
     //value money pixel/pt
    const pxToPt = 0.75;
    const ptToPx = 4/3;
     //value money rem/em/percent
     const remToPercent = 100;
     const percentToRem = 1/100;
      //value money percent/pixel
      const percentToPx = 0.16;
      const pxToPercent = 6;
      //value money percent/pt
      const ptToPercent = 8;
      const percentToPt = 1/8;
      //value money px/vh
      const pxTovh = 0.45;
      const vhTopx = 2.22;
       //value money px/vw
       const pxTovw= 0.2544529;
       const vwTopx = 3.93;
       //value money EUR/KD
       const EURToKD= 0.37;
       const kdToEUR = 2.71;
       //value money EUR/USD
       const EURToUSD= 1.21;
       const USDToEUR = 0.82;
 
      //value money rm/usd
      if(obj1==="rem" && obj2 === "px"){
        const num1=inputFrom*remToPixel;
        document.getElementById("testing").innerHTML= num1 + " px";
      }
      else if(obj1==="px" && obj2 === "rem"){
        const num1=inputFrom*pixelToRem;
        document.getElementById("testing").innerHTML= num1+ " rem/em";
    }
     //value money pt/rem/em
     else if(obj1==="pt" && obj2 === "rem"){
       const num1=inputFrom*ptToRem;
       document.getElementById("testing").innerHTML=num1+ " rem/em";
    }
     else if(obj1==="rem" && obj2 === "pt"){
      const num1=inputFrom*remToPt;
      document.getElementById("testing").innerHTML=num1+ " pt";
    }
    //value money pixel/pt
     else if(obj1==="pt" && obj2 === "px"){
      const num1=inputFrom*ptToPx;
      document.getElementById("testing").innerHTML=num1 + " px";
    }
     else if(obj1==="px" && obj2 === "pt"){
      const num1=inputFrom*pxToPt;
      document.getElementById("testing").innerHTML=num1.toFixed(2)+ " pt";
    }
    //value money rem/em/percent
    else if(obj1==="rem" && obj2 === "percent"){
      const num1=inputFrom*remToPercent;
      document.getElementById("testing").innerHTML=num1.toFixed(2)+ " %";
}else if(obj1==="percent" && obj2 === "rem"){
  const num1=inputFrom*percentToRem;
  document.getElementById("testing").innerHTML=num1+ " rem/em";
}
//value money percent/px
else if(obj1==="percent" && obj2 === "px"){
  const num1=inputFrom*percentToPx;
  document.getElementById("testing").innerHTML=num1 + " px";
}
else if(obj1==="px" && obj2 === "percent"){
  const num1=inputFrom*pxToPercent;
  document.getElementById("testing").innerHTML=num1.toFixed(2)+ " %";
}
 //value money percent/pt
else if(obj1==="percent" && obj2 === "pt"){
  const num1=inputFrom*percentToPt;
  document.getElementById("testing").innerHTML=Math.round(num1)+ " pt";
}
else if(obj1==="pt" && obj2 === "percent"){
  const num1=inputFrom*ptToPercent;
  document.getElementById("testing").innerHTML=num1.toFixed(2)+ " %";
}
//value money px/vh
else if(obj1==="px" && obj2 === "vh"){
  const num1=inputFrom*pxTovh;
  document.getElementById("testing").innerHTML=num1.toFixed(2)+ " vh";
}
else if(obj1==="vh" && obj2 === "px"){
  const num1=inputFrom*vhTopx;
  document.getElementById("testing").innerHTML=num1 + " px";
}
//value money vw/px
else if(obj1==="vw" && obj2 === "px"){
  const num1=inputFrom*vwTopx;
  document.getElementById("testing").innerHTML=num1.toFixed(2) + " px";
}
else if(obj1==="px" && obj2 === "vw"){
  const num1=inputFrom*pxTovw;
  document.getElementById("testing").innerHTML=num1.toFixed(4)+ " vw";
}




   }