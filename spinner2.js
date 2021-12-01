const array =['\\','|','/','-','\\','/','-','|','\n'];
let interval = 1000;
for(let ele of array){
  setTimeout(() => {
    
    if(ele === array[array.length-1]){
      process.stdout.write(ele);
    } else {
      process.stdout.write('\r'+ele+' ');
    }
  },interval);
  interval += 100;
}