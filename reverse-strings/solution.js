function solution(str){
    let remix="";arrStr=new Array(str.split(""));for(i=str.length-1;i>-1;i--){remix+=str.substr(i,1);}
    return remix;
    }