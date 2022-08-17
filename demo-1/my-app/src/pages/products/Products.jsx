import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ALL_PRODUCTS } from "../../api/apiClient";
import StyledHeader from '../../components/styles/styledHeader';
import styled from 'styled-components';
import ShowModal from './ShowModal';
import Product from './Product';
import { allModals, getAllProducts, products } from './ProductSlice';
import { addModal } from "./ProductSlice";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 0rem  5rem;
`;

const Card = styled.div`
  width: 250px;
  margin: 1rem 0rem;
  box-shadow: 0px 3px 7px #3333;
  padding: 1rem 2rem;
  align-self: stretch;
  border-radius: .5rem;
  position; relative;
  transition: all 0.3s; 

  &:hover {
    box-shadow: 2px 5px 12px #333;
    transform: scale(1.03);
  }

  .title {
    font-size: 1.4rem;
    padding-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
  }

  .img_holder {
    width: 95%;
    height: 250px;
    margin: 0px auto;
    overflow: hidden;
    background-color: #ffff;
    .image {
      width: 100%;
      display: block;
    }
  }

  .price {
    font-size: 1.2rem;
    display: block;
    padding: 1rem 1.2rem;
    font-weight: bold;c
    color: rgb(70, 70, 70);
  }

  .card_btn--holder{
    text-align: right;
  }
  .card_btn {
    position: relative;
  }
`;

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector(products);
  const modals = useSelector(allModals)

  useEffect(() => {
    dispatch(getAllProducts(ALL_PRODUCTS));
  }, [])

  useEffect(() => {
    if (modals.length !== 0) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modals])

  const handleClick = (productId) => {
    dispatch(addModal(productId, true));
  }

  return (
    <div>
      <StyledHeader>Products</StyledHeader>
      <Container>
        {state.map((item) => {
          return (
            <Card key={item.id}>
              <div className="img_holder">
                <img
                  src={item.image}
                  className="image"
                />
              </div>
              <h3 className="title">{item.title}</h3>

              <small className="price">{item.price} $</small>

              <div className="card_btn--holder">
                <button
                  className="card_btn"
                  onClick={() => handleClick(item.id)}
                >
                  more info
                </button>
              </div>
            </Card>
          )
        })}
      </Container>
      {
        modals.map((item, index) => {
          if (!item.status) return;
          return (
            <ShowModal
              status={item.status}
              key={index}
              id={item.id}
            >
              <Product productId={item.id} index={index} />
            </ShowModal>
          )
        })
      }
    </div>
  )
}

export default Products