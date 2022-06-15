import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import CartegoryList from "./CategoryList"

const CategoryListTitle = styled.h2`
    margin-bottom:12px;
    font-size :16px;
    font-weight: 400;
`
const Contents = styled.li`
    margin-bottom:12px;
    font-size:16px;
    font-weight:300;
`

function CategoryList ({contentList}) {

    return (
        <ul>
            {contentList.map(content => {
                return(
                    <Contents key={content.content.id}>
                        {content.content}
                    </Contents>
                );

            })}
        </ul>
    )
};


export default CategoryList