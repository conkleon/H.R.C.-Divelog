import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import CookieConsent from "common/components/CookieConsent";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactElement;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, icon, children }) => (
    <Box height="100vh">
      <Container
        component="main"
        sx={{
          py: 10,
          px: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100%"
        }}
        maxWidth="xs"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1.2}
        >
          <Image
            src="/logo.png"
            width={48}
            height={48}
            layout="fixed"
            alt="Diver down flag"
          />
          <Typography level="h3" component="p" fontWeight="lg">
            H.R.C. Divelog
          </Typography>
        </Box>

        <Typography
          textColor="GrayText"
          level="h6"
          component="h1"
          mt={1}
          textAlign="center"
        >
          Σύστημα καταγραφής καταδύσεων της Σχολής Αυτοδυτών Ε.Ε.Σ.
        </Typography>

        {title && (
          <Typography level="h5" component="h2" mt={4} startDecorator={icon}>
            {title}
          </Typography>
        )}

        <Box mt={2}>{children}</Box>
      </Container>

      <CookieConsent />
    </Box>
  );

export default AuthLayout;
