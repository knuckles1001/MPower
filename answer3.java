  
 function recur (n, cur) {

  if (!cur) {
   cur = 0;
  }
   
  if(n < 2 || n%1!=0){
	 throw new Error ('Invalid input');
  } else{
	    do {
  		  cur=cur + 1 / (n * (n -1));
		    n=n - 1;
	    }
	    while (n !== 2);
	  return 1 / n + cur;
  }
}
