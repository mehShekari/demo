import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';


import { addModal, products, similarCate } from './ProductSlice';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 100px;
  height: 150px;

  margin: 1rem 2rem;
  box-shadow: 0px 3px 7px #3333;
  padding: 1rem 2rem;
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
    width: 100%;
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
    font-weight: bold;
    color: rgb(70, 70, 70);
  }

  .card_btn--holder{
    text-align: right;
  }
`;

const SimilarProduct = props => {
  const { category, productId } = props;

  const allProducts = useSelector(products);
  const filteredProducts = useSelector(similarCate(allProducts, productId, category));
  const dispatch = useDispatch();

  const handleClick = (productId) => {
    dispatch(addModal(productId, true));
  }

  return (
    <>
      <h2 style={{ paddingLeft: '1rem' }}>like this</h2>
      <Container>

        {filteredProducts.map((item) => {
          return (
            <Card key={item.id}>
              <div className="img_holder">
                <img
                  src={item.image}
                  alt=""
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
    </>
  )
}

export default SimilarProduct