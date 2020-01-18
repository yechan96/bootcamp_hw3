var passLength = 0;
var isSpecial = false;
var isNumeric = false;
var isLower = false;
var isUpper = false;
var characters = [];
var tempPass ="";

var isLength = false;
var isCharacter = false;

var genPassword = document.querySelector("#genPassword");
var genButton = document.querySelector("#genButton");
var copyButton = document.querySelector("#copyButton");


while(!isLength){
    passLength =prompt("Enter the length of the password (must be between 8 and 128 characters");
    if(passLength<=128 && passLength>=8){
        isLength = true;
    }
    else{
        alert("Please enter the correct value");
    }
}

while(!isCharacter){
    isSpecial = confirm("Include special characters?");
    isNumeric = confirm("Include numbers?");
    isLower = confirm("Include lowercase alphabets?");
    isUpper = confirm("Include uppercase alphabets?");
    if(isSpecial||isNumeric||isLower||isUpper){
        isCharacter = true;
    }
    else{
        alert("Please choose at least one chracter type");
    }
}
function pushCharacters(start,end){
    for(var i =start; i<=end;i++){
        characters.push(String.fromCharCode(i));
    }
}
if(isSpecial){
    pushCharacters(32,47);
    pushCharacters(58,64);
    pushCharacters(91,96);
    pushCharacters(123,126);
}
if(isNumeric){
    pushCharacters(48,57);
}
if(isLower){
    pushCharacters(97,122);
}
if(isUpper){
    pushCharacters(65,90);
}

function generatePassword(){
    tempPass ="";
    for (var i = 0; i<passLength;i++){
        tempPass += characters[Math.floor(Math.random()*characters.length)];
    }
    genPassword.textContent=tempPass;
}

genButton.addEventListener("click",generatePassword);
copyButton.addEventListener("click",function(){
    const tempText = document.createElement("textarea");
    document.body.appendChild(tempText);
    tempText.value = tempPass;
    tempText.textContent = tempPass;
    var sel = getSelection();
    var range = document.createRange();
    range.selectNode(tempText);
    sel.removeAllRanges();
    sel.addRange(range);
    if(document.execCommand("copy")){
        alert("Copied to clipboard: " + tempPass);
    }
    else{
        alert("Failed to copy");
    }
    document.body.removeChild(tempText);
});
