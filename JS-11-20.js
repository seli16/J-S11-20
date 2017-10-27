function firstLast6(array){
    if(array[0]==6){
        return true;
    }
    else if(array[array.length-1]==6){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    if(array.includes(2) || array.includes(3)){
        return true
    }else{
        return false;
    }
}

function fix23(array){
    if(array[array.indexOf(3)-1]==2){
        (array[array.indexOf(3)])= 0;
    }
    return array;
}


function countYZ(x){
    var num=0;
    x = x.toUpperCase();
    for(var i=0; i<x.length; i++){
        if(x[i]==" " && x[i-1]=="Z"){
            num++;
        }
        if(x[i]==" " && x[i-1]=="Y"){
            num++;
        }

    }

    if(x[x.length-1] == "Y"||x[x.length-1]=="Z") {
        num++;
    }
    return num;
}

function endOther(word1, word2){
    word1= word1.toUpperCase();
    word2 = word2.toUpperCase();
    if(word1.length>= word2.length && word1.endsWith(word2)){
        return true;
    }
    if(word2.length>= word1.length && word2.endsWith(word1)){
        return true;
    }
    return false;
}

function starOut(word){
   var answerWord= "";
   for(var i=0; i<word.length; i++){
       if(word[i]!="*"&&word[i-1]!="*"&&word[i+1]!="*"){
           answerWord+= word[i];
       }
   }
   return answerWord;
}


function getSandwich(word){
    var firstSandwich= word.indexOf("bread");
    var lastSandwich=word.lastIndexOf("bread");
    var answer= word.substring(firstSandwich+5,lastSandwich);
    if(firstSandwich== -1 || lastSandwich== -1) {
        return "";
    }else if(firstSandwich!= lastSandwich){
        return answer;
    }else{
        return"";
    }

        return answer;


    }

function canBalance(x){
     sum1= 0;
     sum2= 0;
    for(var i=0; i<x.length; i++){
        sum1+= x[i];
        for(var y=i+1; y<x.length; y++){
            sum2+= x[y];
        }
        if(sum1==sum2){
            return true;
        }
         sum2= 0;

    }

        return false;
}

function countClumps(clump) {
    var sum = 0;
    for (var i = 0; i < clump.length; i++) {
        if (clump[i] == clump[i - 1] && clump[i]!= clump[i+1]) {
            sum += 1;
        }

    }
    return sum;
}

function evenlySpaced(x,y,z){
    if(x-y==y-z){
        return true;
    }
    if(y-x==x-z){
        return true;
    }
    if(z-y==y-x){
        return true;
    }
    if(z-x==x-y){
        return true;
    }
    if(x==y && y==z){
        return true;
    }
    if(x-z==z-y){
        return true;
    }
    return false;


}


function tester() {
    console. log(num);
    document.getElementById("output").innerHTML = firstLast6([12,6,4,6]);
    document.getElementById("output1").innerHTML = has_23(2,3);
    document.getElementById("output2").innerHTML = fix_23([2,3,6]);
    document.getElementById("output3").innerHTML = countYZ("emily", "pez");
    document.getElementById("output4").innerHTML = endOther("Hiabc","abc");
    document.getElementById("output5").innerHTML = starOut("se*li");
    document.getElementById("output6").innerHTML = getSandwich("xbreadjambreadx");
    document.getElementById("output7").innerHTML = canBalance([4,3,6,2,8]);
    document.getElementById("output8").innerHTML =countClumps([4,5,5,5,5,8,2]);
    document.getElementById("output9").innerHTML = evenlySpaced(5,6,7);