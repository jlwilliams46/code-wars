function isNice(arr){
    let i = 0;

    if (arr.length === 0) { return false;}
    while(i < arr.length) {
        if(arr.indexOf(arr[i]+1) === -1 && arr.indexOf(arr[i]-1) === -1) {
            return false;
        }
        i++;
    }
  return true;
}