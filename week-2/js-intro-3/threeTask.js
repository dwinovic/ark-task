const fetch = require('node-fetch');
/*
REQUIREMENTS:
	- built two promise programs
		- first programs - food recipes
		- second programs - food menus
*/

// FOOD RECIPES PROGRAMS
{
  // Fetching API
  const getAllRecip = () => {
    const promise = new Promise(async (resolve, reject) => {
      const url = 'https://masak-apa.tomorisakura.vercel.app/api/recipes';
      const getData = await fetch(url);
      const responseCode = getData.status;
      if (responseCode === 200) {
        resolve(getData);
      } else {
        const error = new Error(`Server error`);
        reject(error);
      }
    });

    return promise;
  };

  // Get Data JSON
  const getData = () => {
    return getAllRecip()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const data = res.results;
        return data;
      });
  };

  const showTitleRecipe = async () => {
    const data = await getData();
    const result = [];
    let increment = 0;

    data.map((item) => {
      increment += 1;
      let titleRecipe = `${increment}. ${item.title}`;
      result.push(titleRecipe);
    });

    console.log('Show Title: ', result);
  };

  // showTitleRecipe();
}

// FOOD MENUS PROGRAMS
{
  const dataAPI = require('./data.json');

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = dataAPI;
        let status = data.status;
        // status = 404;

        if (status === 200) {
          resolve(data);
        } else {
          const error = new Error('Server Error! Failed to fetching API');
          reject(error);
        }
      }, 3000);
    });
  };

  const showData = async () => {
    try {
      const res = await getData();
      const data = res.results;
      let number = 0;
      data.map((item) => {
        number += 1;
        console.log(
          `${number}. Makanan ${item.title} berasal dari ${item.asal}`
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  showData();
}
