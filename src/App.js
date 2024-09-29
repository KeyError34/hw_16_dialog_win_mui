import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle
} from '@mui/material';

function App() {

  const [open, setOpen] = useState(false);

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Верхняя панель навигации */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Основной контейнер */}
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Material UI App
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Dialog
        </Button>
      </Container>

      {/* Диалоговое окно */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog box example using Material UI.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Concert
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
