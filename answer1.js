/*
Since Big-O notation is a mathematical algorithm, it is difficult to apply it to character directly. So I would suggest converting the character to uppercase and ASCII code before processing, and then sorting from small to large, and two sets of array also need to be processed, and then Big-O notation is processed.

In this case I suggest to use O(log n) processing, because now only single letter case is high performance to compare is the median large or small, effectively reducing the number of runs.
*/

function isSubset(arr1, arr2){
	
	arr1=sort(arr1);
	arr2=sort(arr2);
	
	let subSet=0;
	for (i = 0; i < arr2.length; i++) {   
		//Use O(log n) check each value in array2
		if(BigO(arr1, arr2[i])<0){
			return false;
		}
	}
	return true;
}
function BigO(array, key){
//O(log n) processing
    let min = 0 ;
    let max = array.length -1;
    while(min <= max){
        let middle = Math.floor((min + max) /2);
        if(array[middle] > key) {
            max = middle -1;
        }else if(array[middle] < key){
            min = middle +1;
        }else{
            return middle;
        }
    }
	return -1;
}

function sort(array){
	for (i = 0; i < array.length; i++) {   
		let chartext=array[i];
		// Change the character to uppercase
		chartext=chartext.toUpperCase(); 
		// Change the character to ASCII code
		chartext=chartext.charCodeAt();
		// Add back to the array
		array[i]=chartext;
	}
	// Use the ASCII array to sort from small to large
	array.sort();
	return array;
}
