  
 function recur (n, cur) {

  if (!cur) {
   cur = 0;
  }
   
  if(n < 2 || n%1!=0){
	 throw new Error ('Invalid input');
  } else{
	  int looptime=n-2;
	  int[] array = new int[looptime];
	  for(int element:array){
  		  cur=cur + 1 / (n * (n -1));
		    n=n - 1;
	    }
	  return 1 / n + cur;
  }
}
