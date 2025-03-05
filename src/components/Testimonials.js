import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/system";

const userTestimonials = [
  {
    avatar: <Avatar alt="Emeka O." src="/headshot1.jpg" />,
    name: "Emeka O.",
    occupation: "Professional Carpenter",
    testimonial:
      "Before joining Demand Point, I relied solely on word-of-mouth to get jobs. Now, clients easily find me through the platform, and I receive consistent booking requests every week. My business has never been this busy!",
  },
  {
    avatar: <Avatar alt="Fatima S." src="headshot2.jpg" />,
    name: "Fatima S.",
    occupation: "Interior Designer",
    testimonial:
      "One of my biggest worries was chasing clients for payments. Demand Point changed that! Now, I receive my payments securely and on time after completing each job. No more unpaid work!",
  },
  {
    avatar: <Avatar alt="Tunde A." src="/headshot9.jpg" />,
    name: "Tunde A.",
    occupation: "Electrician",
    testimonial:
      "With Demand Point, clients can see my availability, book appointments, and chat with me directly. The messaging and booking system save me so much time and make me look more professional.",
  },
  {
    avatar: <Avatar alt="Chiamaka N." src="/headshot4.jpg" />,
    name: "Chiamaka N.",
    occupation: "Tailor & Fashion Designer",
    testimonial:
      "Having a verified badge on my profile has helped me gain clients' trust instantly. I now get more serious customers, and they feel confident hiring me because they know I’m a verified professional.",
  },
  {
    avatar: <Avatar alt="Bashir A." src="/headshot5.jpg" />,
    name: "Bashir A.",
    occupation: "Plumber",
    testimonial:
      "The AI-powered matching system connects me with clients looking for my exact skills. I don’t have to waste time searching for work—clients come straight to me!",
  },
  {
    avatar: <Avatar alt="Aisha B." src="/headshot8.jpg" />,
    name: "Aisha B.",
    occupation: "House Painter",
    testimonial:
      "Before Demand Point, I was limited to clients in my neighborhood. Now, I get job requests from different locations, allowing me to expand my reach and earn more!",
  },
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}>
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          At Demand Point, we empower artisans by connecting them with real
          clients, securing their payments, and helping them grow their
          businesses. See how skilled professionals like you are thriving on our
          platform!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: "flex" }}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
              }}>
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "text.secondary" }}>
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
