const aa = '56';
const bb = '45';
const cc = 45;

if (
  (typeof aa === 'string') |
  (typeof bb !== 'string') |
  (typeof cc === 'string')
) {
  console.log(true);
} else {
  console.log(false);
}
