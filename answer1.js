//

function isSubset(arr1, arr2){
	
	arr1=sort(arr1);
	arr2=sort(arr2);
	
	let subSet=0;
	for (i = 0; i < arr2.length; i++) {   
		if(BigO(arr1, arr2[i])<0){
			return false;
		}
	}
	return true;
}
function BigO(array, key){
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
		chartext=chartext.toUpperCase();
		chartext=chartext.charCodeAt();
		array[i]=chartext;
	}
	array.sort();
	return array;
}
