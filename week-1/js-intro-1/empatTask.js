const data = {
  id: 1,
  name: 'Leane Graham',
  username: 'Bret',
  email: 'sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt 556',
    city: 'Wgenborough',
    zipcode: '32-398-3878',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

// Mengubah data
const myUser = {
  ...data,
  address: {
    ...data.address,
    street: 'Madiun Street',
  },
  name: 'novi dwi cahya',
  email: 'novi@gmail.com',
  hobby: 'code and design',
};

console.log(myUser);

myUser.name = 'Novi Dwi Cahya';
myUser.email = 'nd.cahya19@gmail.com';
myUser.hobby = 'code and design';

// Desctructuring
const { street, city: kota } = myUser.address;

// console.log(kota);

// Debug
// console.log('data: ', data);
// console.log('myUser: ', myUser);
// console.log('street: ', street);
// console.log('city: ', city);

// myUser.username = 'Nopik';
// myUser.address.street = 'Jl. Sri Rejeki';
// myUser.address.suite = 'Munggut';
// myUser.address.city = 'Madiun';
// myUser.address.zipcode = '63181';
// myUser.phone = '628999876165';
// myUser.website = 'dwinovic.vercel.com';
