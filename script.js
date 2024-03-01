let inputval=8;
let isuppercase=false;
let isnumbers=false;
let issymbols=false;

const rangeinputele=document.getElementById("rangeinput");
const passrangeele=document.getElementById("passrange");
const submitbtnele=document.getElementById("submit-btn");


rangeinputele.addEventListener("input",(e)=>{
  inputval= +e.target.value;
  passrangeele.innerText=inputval;
});

const generatepassword=(length)=>{
  const lowerele= "abcdefghijklmnopqrstuvwxyz";
  const upperele=isuppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numberele=isnumbers ? "1234567890" : "";
  const symbolele=issymbols ? "~!@#$%^&*+()/" : "";
  const allletters=lowerele+upperele+numberele+symbolele;
  let password="";
  for(let i=0;i<length;i++){
    const index=Math.floor(Math.random()*allletters.length);
    password+=allletters[index];
  }
  return password;
}

submitbtnele.addEventListener("click",()=>{
  const passwordcontainer=document.getElementById("mainpassword");
  const uppercaseele=document.getElementById("uppercase");
  const numbersele=document.getElementById("numbers");
  const symbolsele=document.getElementById("symbols");

  isuppercase=uppercaseele.checked;
  isnumbers=numbersele.checked;
  issymbols=symbolsele.checked;

  let password=generatepassword(inputval);
  passwordcontainer.innerText=password;
   
});

