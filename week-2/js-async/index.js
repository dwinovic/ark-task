// AJAX
{
  //   const getData = (method, url, limit, callback) => {
  //     const ajax = new XMLHttpRequest();
  //     ajax.open(method, url);
  //     ajax.send();
  //     ajax.onreadystatechange = function () {
  //       const data = JSON.parse(ajax.responseText);
  //       callback(limit, data);
  //     };
  //   };
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const printTitle = (limit, data) => {
  //     // console.log(data);
  //     const printLimit = [];
  //     const dataTitle = [];
  //     data.map((item) => {
  //       dataTitle.push(item.title);
  //       // console.log(item.title);
  //     });
  //     for (let i = 0; i < limit; i++) {
  //       printLimit.push(dataTitle[i]);
  //     }
  //     console.log(printLimit);
  //     // console.log(dataTitle);
  //   };
  //   getData('GET', url, 50, printTitle);
}

// PROMISE
{
  //   const getData = (method, url) => {
  //     const promise = new Promise((resolve, reject) => {
  //       const ajax = new XMLHttpRequest();
  //       ajax.open(method, url);
  //       ajax.send();
  //       ajax.onreadystatechange = function () {
  //         if (ajax.status === 200) {
  //           const data = JSON.parse(ajax.responseText);
  //           resolve(data);
  //         } else {
  //           const error = console.log('server error');
  //           reject(error);
  //         }
  //       };
  //     });
  //     return promise;
  //   };
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   getData('GET', url)
  //     .then((res) => {
  //       const data = res;
  //       data.map((item) => {
  //         console.log(item.title);
  //       });
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}
