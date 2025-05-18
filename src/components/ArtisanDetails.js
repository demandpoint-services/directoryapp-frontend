import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Divider,
  Stack,
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
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
          {artisan.name}
        </DialogTitle>

        <DialogContent dividers>
          <Stack spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h6">{artisan.fullName}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {artisan.specialty}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>{artisan.experience}</strong> years of experience
            </Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 500 }}>
            Describe the Work:
          </Typography>

          <TextField
            fullWidth
            value={requestDescription}
            onChange={(e) => setRequestDescription(e.target.value)}
            multiline
            rows={5}
            placeholder="Enter the job details you want the artisan to perform..."
            variant="outlined"
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={onRequest}
            variant="contained"
            color="primary"
            disableElevation>
            Send Request
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      {confirmationOpen && (
        <Dialog
          open={confirmationOpen}
          onClose={onClose}
          maxWidth="xs"
          fullWidth>
          <DialogTitle textAlign="center">Request Sent</DialogTitle>
          <DialogContent>
            <Typography textAlign="center" variant="body1" sx={{ my: 2 }}>
              Your request has been sent to <strong>{artisan.name}</strong>.
              They will get back to you soon!
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button onClick={onClose} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ArtisanDetails;
