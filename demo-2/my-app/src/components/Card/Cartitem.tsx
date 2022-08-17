import { Button, List, Typography } from '@mui/material';
import { useMemo } from 'react'
import Data from '../../data/items.json';
import styled from "styled-components"
import { formatCurrency } from '../../utilities/formatCurrency';
import { useShoppingContext } from '../../context/StoreContext';

type CartItemsProps = {
  id: number,
  quantity: number
}

const CListItem = styled.div`
  display: flex;
`

const Cartitems = ({ id }: CartItemsProps) => {
  const productItem = useMemo(() => {
    return Data.find(item => item.id === id)
  }, [id]);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingContext();

  return (
    <List>
      <CListItem
        style={{ borderRadius: '10px', backgroundColor: 'hsl(300, 10%, 90%)' }}
      >
        <Typography
          width="150px"
          height="100px"
          style={{ overflow: 'hidden' }}
        >
          <img
            src={productItem?.imgUrl}
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              borderRadius: '10px'
            }}
          />
        </Typography>

        <div>
          <div>{productItem?.name}</div>
          <div>{formatCurrency(productItem ? productItem.price : 0)}</div>
          <div style={{ textAlign: 'center' }}>{getItemQuantity(productItem?.id || 0)}×</div>
          <div>

            <Button
              size='small'
              color='primary'
              onClick={() => increaseCartQuantity(productItem ? productItem.id : 0)}
            >
              +
            </Button>

            <Button
              size='small'
              color='error'
              onClick={() => decreaseCartQuantity(productItem ? productItem.id : 0)}
            >
              -
            </Button>
          </div>
        </div>
      </CListItem>
    </List>
  )
}

export default Cartitems