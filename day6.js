function processData(input) {
    
    
    
    var second = "";
    input = input.split('\n');
    //console.log(hack);
    for (var i = 1; i < input.length; i++) {
       var first = "";
        var second = "";
        //console.log(arr[i])
        for (var a = 0; a < input[i].length; a++) {
            if (a % 2 === 0) {
                first += input[i][a];
            } else {
                second += input[i][a];
          }
        }
        console.log(first + " " + second);
        //console.log(arr[i]);
      } 
   }
    
    //Enter your code here


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
