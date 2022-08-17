import { memo } from "react";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Button, Grid } from '@mui/material';
import { formatCurrency } from '../../utilities/formatCurrency';
import styled from "styled-components";
import { useShoppingContext } from "../../context/StoreContext";

const StyledCardActions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .card_actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 100%;
    gap: 10px;
    margin: 10px 0;
    
    div {
      flex-basis 100%;
      text-align: center;
    }
  }
`

type cardItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
}

const CardItem = (item: cardItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingContext();


  return <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card>
      <CardMedia
        component="img"
        height={140}
        image={item.imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatCurrency(item.price)}
        </Typography>
      </CardContent>
      <CardActions>
        {
          getItemQuantity(item.id) === 0 ? <Button
            style={{ width: "100%" }}
            size="small"
            color='primary'
            variant="contained"
            onClick={() => increaseCartQuantity(item.id)}
          >
            + Add to Cart
          </Button> : <StyledCardActions>
            <div className="card_actions">
              <Button
                style={{ width: "100%" }}
                size="small"
                color='primary'
                variant="contained"
                onClick={() => increaseCartQuantity(item.id)}
              >
                +
              </Button>

              <div>
                <span>{getItemQuantity(item.id)} in Cart</span>
              </div>

              <Button
                style={{ width: "100%" }}
                size="small"
                color='warning'
                variant="contained"
                onClick={() => decreaseCartQuantity(item.id)}
              >
                -
              </Button>
              
            </div>
            <Button
              style={{ width: "100%" }}
              size="small"
              color='error'
              variant="contained"
              onClick={() => removeFromCart(item.id)}
            >
              remove all
            </Button>
          </StyledCardActions>
        }
      </CardActions>
    </Card>
  </Grid>
}

export default memo(CardItem)