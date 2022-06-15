import React, {useState, useEffect} from 'react';
import CategoryList from '../static/CategoryList'
import CategoryModal from './CategoryModal'
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Button = styled.button `
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
`
const CategoryButton = styled(Button)`
    height: 72px;
    padding: 4px;
    color: ivory;
    font-size: 13.3px;
    font-weight: 400;
`;

const SearchImg = styled.img`
    width:30px;
    height:30px;
    margin:10px;
    color:white;
`

const CategoryNav = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding-left: 0px;
    padding-right: 40px;
    background-color: #4a4a4a;
    border-bottom: 1px solid #4a4a4a;
    z-index: 30;
`
const Categories = styled.ul `
    list-style :none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Category = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 14px 0 0;
`


// const RightCategories =styled.

const  Nav = ()=> {
    const [categoryImg, setCategoryImg] = useState(); 
    const [categoryLists, setCategoryLists] = useState([]);
    const [modal, setModal] = useState(false);
    const [navColor, setNavColor] = useState(false);

    const closeModal = () => {
        setNavColor(false);
        setModal(false)
    }
    useEffect(()=>{
        setCategoryLists(CategoryList)
    },[])

    return (
        <CategoryNav>
            <nav>
                <Categories>
                    {
                        categoryLists.map(({id, categoryName, categoryImg}) => {
                            return (
                                <Category key={id}>
                                    <CategoryButton onClick= {function  handleModal() {
                                        setCategoryImg(categoryImg)
                                        // setCategoryLists(categoryLists)
                                        setNavColor(true);
                                        setModal(true)
                                    }}>
                                        {categoryName}
                                    </CategoryButton>
                                </Category>
                            )
                        })
                    }
                    <Category>
                        <CategoryButton>
                            닫기 X
                        </CategoryButton>
                    </Category>
                    <Category>
                        <CategoryButton>
                        <FontAwesomeIcon icon={faSearch} />
                        </CategoryButton>
                    </Category>
                </Categories>
            </nav>
            <nav>
                <Categories>
                    <Category>
                        <CategoryButton>
                            로그인
                        </CategoryButton>
                    </Category>
                    <Category>
                        <CategoryButton>
                            장바구니
                        </CategoryButton>
                    </Category>
                </Categories>
            </nav>
            <CategoryModal
                categoryImg={categoryImg}
                colseModal={closeModal}
                modal={modal}
                />
                
        </CategoryNav>
    );
}

export default Nav;