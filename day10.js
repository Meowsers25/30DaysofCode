process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var match;
    function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
  n =  dec2bin(n).split("");
    
var chain = 0;
var counter = 0;
var runningChain = false;
    for (var i = 1; i < n.length; i++) {
       
        if (!runningChain && n[i] == 1 && n[i - 1] == 1) {
            counter = 2;
            runningChain = true;
        } else if (runningChain && n[i] == 1) {
            counter++;
            console.log(n[i]);
        } else {
            if (counter > chain) {
                chain = counter;
            }
            counter = 0;
            runningChain = false;
        }
    }
    
    if (runningChain) {
        if (counter > chain) {
            chain = counter;
        }
    }
    if(chain == 0) {
        chain = 1;
    }
    console.log(chain);
}
