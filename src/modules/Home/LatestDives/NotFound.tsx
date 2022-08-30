import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import NextLink from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <Typography component="p" textColor="GrayText">
        It looks like you haven't logged any dives yet 🤭
      </Typography>

      <NextLink href="/dives/new">
        <Button component="a" size="sm" variant="plain" sx={{ mx: "auto" }}>
          Add your first dive
        </Button>
      </NextLink>
    </>
  );
};

export default NotFound;
