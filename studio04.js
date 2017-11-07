//Write a function named validate that takes in a string of text representing some code filled with parentheses (), brackets [], and curly braces {}.
//
//(, {, [ are called "openers." ), }, ] are called "closers."
//
//The function returns true if the input strings openers are matched in properly nested with the closers.
//
//Examples:
//
//"{ [ ] ( ) }" should return true (properly nested and matched)
//
//"{ [ ( ] ) }" should return false (closing bracket before closing parentheses)
//
//"{ [ }" should return false (no closing bracket)
//
//"}" should return false (no opening curly brace)
//
//Hint: you will use a stack for this problem. Use the following implementation for stacks.
//
//st = Stack()
//st.size # 0
//st.push(4)
//st.size # 1
//st.pop() # 4

//Sample Input:
//{[]()}

//Sample Output:
//True

function validate(string) {
	var st = [];
	var openers = ["{", "[", "("];
	var closers = ["}", "]", ")"];
	var result = true;

	for (var i = 0 ; i < string.length ; i++) {
		
		// If character is an opener, push onto array
		if (openers.indexOf(string[i]) !== -1) {
			st.push(string[i]);
			
		// Otherwise if char is a closer, compare it to
		// last item in stack - should be a match
		} else if (closers.indexOf(string[i]) !== -1) {
			
			// Compare to last item in stack & if NOT matching pair, return false (mismatch)
			if (closers.indexOf(string[i]) !== openers.indexOf(st.pop())) {
				result = false;
				break;
			}			
		}
	}
	
	// Stack should be empty if all brackets were paired up
	if (st.length !== 0) {
		result = false;
	}
	return result;
}

console.log(validate('{[]()}'));




//Write a function is_anagram, which has the following parameters:
//
//str1 - a string
//str2 - a string
//
//The function will return True whether the strings are anagrams of each other, that is, permutations of each other.
//
//Examples:
//
//is_anagram('tommarvoloriddle', 'iamlordvoldemort')  produces True
//is_anagram('aba', 'aab') produces True
//is_anagram('abc', 'aab') produces False
//is_anagram('aba', 'aa') produces False

//Sample Input:
//aba,aab

//Sample Output
//True

// Diane's ideas: could sort each and then match - so either 2 * nlogn or 2 * n^2 for sorts, then n for match. I think this 
// wastes time.
// Or put strings into arrays & use indexOf to find and then slice to remove
// or just leave as strings and use replace. not sure if this is faster than indexOf & slice or similar, but a little less code

function is_anagram(str1, str2) {
	var result = true;
	var size = str1.length;
	
	// Only compare strings if they are same length - otherwise can't be anagram
	if (size === str2.length) {
		
		// Loop tries to match each char in str1 to a char in str2
		for (var i = 0; i < size ; i++) {
			
			// Try to remove matching character from str2 (removes only 1 occurrence)
			str2 = str2.replace(str1[i], "");
			
			// If match found, the above replace stmt should make str2 SHORTER
			// So, if str2 is NOT shorter then there wasn't a match... set result = false & break out of loop
			if (str2.length !== (size - i - 1)) {
				result = false;
				break;
			}
		}
		
	} else {
		result = false;
	}
	
	return result;
}

console.log(is_anagram('tommarvoloriddle', 'iamlordvoldemort'));