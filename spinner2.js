process.stdout.write('hello from spinner1.js... \rheyyy\n');
let counter = 100;
while (counter <= 1700) {
setTimeout(() => {
  process.stdout.write('\r|   ');
}, counter += 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, counter += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, counter += 200);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, counter += 200);

};
