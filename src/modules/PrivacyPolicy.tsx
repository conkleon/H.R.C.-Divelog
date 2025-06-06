import SecurityRounded from "@mui/icons-material/SecurityRounded";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import BackButton from "common/components/BackButton";
import Image from "next/image";
import React from "react";

const PrivacyPolicy: React.FC = () => (
  <Container component="main" sx={{ py: 10, px: 4 }} maxWidth="md">
    <Box display="flex" alignItems="center" justifyContent="center" gap={1.2}>
      <Image
        src="/logo.png"
        width={48}
        height={34}
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
      component="p"
      mt={1}
      mb={3}
      textAlign="center"
    >
          Σύστημα καταγραφής καταδύσεων της Σχολής Αυτοδυτών Ε.Ε.Σ.
    </Typography>

    <BackButton to="/" />

    <Typography
      level="h4"
      component="h1"
      color="info"
      startDecorator={<SecurityRounded />}
      sx={{ alignItems: "flex-start" }}
    >
      Privacy Policy for H.R.C. Divelog
    </Typography>


    <p>
      If you have additional questions or require more information about our
      Privacy Policy, do not hesitate to contact us.
    </p>

    <Typography level="h5" component="h2">
      Consent
    </Typography>

    <p>
      By using our website, you hereby consent to our Privacy Policy and agree
      to its terms.
    </p>

    <Typography level="h5" component="h2">
      Information we collect
    </Typography>

    <p>
      The personal information that you are asked to provide, and the reasons
      why you are asked to provide it, will be made clear to you at the point we
      ask you to provide your personal information.
    </p>
    <p>
      If you contact us directly, we may receive additional information about
      you such as your name, email address, phone number, the contents of the
      message and/or attachments you may send us, and any other information you
      may choose to provide.
    </p>
    <p>
      When you register for an Account, we may ask for your contact information,
      including items such as name, company name, address, email address, and
      telephone number.
    </p>

    <Typography level="h5" component="h2">
      How we use your information
    </Typography>

    <p>We use the information we collect in various ways, including to:</p>

    <ul>
      <li>Provide, operate, and maintain our website</li>
      <li>Improve, personalize, and expand our website</li>
      <li>Understand and analyze how you use our website</li>
      <li>Develop new products, services, features, and functionality</li>
      <li>
        Communicate with you, either directly or through one of our partners,
        including for customer service, to provide you with updates and other
        information relating to the website, and for marketing and promotional
        purposes
      </li>
      <li>Send you emails</li>
      <li>Find and prevent fraud</li>
    </ul>

    <Typography level="h5" component="h2">
      Log Files
    </Typography>

    <p>
      H.R.C. Divelog follows a standard procedure of using log files. These files log
      visitors when they visit websites. All hosting companies do this and a
      part of hosting services' analytics. The information collected by log
      files include internet protocol (IP) addresses, browser type, Internet
      Service Provider (ISP), date and time stamp, referring/exit pages, and
      possibly the number of clicks. These are not linked to any information
      that is personally identifiable. The purpose of the information is for
      analyzing trends, administering the site, tracking users' movement on the
      website, and gathering demographic information.
    </p>

    <Typography level="h5" component="h2">
      Cookies and Web Beacons
    </Typography>

    <p>
      Like any other website, H.R.C. Divelog uses 'cookies'. These cookies are used
      to store information including visitors' preferences, and the pages on the
      website that the visitor accessed or visited. The information is used to
      optimize the users' experience by customizing our web page content based
      on visitors' browser type and/or other information.
    </p>

    <Typography level="h5" component="h2">
      Advertising Partners Privacy Policies
    </Typography>

    <p>
      You may consult this list to find the Privacy Policy for each of the
      advertising partners of H.R.C. Divelog.
    </p>

    <p>
      Third-party ad servers or ad networks uses technologies like cookies,
      JavaScript, or Web Beacons that are used in their respective
      advertisements and links that appear on H.R.C. Divelog, which are sent directly
      to users' browser. They automatically receive your IP address when this
      occurs. These technologies are used to measure the effectiveness of their
      advertising campaigns and/or to personalize the advertising content that
      you see on websites that you visit.
    </p>

    <p>
      Note that H.R.C. Divelog has no access to or control over these cookies that
      are used by third-party advertisers.
    </p>

    <Typography level="h5" component="h2">
      Third Party Privacy Policies
    </Typography>


    <p>
      You can choose to disable cookies through your individual browser options.
      To know more detailed information about cookie management with specific
      web browsers, it can be found at the browsers' respective websites.
    </p>

    <Typography level="h5" component="h2">
      CCPA Privacy Rights (Do Not Sell My Personal Information)
    </Typography>

    <p>
      Under the CCPA, among other rights, California consumers have the right
      to:
    </p>
    <p>
      Request that a business that collects a consumer's personal data disclose
      the categories and specific pieces of personal data that a business has
      collected about consumers.
    </p>
    <p>
      Request that a business delete any personal data about the consumer that a
      business has collected.
    </p>
    <p>
      Request that a business that sells a consumer's personal data, not sell
      the consumer's personal data.
    </p>
    <p>
      If you make a request, we have one month to respond to you. If you would
      like to exercise any of these rights, please contact us.
    </p>

    <Typography level="h5" component="h2">
      GDPR Data Protection Rights
    </Typography>

    <p>
      We would like to make sure you are fully aware of all of your data
      protection rights. Every user is entitled to the following:
    </p>
    <p>
      The right to access – You have the right to request copies of your
      personal data. We may charge you a small fee for this service.
    </p>
    <p>
      The right to rectification – You have the right to request that we correct
      any information you believe is inaccurate. You also have the right to
      request that we complete the information you believe is incomplete.
    </p>
    <p>
      The right to erasure – You have the right to request that we erase your
      personal data, under certain conditions.
    </p>
    <p>
      The right to restrict processing – You have the right to request that we
      restrict the processing of your personal data, under certain conditions.
    </p>
    <p>
      The right to object to processing – You have the right to object to our
      processing of your personal data, under certain conditions.
    </p>
    <p>
      The right to data portability – You have the right to request that we
      transfer the data that we have collected to another organization, or
      directly to you, under certain conditions.
    </p>
    <p>
      If you make a request, we have one month to respond to you. If you would
      like to exercise any of these rights, please contact us.
    </p>

    <Typography level="h5" component="h2">
      Children's Information
    </Typography>

    <p>
      Another part of our priority is adding protection for children while using
      the internet. We encourage parents and guardians to observe, participate
      in, and/or monitor and guide their online activity.
    </p>


    <Typography level="h5" component="h2">
      Changes to This Privacy Policy
    </Typography>

    <p>
      We may update our Privacy Policy from time to time. Thus, we advise you to
      review this page periodically for any changes. We will notify you of any
      changes by posting the new Privacy Policy on this page. These changes are
      effective immediately, after they are posted on this page.
    </p>

    <p>
      Our Privacy Policy was created with the help of the{" "}
      <a href="https://www.termsfeed.com/privacy-policy-generator/">
        TermsFeed Privacy Policy Generator
      </a>
      .
    </p>

    <Typography level="h5" component="h2">
      Contact Us
    </Typography>

    <p>
      If you have any questions or suggestions about our Privacy Policy, do not
      hesitate to contact us.
    </p>
  </Container>
);

export default PrivacyPolicy;
