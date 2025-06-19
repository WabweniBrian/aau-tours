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
import { format } from "date-fns";

interface BookingConfirmationEmailProps {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  travelDates: {
    from: Date;
    to: Date;
  };
  specialRequests?: string;
}

const serviceTypeLabels: Record<string, string> = {
  "safari-tours": "Game Park Tours & Gorilla Trekking",
  "airport-transfers": "Airport Pickups & Drops",
  "inland-transport": "Inland Transportation",
  "hotel-booking": "Hotel Bookings",
  "furnished-apartments": "Fully Furnished Apartments",
  "expatriate-settlement": "Expatriate Settlement Support",
};

export const BookingConfirmationEmail = ({
  name,
  email,
  phone,
  serviceType,
  travelDates,
  specialRequests,
}: BookingConfirmationEmailProps) => {
  const previewText = `New booking request from ${name} for ${serviceTypeLabels[serviceType]}`;

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
            <Heading style={h1}>New Service Booking Request</Heading>
            <Text style={headerText}>
              You have received a new booking request. Please review the details
              below and contact the customer within 24 hours.
            </Text>
          </Section>

          <Section style={content}>
            <Heading style={h2}>Customer Information</Heading>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Full Name:</Text>
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

            <Hr style={divider} />

            <Heading style={h2}>Service Details</Heading>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Service Type:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{serviceTypeLabels[serviceType]}</Text>
              </Column>
            </Row>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Travel Dates:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>
                  {format(travelDates.from, "MMMM dd, yyyy")} -{" "}
                  {format(travelDates.to, "MMMM dd, yyyy")}
                </Text>
              </Column>
            </Row>

            {specialRequests && (
              <>
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Special Requests:</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{specialRequests}</Text>
                  </Column>
                </Row>
              </>
            )}

            <Hr style={divider} />

            <Section style={actionSection}>
              <Text style={actionText}>
                <strong>Next Steps:</strong>
              </Text>
              <Text style={actionText}>
                1. Contact the customer within 24 hours using the provided
                contact information
              </Text>
              <Text style={actionText}>
                2. Discuss their requirements in detail and provide a customized
                quote
              </Text>
              <Text style={actionText}>
                3. Send them a detailed itinerary and booking confirmation
              </Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from your AAU Tours website booking form.
            </Text>
            <Text style={footerText}>
              Booking submitted on{" "}
              {format(new Date(), "MMMM dd, yyyy 'at' h:mm a")}
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
  width: "140px",
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

const actionSection = {
  backgroundColor: "#f9fafb",
  padding: "24px",
  borderRadius: "8px",
  margin: "32px 0",
};

const actionText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 8px",
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

export default BookingConfirmationEmail;
