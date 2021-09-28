const numbers = [ //immutable Array
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

//main //
console.log("numbers list Befor sorting: ",numbers) //print result
var FinalArray = AhmedSort(numbers); //asc function Call
console.log("numbers list After ASC sorting: ",numbers) //print result
var FinalArray2 = AhmedSort2(numbers); //desc function Call
console.log("numbers list After DESC sorting: ",numbers) //print result
sortFile(); //sort numbers fetched from file and write the result in output file
//------------------------------------asc function-------------------------//

function AhmedSort(numbers){
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length; j++)
    {
        
        if(numbers[j] > numbers[j + 1])// J NOT i 
        {
            let temp = numbers[j]; 
            numbers[j] = numbers[j + 1] //swaping opreation
            numbers[j + 1] = temp;
        }
    }
}
return numbers
}

//-----------------desc function--------------------------//
function AhmedSort2(numbers){
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length  ; j++)
    {
        
        if(numbers[j] < numbers[j + 1]) //J NOT i 
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]  //swaping opreation
            numbers[j + 1] = temp;
        }
    }

}
return numbers
}
//-------------function Read from File---------
function  sortFile()  //sorting number from file
{
var fs = require("fs"); //package
fs.readFile("data.txt", function(err, buf) { 
    var array = buf.toString().split(','); //convert comma sprite to Array
   var A= AhmedSort(array);//Asc sort
    WriteTOFILE(A); //writw Asc sort to file
    var B= AhmedSort2(array);//Desc sort
      WriteTOFILE(B);//Sort Desc sort to file

});
}
//------------------functuion Write to file------------------------
function WriteTOFILE(array)
{
    var fs = require("fs");
var data=array.toString();//convert array to string

fs.appendFile("output.txt","Sorting:"+ data+ "\n", (err) => { //apind data to outputfile
  if (err) console.log(err);
  console.log("Successfully Written to File.");// opreation Succeded

});
}



