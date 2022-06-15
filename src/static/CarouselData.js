import shortid from 'shortid';

const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

const CarouselData = [
    {
        id: shortid(),
        title : '테싯 오 드 퍼퓸',
        desc : '상쾌한, 그린, 시트러스향',
        alt : 'tecit',
        // src : '../assets/Carousel/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Medium_535x522px.png'
        src : 'Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Medium_535x522px.png'
    },
    {
        id: shortid(),
        title : '로즈 오 드 퍼퓸',
        desc : '플로럴, 그린, 우디',
        alt : 'rose',
        src : 'Aesop_Ro__zu_Eau_de_Parfum_50mL_Hybris_Medium_535x522px.png'
    },
    {
        id: shortid(),
        title : '휠 오 드 퍼퓸',
        desc : '흥미를 불러일으키는 향기',
        alt : 'whirl',
        src : 'Aesop_Fragrance_Hwyl_Eau_de_Parfum_50mL_Hybris_Medium_535x522px.png'
    },
    {
        id: shortid(),
        title : '에레미아 오 드 퍼퓸',
        desc : '그린, 플로럴,시트러스향',
        alt : 'Eremia',
        src : 'Aesop_Fragrance_Eremia_Eau_de_Parfum_50mL_Web_Medium_535x522px.png'
    },
    {
        id: shortid(),
        title : '마라케시 오 드 퍼퓸',
        desc : '원초적이고 독특한 향',
        alt : 'marrakech',
        src : 'Aesop-Marrakech-Intense-Eau-de-Parfum-50mL-Hybris-Medium-535x522px.png'
    },
    {
        id: shortid(),
        title : '미라세티 오 드 퍼퓸',
        desc : '유향, 우디, 스파이시한 향',
        alt : 'miraceti',
        src : 'Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Medium_535x522px.png'
    },
    {
        id: shortid(),
        title : '카르스트 오 드 퍼퓸',
        desc : '상쾌한, 허브, 마린향',
        alt : 'karst',
        src : 'Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Large_684x668px.png'
    },


];

export default CarouselData;