document.addEventListener('keyup',function(){
	
	var input = document.getElementById('input').value;
	console.log(input);
	 if(input == "A" || input == "E" || input == "I" || input == "O" || input == "U" || input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
            result = true;
            document.getElementById('consonantVowel').innerHTML = "This is Vowel";
        }
        else if (input == 'b' || input == 'c' || input == 'd' || input == 'f' || input == 'g' || input == 'h' || input == 'j' || input == 'k' || input == 'l' || input == 'm' || input == 'n' || input == 'p' || input == 'q' || input == 'r' || input == 's' || input == 't' || input == 'v' || input == 'w' || input == 'x' || input == 'y' || input == 'z' || input == 'B' || input == 'C' || input == 'D' || input == 'F' || input == 'G' || input == 'H' || input == 'J' || input == 'K' || input == 'L' || input == 'M' || input == 'N' || input == 'P' || input == 'Q' || input == 'R' || input == 'S' || input == 'T' || input == 'V' || input == 'W' || input == 'X' || input == 'Y' || input == 'Z'   ){
             result = true;
             document.getElementById('consonantVowel').innerHTML = "This is Consonant";
        }
        else{
            result = false;
            document.getElementById('consonantVowel').innerHTML = "INVALID, TRY A NEW ONE";
        }
        
        
    })