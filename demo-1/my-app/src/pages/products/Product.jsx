import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import callApi, { ALL_PRODUCTS } from '../../api/apiClient';
import SimilarProduct from './SimilarProduct';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin:0px outo;

  .card_header {
    display: flex;
    justify-content: flex-start;
    h2 {
      width: 50%;
      font-size: 1.4rem;
    }
    padding-left: 1rem;
  }
  
  .wrapper {
    display: flex;

    @media(max-width: 700px) {
      flex-direction: column;
    }
  }

  .img_holder {
    width: 50%;
    height: 450px;
    background-color: white;
    overflow: hidden;

    @media(max-width: 700px) {
      width: 100%;
    }

    img{
      width: 100%;
    }
  }

  .para_holder {
    font-size: 1.6rem;
    width: 50%;
    padding: 0px 1rem; 

    @media(max-width: 700px) {
      width: 100%;
    }
    
    .product_info {
      font-weight: bold;
    }

    .product_para {
      padding: 0rem 1rem;
    }

    .category{
      font-size: 1.2rem;
      background-color: crimson;
      display: inline-block;
      padding: 0.3rem 0.7rem;
      border-ridus: 5px;
      color: white;
      border-radius: 5px;
    }

    .price {
      display: inline-block;
      font-weight: bold;
      margin: 0 2rem;
    }
  }
`

const Product = (props) => {
  const { productId } = props;
  const [state, setState] = useState(null);

  useEffect(() => {
    callApi(ALL_PRODUCTS, productId)
      .then((res) => {
        setState(res);
      })
  }, [productId])

  if (state === null) return <h2>noting to show</h2>

  else {
    return (
      <Container>
        <div className="card_header">
          <h2></h2>
          <h2>{state.title}</h2>
        </div>

        <div className='wrapper'>
          <div className="img_holder">
            <img src={state.image} alt="" />
          </div>

          <div className="para_holder">
            <div className="product_info">Product Info</div>
            <p className="product_para">{state.description}</p>
            <span className='category'>{state.category}</span>
            <span className='price'>{state.price}$</span>
          </div>
        </div>

        <div>
          <SimilarProduct
            category={state.category}
            productId={state.id}
          />
        </div>
      </Container>
    )
  }
}

export default Product