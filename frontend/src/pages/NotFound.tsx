import { Card, Stack } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Stack gap={4} className="text-center">
      <Card className="surface-card border-0">
        <Card.Body className="p-5">
          <h1 className="display-1 fw-bold mb-3">404</h1>
          <h2 className="h4 fw-semibold mb-3">
            <FormattedMessage id="notfound.title" />
          </h2>
          <p className="lead text-secondary-emphasis mb-4">
            <FormattedMessage id="notfound.description" />
          </p>
          <Link to="/" className="btn btn-primary rounded-pill px-4">
            <FormattedMessage id="notfound.backHome" />
          </Link>
        </Card.Body>
      </Card>
    </Stack>
  );
}

export default NotFound;
