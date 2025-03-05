import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(
      isExpanded
        ? [...expanded, panel]
        : expanded.filter((item) => item !== panel)
    );
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}>
        Frequently asked questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header">
            <Typography component="span" variant="subtitle2">
              How can artisans join the platform?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Artisans can easily sign up by creating a profile, showcasing
              their skills, and connecting with potential customers. Simply
              visit our website, register, and start receiving job requests.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header">
            <Typography component="span" variant="subtitle2">
              How do customers find artisans for their needs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Customers can search for artisans based on location, skill set,
              and ratings. Our smart matching system ensures that clients are
              connected with the right professionals for their specific needs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel4")}
          onChange={handleChange("panel4")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header">
            <Typography component="span" variant="subtitle2">
              Is there a verification process for artisans?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Yes! We prioritize trust and reliability. Every artisan undergoes
              a verification process that includes identity checks and skill
              validation to ensure quality service delivery.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel5")}
          onChange={handleChange("panel5")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header">
            <Typography component="span" variant="subtitle2">
              What kind of jobs can artisans get on the platform?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              From carpentry and plumbing to tailoring and electrical work,
              artisans can find jobs across multiple categories, ensuring a
              steady stream of work opportunities.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel6")}
          onChange={handleChange("panel6")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header">
            <Typography component="span" variant="subtitle2">
              How do artisans receive payments?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Payments are made securely through our platform. Customers can pay
              via bank transfer, mobile money, or card, and artisans receive
              their earnings promptly upon job completion.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel7")}
          onChange={handleChange("panel7")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header">
            <Typography component="span" variant="subtitle2">
              What support is available for artisans?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              We offer dedicated customer support, training resources, and
              marketing tools to help artisans grow their businesses and attract
              more clients.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header">
            <Typography component="span" variant="subtitle2">
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              You can reach our customer support team by emailing&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;or calling our toll-free number. We&apos;re here to assist
              you promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
