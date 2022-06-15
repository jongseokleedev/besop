import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import CategoryList from './CategoryList'

function CategoryLists({}) {
    const [list,setList] = useState([]);

    const CategoryListsWrapper = styled.div`
    display :flex;
    justify-content :space-between;
    `


const secondLists = styled.div`
    margin: 170px 0px 40px;
`
const topListWrapper = styled.div`
    display:flex;
`
    return (
        <CategoryListsWrapper>
            <div>
                <div>
                    {list.map(lists=>{
                        return(
                            <CategoryList
                                key={lists.id}
                                categoryName={lists.categoryName}
                                contentsList={lists.listContents}
                            />
                        )
                    })}
                </div>
            </div>
        </CategoryListsWrapper>

    )



}

export default CategoryLists;

