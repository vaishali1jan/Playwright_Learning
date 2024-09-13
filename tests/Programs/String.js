//program to find given strings are Anagram or not.
 //Input:
 //String str1 = “tesla”;  String str2 = “slate”;

 var ReplaceSpecialCharactersinString = () => {
  let test = "ABCDdsfsdf@@@@@##$$";
  console.log(test)
  let newtest = test.replace(/[^a-zA-Z0-9]/g, "")
  let newtest1 = test.replace(/[a-z]/g, "[A-Z]")
  console.log(newtest1)
  console.log(newtest)
}
ReplaceSpecialCharactersinString ();


function FindCharOccurance()
{
  let stringOrg = "I am working on my skills of automation"
  let string =stringOrg.toLowerCase()
  let Charcount=0
  for (i=0;i<string.length;i++)
  {
    if (string[i]=="i")
    {
        Charcount++
    } 
  }
  console.log(Charcount)
}
//FindCharOccurance()




 function strMethod ()
 {
  //**************************************************************************************** */
  let text = "HELLO WORLD";
 let char = text.charAt(0);
 console.log(char)
 console.log(text[0])
 
  //**************************************************************************************** */
 
 //-ve value treated as 0
 console.log(text.substring(2,7))
 //remove 1st 3 
 console.log(text.slice(3))
 //remove last 3 
 console.log(text.slice(-3))
 //start from index 7 and print next 6
 console.log(text.substr(7, 6));
  //**************************************************************************************** */
 
 console.log(text.toUpperCase())
 console.log(text.toLowerCase())
 console.log(text.repeat(2));
 console.log(text.replace("HELLO", "W3Schools"));
 
 //remove spaces from both sides 
 let text1 = "      Hello World!      ";
 console.log( text1.trim());
 
 let text2= "cats are going after dogs and cats want to run"
 console.log( text2.replaceAll(/cats/g,"dogs"))
 
 let text3= "one,two,three,four,five,six"
 let splitval= text3.split(",")
 for (let i =0;i<splitval.length;i++)
 {
     console.log(splitval[i])
 }
 
  //**************************************************************************************** */
 
  let text5= "one,two,three,four,five,six";
  console.log(text5.indexOf("three"))
 
 
  //return -1 if string not found 
  let text7 = "Please locate where 'locate' occurs!";
  console.log(text7.search("locate"))
  console.log(text7.search("losdffcate"))
 
   //return -1 if string not found 
   let text8 = "Please locate where 'locate' occurs!";
   console.log(text8.includes("locate"))
   console.log(text8.includes("losdffcate"))
 }

 //strMethod ()
 
 function useParInString(){
   //When sring written in single code called template string and can use ${}  varibale 
   let firstName = "John";
 let lastName = "Doe";
 
 let text3 = `Welcome ${firstName}, ${lastName}!`;
 
 let text4 = "Welcome ${firstName}, ${lastName}!";
 console.log(text3)
 console.log(text4)
 
 let price = 10;
 let VAT = 0.25;
 
 let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
 console.log(total)
 }