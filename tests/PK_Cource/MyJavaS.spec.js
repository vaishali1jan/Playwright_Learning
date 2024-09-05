
// //import{test,expect} from'@playwright/test'
// console.log(x)
// var  x = 7;

// var  x= 8;


//     aa()
//     //console.log(x)
//     //console.log(window.x)


// function aa(){
//    // console.log("Testing JavaScript");
// }

 var ReplaceSpecialCharactersinString= ()=>{

    let test= "ABCDdsfsdf@@@@@##$$";

    console.log(test)
     let newtest= test.replace(/[^a-zA-Z0-9]/g,"")
     console.log(newtest)

    //  let mydate = new Date();
    //  console.log(mydate.getDate() )  
    //  console.log(mydate.getMonth()) 
    //  console.log(mydate.getFullYear()) 
     

 }

 //ReplaceSpecialCharactersinString ();

var DAteCalculate = ()=>{
 let currentDate = new Date();

 // Extract the date components
 let year = currentDate.getFullYear();
 let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
 let day = currentDate.getDate().toString().padStart(2, '0');
 
 // Format the date as YYYY-MM-DD
 let formattedDate = `${year}-${month}-${day}`;
 
 // Display the formatted date
 console.log("Current Date (YYYY-MM-DD):", formattedDate);

}

//DAteCalculate()

var test1=()=>{

    console.log( Math.floor(Math.random()*100))

    let arr=[1,-7,3,8,11,-12];
    console.log(arr.reverse())
    console.log(arr.sort()) //Sort as chars
    console.log(arr.sort((a,b) => a-b)) //Asending
    console.log(arr.sort((a,b) => b-a)) //Descending

   // console.log(arr.sort(function(a, b){return a - b}))
    console.log(Math.max.apply(null, arr))
    console.log(Math.min.apply(null, arr))
    console.log(arr)
    console.log(arr.indexOf(-7))


}


function secondLargestinArray(){
    let arr=[1,-7,3,8,11,-12];

    let DesArr= arr.sort((a,b) => b-a)
    console.log("Largest: "+ DesArr[0])
    console.log("Second Largest: "+ DesArr[1])

    //OR

    console.log("Largest: "+Math.max.apply(null,arr))
    console.log("Smallest: "+Math.min.apply(null,arr))
}

secondLargestinArray()
