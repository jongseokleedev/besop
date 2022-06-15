import shortid from 'shortid'

const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

const CategoryList = [
    {
      id : shortid(),
      categoryName : '스킨 케어',
      categoryImg : 'category_skin.webp',
    },
    {
      id : shortid(),
      categoryName : '바디&핸드',
      categoryImg : 'category_bodyhand.jpeg',
    },
    {
        id : shortid(),
        categoryName : '헤어',
        categoryImg : 'category_hair.jpeg',
    },
    {
        id : shortid(),
        categoryName : '향수',
        categoryImg : 'category_perfume.jpeg',
    },
    // {
    //     id : shortid(),
    //     categoryName : '홈',
    //     categoryImg : '',
    // },
    // {
    //     id : shortid(),
    //     categoryName : '키트&여행 제품',
    //     categoryImg : '',
    // },
    // {
    //     id : shortid(),
    //     categoryName : '기프트 가이드',
    //     categoryImg : '',
    // },
    // {
    //     id : shortid(),
    //     categoryName : '읽기',
    //     categoryImg : '',
    // },
    // {
    //     id : shortid(),
    //     categoryName : '스토어',
    //     categoryImg : '',
    // },

]

export default CategoryList;