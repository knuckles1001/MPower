  
 function recur (n, cur) {

  if (!cur) {
   cur = 0;
  }
   
 //  n must be bigger than 2 or is 2, the n must be integer so the remainder must be is 0 when it divided by 1
  if(n < 2 || n%1!=0){
	 throw new Error ('Invalid input');
  } else{
	  // if don't use while loop or do while, we use foreach to do the loop action. So we need create a new array to do this
	  int looptime=n-2;
	  int[] array = new int[looptime];
	  for(int element:array){
  		  cur=cur + 1 / (n * (n -1));
		    n=n - 1;
	    }
	  return 1 / n + cur;
  }
}
