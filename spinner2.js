process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinnerAnimation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let wait = 100;

for (const animation of spinnerAnimation) {
  setTimeout(() =>  process.stdout.write(animation), wait);
  wait += 200;
}