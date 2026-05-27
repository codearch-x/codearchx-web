import type { ComponentType } from "react";
import { Col, ListGroup, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import type { IconBaseProps } from "react-icons";
import { FaCheck, FaCircleInfo } from "react-icons/fa6";

interface ServiceCardProps {
  icon: ComponentType<IconBaseProps>;
  titleId: string;
  descriptionId: string;
  includes: string[];
  price: string;
  priceNoteId: string;
  spanNotePosition: "left" | "right";
}

const ServiceCard = ({
  icon: Icon,
  titleId,
  descriptionId,
  includes,
  price,
  priceNoteId,
  spanNotePosition
}: ServiceCardProps) => {
  return (
    <article className="container px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
      <div className="d-flex flex-column gap-4">
        <Row className="g-3 g-lg-4 align-items-start">
          <Col xs={12}>
            <div className="d-flex align-items-center gap-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-secondary bg-opacity-10 flex-shrink-0 p-2 p-sm-3 rounded-circle text-body">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h2 className="h2 fw-semibold mb-0 text-body lh-sm">
                <FormattedMessage id={titleId} />
              </h2>
            </div>
          </Col>
        </Row>

        <p className="lead text-secondary-emphasis mb-0">
          <FormattedMessage id={descriptionId} />
        </p>

        <ListGroup variant="flush">
          {includes.map((includeId) => (
            <ListGroup.Item
              key={includeId}
              className="d-flex align-items-start gap-2 border-0 px-0 py-2 py-lg-3 bg-transparent text-secondary-emphasis"
            >
              <FaCheck size={14} aria-hidden="true" className="flex-shrink-0 text-body mt-1" />
              <span className="flex-grow-1">
                <FormattedMessage id={includeId} />
                <OverlayTrigger
                  placement="top"
                  trigger={["hover", "focus"]}
                  overlay={
                    <Tooltip id={`${includeId}.why-tooltip`}>
                      <p className="mb-2">
                        <FormattedMessage id={`${includeId}.why`} />
                      </p>
                      <div className="d-flex align-items-center gap-2 my-2">
                        <hr className="flex-grow-1 border-secondary opacity-25 m-0" />
                        <small className="text-secondary-emphasis fw-semibold text-uppercase flex-shrink-0">
                          <FormattedMessage id="app.example.label" />
                        </small>
                        <hr className="flex-grow-1 border-secondary opacity-25 m-0" />
                      </div>
                      <p className="mb-0">
                        <FormattedMessage id={`${includeId}.why.example`} />
                      </p>
                    </Tooltip>
                  }
                >
                  <span
                    className="align-baseline ms-1 text-secondary-emphasis"
                    tabIndex={0}
                    aria-label="Info"
                  >
                    <FaCircleInfo size={14} aria-hidden="true" />
                  </span>
                </OverlayTrigger>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="d-flex align-items-baseline justify-content-end gap-2 text-nowrap">
          {spanNotePosition === "left" && (
            <span className="text-secondary-emphasis small">
              <FormattedMessage id={priceNoteId} />
            </span>
          )}
          <strong className="fs-2 fw-semibold lh-1 text-body">{price} *</strong>
          {spanNotePosition === "right" && (
            <span className="text-secondary-emphasis small">
              <FormattedMessage id={priceNoteId} />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
