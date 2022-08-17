import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useShoppingContext } from '../../context/StoreContext';
import { CardStore } from '../Card/CardStore';

type Anchor = 'right';

type TemporaryDrawerProps = {
  isOpen: boolean;
}

export default function TemporaryDrawer({ isOpen }: TemporaryDrawerProps) {
  const { CloseCard } = useShoppingContext();

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={CloseCard}
    >
      <CardStore />
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={isOpen}
            onClose={CloseCard}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}