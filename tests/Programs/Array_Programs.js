
function commanNumbersinArr(){

    let arr1= [1,3,4,6,7,8]
    let arr2=[4,0,9,2,1]
    let arr3=[];

    for (let i=0; i<= arr1.length; i++)
    {
       if ( arr2.includes( arr1[i]))
       {
        arr3.push( arr1[i])
       }
    }
    console.log(arr3)
}

commanNumbersinArr()

//----------------------------------------------------------------------------------------------------------
var DAteCalculate = () => {
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
//----------------------------------------------------------------------------------------------------------
var test1 = () => {
    console.log(Math.floor(Math.random() * 100))
    let arr = [1, -7, 3, 8, 11, -12];
    console.log(arr.reverse())
    console.log(arr.sort()) //Sort as chars
    console.log(arr.sort((a, b) => a - b)) //Asending
    console.log(arr.sort((a, b) => b - a)) //Descending
    // console.log(arr.sort(function(a, b){return a - b}))
    console.log(Math.max.apply(null, arr))
    console.log(Math.min.apply(null, arr))
    console.log(arr)
    console.log(arr.indexOf(-7))
}

//----------------------------------------------------------------------------------------------------------
function secondLargestinArray() {
    let arr = [1, -7, 3, 8, 11, -12,33,44];
    let DesArr = arr.sort((a, b) => b - a)
    console.log("Largest: " + DesArr[0])
    console.log("Second Largest: " + DesArr[1])
    //OR
    let Largest=arr[0];
    let Secondlargest= [1];
    for (let i =0;i<arr.length;i++)
    {
       if (arr[i] > Largest)
       {
        Largest=arr[i]
       }

    }
    console.log(Largest)


    for (let i =0;i<arr.length;i++)
        {
           if (arr[i] > Secondlargest && arr[i] != Largest )
           {
            Secondlargest=arr[i]
           }
    
        }
        console.log(Secondlargest)
}
//secondLargestinArray()
//----------------------------------------------------------------------------------------------------------
function LArgestSmallestNum(){
    let arr = [1, -7, 3, 8, 11, -12];
    console.log("Largest: " + Math.max.apply(null, arr))
    console.log("Smallest: " + Math.min.apply(null, arr))
}
//LArgestSmallestNum();
//----------------------------------------------------------------------------------------------------------