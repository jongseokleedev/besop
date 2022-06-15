import shortid from 'shortid';

const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

const list = [
    {
        id: shortid(),
        categoryName : '스킨',
        listContents : '테스트',
    },


];

export default list;