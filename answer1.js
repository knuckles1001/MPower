function isSubset(arr1, arr2){

	for (i = 0; i < arr2.length; i++) {   
	 	let in_arr=0;
	 	for (j = 0; j < arr1.length; j++) {   
	 		if(arr2[i]==arr1[j]){
				in_arr=1;
				break;
			}
		 }
	 	if(in_arr==0){
			document.getElementById("result").innerHTML = "Is not Subset";
		 	return false;
		 }
	}
	document.getElementById("result").innerHTML = "Is Subset";
	return true;
	
}
