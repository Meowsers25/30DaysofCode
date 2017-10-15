function processData(input) {
    //Enter your code here
    input = input.split('\n');
    
    //convert input[0] to integer
    var int = parseInt(input[0]);
    
    //slice input into 2 arrays
    var entries = input.slice(1, int + 1);
    var queries = input.slice(int + 1);
   // console.log(entries);
    //console.log(queries);
    
    //declare phoneBook object
    var phoneBook = {};
    
    //to populate phoneBook object
    for (var i = 0; i < entries.length; i++) {
        var newEntries = entries[i].split(" ");
        //console.log(newEntries);
        phoneBook [newEntries[0]] = newEntries[1];
    }
    
    //to check if query names are in the phoneBook object
   for (var i = 0; i < queries.length; i++) {
       if (phoneBook.hasOwnProperty(queries[i])) {
           console.log(queries[i] + '=' + phoneBook[queries[i]]);
           } else {
               console.log('Not found');
           }
   }
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
