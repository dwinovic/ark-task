/*

REQUIRE:
- Explain 10 method built in JS 

*/

// 1. Array.shift()
// — Untuk menghapus element (index) pertama dari sebuah array

const users = ['tomo', 'timi', 'tumu'];
users.shift();
// console.log(users);

// 2. Array.reverse()
// — Untuk mengubah urutan element / index secara terbalik dari sebuah array
const brands = ['coca - cola', 'fanta', 'sprite'];
brands.reverse();
// console.log(brands);

// 3. Array.every() ===
// — Untuk melakukan pengecekan sebuah array dengan kondisi setiap elemet / index (every element / index) harus sesuai dengan kondisi yg ditentukan dan akan mengembalikkan nilai boolean.
const days = ['monday', 'sunday', 'sunday', 'sunday', 'sunday'];
const isHappy = days.every((day) => day === 'sunday');

console.log(isHappy);

// 4. Array.some()
// — Konsepnya sama seperti method every, akan tetapi apabila ada beberapa element / index yang sesuai dengan kondisi yang ditentukan maka akan mengembalikkan nilai boolean, tidak harus semua array sesuai dengan kondisi tersebut.
const hobbies = ['code', 'code', 'code', 'sleep'];
const isPassion = hobbies.some((hobbi) => hobbi === 'sleep');

// console.log(isPassion);

// 5. Object.keys()
// — Method built in untuk object dengan tujuan mengubah sebuah object menjadi array.
const myProfile = {
  name: 'Nopik',
  age: 21,
  isHappy: true,
};

const keyMyprofile = Object.keys(myProfile);
// console.log(keyMyprofile);

// 6. Object.freeze()
// — Untuk mengunci object supaya tidak bisa dilakukan penambahan, pengurangan, atau pengubahan data object.
const lockMyProfile = Object.freeze(myProfile);
lockMyProfile.age = 10;
// myProfile.age = 17;
// console.log(myProfile);

console.log(lockMyProfile);

// 7. Object.values()
// — Method yang memungkinkan untuk mendapatkan semua value property data dari sebuah object dengan ditampilkan sebagai data array. Dengan demikian dapat dilakukannya proses yang membutuhkan array.
const valMyProfile = Object.values(myProfile);

// console.log(valMyProfile);

// 8. Object.entries()
// — Memungkinkan untuk mendapatkan sebuah key dan properti dari sebuah object dengan mengembalikkan nilai menjadi array dua dimensi dengan setiap index array berisikan key dan properti masing - masing.

const entriProfile = Object.entries(myProfile);
// console.log(entriProfile);

// 9. string.toLowerCase( )
// — Untuk mengubah string menjadi huruf kecil semua.
const fullName = 'Novi Dwi Cahya';
const allLower = fullName.toLowerCase();

// console.log(allLower);

// 10. Date()
// — Method built in untuk mendapatkan data waktu hari ini. Data yang dikembalikkan berupa detik, menit, jam, hari, tanggal, bulan, tahun, dan lokasi sesuai posisi / setting browser.

const today = Date();

// console.log(today);
