
const array =['\\','|','/','-','\\','/','-','|'];
let interval = 1000;
for(let ele of array){
  setTimeout(() => {
    process.stdout.write('\r'+ele+'   ');
  },interval);
  interval += 100;
}
setTimeout(() => {
  process.stdout.write('\n');
}, 2000);

