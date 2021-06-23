const { default: fetch } = require('node-fetch');

{
  //With Promise and Try Catch
  const getData = () => {
    const promise = new Promise(async (resolve, rejects) => {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const res = await fetch(url);
      const status = res.status;

      if (status === 200) {
        resolve(res);
      } else {
        const error = new Error('Server Error');
        rejects(error);
      }
    });
    return promise;
  };

  const getDataJSON = async () => {
    const response = await getData()
      .then((res) => res.json())
      .catch((err) => {
        return err.message;
      });
    return response;
  };

  const showData = async () => {
    try {
      const data = await getDataJSON();
      data.map((item) => {
        let name = item.name;
        console.log(name);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // showData();
}

{
  // One function | without Promise and try catch
  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = await (await fetch(url)).json();

    if (Object.keys(data).length === 0) {
      console.log('Error path tidak sesuai');
    } else {
      data.map((item) => {
        console.log(item.name);
      });
    }
  };

  getData();
}
