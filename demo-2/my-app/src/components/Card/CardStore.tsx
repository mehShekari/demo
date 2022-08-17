
import { Box, Typography } from '@mui/material';
import { useShoppingContext } from '../../context/StoreContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import Cartitems from './Cartitem';

export const CardStore = () => {
  const {
    store,
    totalPrice
  } = useShoppingContext();

  if (store.length === 0) return <>
    <Typography
      variant="h5"
      component="div"
      bgcolor="#121212"
      color="#ffff"
      p={1}
    >
      Store
    </Typography>
    <Typography component="div" variant="h5" p={1}>
      No Data
    </Typography>
  </>

  return <>
    <Typography
      variant="h5"
      component="div"
      bgcolor="#121212"
      color="#ffff"
      p={1}
    >
      Store
    </Typography>
    <Box p={1}>
      {store.map(item => (
        <Cartitems {...item} key={item.id} />
      ))}

      Total: {formatCurrency(totalPrice(store))}
    </Box>
  </>
}
