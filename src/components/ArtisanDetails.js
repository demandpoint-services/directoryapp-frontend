import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const ArtisanDetails = ({
  artisan,
  openDetails,
  onClose,
  onRequest,
  requestDescription,
  setRequestDescription,
  confirmationOpen,
}) => {
  return (
    <>
      <Dialog open={openDetails} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>{artisan.name}</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6">{artisan.fullName}</Typography>
            <Typography variant="body1">{artisan.specialty}</Typography>
            <Typography variant="body1">
              <b>{artisan.experience}</b> years of experience
            </Typography>
            <TextField
              fullWidth
              label="Description of Work"
              value={requestDescription}
              onChange={(e) => setRequestDescription(e.target.value)}
              multiline
              rows={4}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onRequest} variant="contained" color="primary">
            Request
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      {confirmationOpen && (
        <Dialog open={confirmationOpen} onClose={() => {}}>
          <DialogTitle>Request Sent</DialogTitle>
          <DialogContent>
            <Typography>
              Your request has been sent to {artisan.name}. They will get back
              to you soon!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => onClose()}
              variant="contained"
              color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ArtisanDetails;
