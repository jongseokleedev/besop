import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import CategoryList from "./CategoryList"
import list from "../static/list"
import CategoryLists from "./CategoryLists"


const CategoryModalWrapper = styled.div`
    /* top: 80px;
    right: 0;
    bottom: 0;
    left: 0; */
    background-color: rgb(240, 239, 224);
    display : ${props => (props.hidden ?  'inline' : 'none')};
    width:283px;
`

const CategoryModalMain = styled.div`
display: flex;
justify-content: space-between;
`

const CategoryImg = styled.img`
width: 450px;
`




function CategoryModal({categoryImg, closeModal, modal}) {
    console.log(categoryImg, modal )

    
    return(
        <CategoryModalWrapper hidden={modal}>
            <CategoryModalMain>
                <div>
                    
                </div>
                test
                {/* {categoryImg.map(img => { */}
                    {/* return ( */}
                        <CategoryImg 
                            // key={img.imgId}
                            // alt={img.imgAlt}
                            src={`/assets/Category/${categoryImg}`}
                        />
                    {/* ) */}
                {/* })} */}
            </CategoryModalMain>
            <CategoryLists modal={closeModal}>


            </CategoryLists>
        </CategoryModalWrapper>
    );
}

export default CategoryModal