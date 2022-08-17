import { Box, Grid } from '@mui/material';
import data from "../../data/items.json";
import CardItem from '../../components/Card/Card';
import styled from 'styled-components';

const H1 = styled.h1`
  margin: 15px 0px;
`

const Store = () => {
  return <>
    <H1>Store</H1>
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <CardItem {...item} key={item.id} />
        ))}
      </Grid>
    </Box>
  </>
}

export default Store