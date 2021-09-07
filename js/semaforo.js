function setColor11(color) {
  document.getElementById("R").style.backgroundColor = color;
}

function setColor12(color) {
document.getElementById("A").style.backgroundColor = color;
}

function setColor13(color) {
document.getElementById("V").style.backgroundColor = color;
}

function setColor21(color) {
document.getElementById("R1").style.backgroundColor = color;
}

function setColor22(color) {
document.getElementById("A1").style.backgroundColor = color;
}

function setColor23(color) {
document.getElementById("V1").style.backgroundColor = color;
}

contp=0;
contc=0;
const iniciar = () =>{
  
  var per;
  var car;

  per = parseInt(document.getElementById("npersons").value);
  car = parseInt(document.getElementById("ncars").value);
  contp=contp +  per;
  contp=parseInt(contp)
  contc=contc + car;
  contc=parseInt(contc);

  if(per>car){

    if(per < 11){
      setColor13("rgb(43, 255, 0)");
      setTimeout(() => {
        setColor13("rgb(43, 255, 0, 0.164)");
      }, 5000);
    
      setColor21("rgb(255, 0, 0)");
      setTimeout(()=> {
        setColor21("rgb(255, 0, 0, 0.099)")
      }, 5000);
      }

      else if(per > 11 && per < 21){
      setColor13("rgb(43, 255, 0)");
      setTimeout(() => {
        setColor13("rgb(43, 255, 0, 0.164)");
      }, 8000);
    
      setColor21("rgb(255, 0, 0)");
      setTimeout(()=> {
        setColor21("rgb(255, 0, 0, 0.099)")
      }, 8000);
      }

      else if(per > 21){
        setColor13("rgb(43, 255, 0)");
        setTimeout(() => {
          setColor13("rgb(43, 255, 0, 0.164)");
        }, 10000);
      
        setColor21("rgb(255, 0, 0)");
        setTimeout(()=> {
          setColor21("rgb(255, 0, 0, 0.099)")
        }, 10000);
        }
  }

  else{

    if(car < 11){
      setColor11("rgb(255, 0, 0)");
      setTimeout(() => {
        setColor11("rgb(255, 0, 0, 0.099)");
      }, 5000);
    
      setColor23("rgb(43, 255, 0)");
      setTimeout(()=> {
        setColor23("rgb(43, 255, 0, 0.164)")
      }, 5000);
      }

      else if(car > 11 && car < 21){
      setColor11("rgb(255, 0, 0)");
      setTimeout(() => {
        setColor11("rgb(255, 0, 0, 0.099)");
      }, 8000);
    
      setColor23("rgb(43, 255, 0)");
      setTimeout(()=> {
        setColor23("rgb(43, 255, 0, 0.164)")
      }, 8000);
      }

      else if(car > 21){
        setColor11("rgb(255, 0, 0)");
        setTimeout(() => {
          setColor11("rgb(255, 0, 0, 0.099)");
        }, 10000);
      
        setColor23("rgb(43, 255, 0)");
        setTimeout(()=> {
          setColor23("rgb(43, 255, 0, 0.164)")
        }, 10000);
        }
  }
  
  document.getElementById("per").value = contp;
  document.getElementById("car").value = contc;
}


/*
function startWork() {

  if(ncars>npersons){
    setColor11("rgb(255, 0, 0)");
      setTimeout(() => {
        setColor11("rgba(255, 0, 0, 0.099)");
      }, 4000);

    setColor23("rgb(43, 255, 0)");
      setTimeout(() => {
        setColor23("rgba(43, 255, 0, 0.164)");
      }, 4000);

    setTimeout(() =>{
      setColor22("rgb(255, 251, 0)")
    }, 4000);

    setTimeout(() =>{
      setColor22("rgba(255, 251, 0, 0.308)")
    }, 6000);

  }
  
}

startWork();*/