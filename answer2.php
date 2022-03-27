<?php


class hashTable{
	
	private $cache = array();
  
  //In php will use A keyed list to do the hash-table
  //key: array(value,weight,last access)
  
  //get(key)- Get the value of the key if the key exists in the cache, otherwise return -1
  //O(1)
    function get($key){
		$nowTime=time();
		if($this->$cache[$key]){
			$this->$cache[$key][2]=$nowTime;
			return $key.",".$this->$cache[$key][0].",".$this->$cache[$key][1];
		}else{
			return -1;
		}

    }
	
  
  //put(key, value, weight) - Set or insert the value, when the cache reaches its capacity, it should invalidate the least scored key. The score is calculated as:
  //O(n)
	function put($key,$value,$weight){
		$nowTime=time();
		$tempCache = $this->$cache;
		$nowCount = 0;
		if(is_array($tempCache)){
  			  $nowCount = count($tempCache)+1;
		} else {
			$nowCount = 0;
		}
		$_cacheSize= 5 ;
		if($tempCache[$key] || $nowCount <=$_cacheSize){
			$this->$cache[$key]=array($value, $weight,$nowTime);
		}else{
			$minScore=0;
			$minKey="";
			if (is_array($tempCache) || is_object($tempCache))
			{
				foreach($tempCache as $_key => $_value) {
					$score=0;
          //$_value[2] is the last_access_time, $_value[1] is the weight
					if($nowTime!=$_value[2]){
						$score=$_value[1]/($nowTime-$_value[2]+1);
					}else{
						$score=$_value[1]/-100;
					}

					if($minScore==0){
						$minScore=$score;
						$minKey=$_key;
					}else if($score<$minScore){
						$minScore=$score;
						$minKey=$_key;
					}
				}
			}
			unset($this->$cache[$minKey]);
			$this->$cache[$key]=array($value, $weight,$nowTime);
		}
    }

}


//Testing
$demo = new hashTable;
$demo->put("A","0","1");
$demo->put("B","2","3");
$demo->put("C","4","5");
$demo->put("D","6","7");
$demo->put("E","8","9");
echo $demo->get("A");
echo "<br>";
echo $demo->get("B");
echo "<br>";
echo $demo->get("C");
echo "<br>";
echo $demo->get("D");
echo "<br>";
echo $demo->get("E");
echo "<br>";
echo $demo->get("F");
echo "<br>";
echo "<br>";
echo "<br>";
$demo->put("F","10","11");
echo $demo->get("A");
echo "<br>";
echo $demo->get("B");
echo "<br>";
echo $demo->get("C");
echo "<br>";
echo $demo->get("D");
echo "<br>";
echo $demo->get("E");
echo "<br>";
echo $demo->get("F");
echo "<br>";

?>
