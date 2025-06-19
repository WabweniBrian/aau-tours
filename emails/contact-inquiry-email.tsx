import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface ContactInquiryEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const ContactInquiryEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactInquiryEmailProps) => {
  const previewText = `New contact inquiry from ${name}: ${subject}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://aau-tours.vercel.app/logo.png"
              width="200"
              height="60"
              alt="AAU Tours Logo"
              style={{
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
          </Section>

          <Section style={header}>
            <Heading style={h1}>New Contact Inquiry</Heading>
            <Text style={headerText}>
              You have received a new message through your website contact form.
              Please review the details below and respond promptly.
            </Text>
          </Section>

          <Section style={content}>
            <Heading style={h2}>Contact Information</Heading>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Name:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{name}</Text>
              </Column>
            </Row>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column style={valueColumn}>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Column>
            </Row>
            {phone && (
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Phone:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Link href={`tel:${phone}`} style={link}>
                    {phone}
                  </Link>
                </Column>
              </Row>
            )}

            <Hr style={divider} />

            <Heading style={h2}>Inquiry Details</Heading>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Subject:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{subject}</Text>
              </Column>
            </Row>

            <Section style={messageSection}>
              <Text style={label}>Message:</Text>
              <div style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </div>
            </Section>

            <Hr style={divider} />

            <Section style={actionSection}>
              <Text style={actionText}>
                <strong>Quick Actions:</strong>
              </Text>
              <div style={buttonContainer}>
                <Link
                  href={`mailto:${email}?subject=Re: ${subject}`}
                  style={replyButton}
                >
                  Reply to Customer
                </Link>
                <Link href={`tel:${phone}`} style={callButton}>
                  {phone ? "Call Customer" : "No Phone Provided"}
                </Link>
              </div>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from your Uganda Tours website contact form.
            </Text>
            <Text style={footerText}>
              Inquiry submitted on {new Date().toLocaleDateString()} at{" "}
              {new Date().toLocaleTimeString()}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const logoSection = {
  padding: "32px 40px",
  textAlign: "center" as const,
  borderBottom: "1px solid #e6ebf1",
};

const header = {
  padding: "40px 40px 32px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 16px",
};

const h2 = {
  color: "#374151",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.4",
  margin: "32px 0 16px",
};

const headerText = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
};

const content = {
  padding: "0 40px",
};

const infoRow = {
  marginBottom: "12px",
};

const labelColumn = {
  width: "100px",
  verticalAlign: "top" as const,
};

const valueColumn = {
  verticalAlign: "top" as const,
};

const label = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
  lineHeight: "1.5",
};

const value = {
  color: "#1f2937",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
};

const link = {
  color: "#2563eb",
  textDecoration: "none",
  fontSize: "14px",
  lineHeight: "1.5",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const messageSection = {
  margin: "24px 0",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px",
  marginTop: "8px",
};

const messageText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const actionSection = {
  backgroundColor: "#f0f9ff",
  padding: "24px",
  borderRadius: "8px",
  margin: "32px 0",
};

const actionText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const buttonContainer = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap" as const,
};

const replyButton = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  display: "inline-block",
};

const callButton = {
  backgroundColor: "#059669",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  display: "inline-block",
};

const footer = {
  padding: "32px 40px",
  textAlign: "center" as const,
  borderTop: "1px solid #e6ebf1",
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 8px",
};

export default ContactInquiryEmail;
