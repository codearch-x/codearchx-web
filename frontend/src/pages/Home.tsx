import { Card, Carousel, Col, Row, Stack } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import AnimatedStatValue from "../components/home/AnimatedStatValue.tsx";
import {
  BiCheckShield,
  BiCloudLightning,
  BiCodeAlt,
  BiCompass,
  BiGroup,
  BiNetworkChart,
  BiRepeat,
  BiRocket,
  BiSearchAlt
} from "react-icons/bi";

const Home = () => {
  const intl = useIntl();
  const stats = [
    { icon: BiNetworkChart, labelId: "home.stats.architectureReviews", value: 5 },
    { icon: BiCheckShield, labelId: "home.stats.riskPatterns", value: 14 },
    { icon: BiCloudLightning, labelId: "home.stats.fasterDecisions", value: 92, suffix: "%" }
  ];

  const features = [
    {
      icon: BiCompass,
      titleId: "home.services.architecture.title",
      descriptionId: "home.services.architecture.description"
    },
    {
      icon: BiCodeAlt,
      titleId: "home.services.delivery.title",
      descriptionId: "home.services.delivery.description"
    },
    {
      icon: BiRepeat,
      titleId: "home.services.modernization.title",
      descriptionId: "home.services.modernization.description"
    },
    {
      icon: BiGroup,
      titleId: "home.services.leadership.title",
      descriptionId: "home.services.leadership.description"
    },
    {
      icon: BiRocket,
      titleId: "home.services.oneOff.title",
      descriptionId: "home.services.oneOff.description"
    },
    {
      icon: BiSearchAlt,
      titleId: "home.services.reliability.title",
      descriptionId: "home.services.reliability.description"
    }
  ];

  return (
    <Stack gap={4}>
      <Card className="surface-card hero-card border-0">
        <Card.Body className="p-4 p-lg-5">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <h1 className="display-5 fw-semibold mb-3">
                <FormattedMessage id="home.hero.title" />
              </h1>
              <p className="lead text-secondary-emphasis mb-4">
                <FormattedMessage id="home.hero.lead" />
              </p>
              <Stack direction="horizontal" gap={3} className="flex-wrap">
                <Link to="/services" className="btn btn-primary btn-lg rounded-pill px-4">
                  <FormattedMessage id="home.hero.exploreServices" />
                </Link>
              </Stack>
            </Col>

            <Col lg={5}>
              <Card className="summary-card border-0">
                <Card.Body>
                  <p className="section-label mb-3">
                    <FormattedMessage id="home.snapshot.label" />
                  </p>
                  <Row className="g-3">
                    {stats.map((stat) => (
                      <Col sm={4} lg={12} key={stat.labelId}>
                        <div className="stat-card">
                          <stat.icon size={22} aria-hidden="true" />
                          <div>
                            <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
                            <span>{intl.formatMessage({ id: stat.labelId })}</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <section id="services">
        <p className="section-label mb-2">
          <FormattedMessage id="home.services.label" />
        </p>
        <h2 className="fw-semibold mb-4">
          <FormattedMessage id="home.services.title" />
        </h2>

        <Carousel
          className="services-carousel mb-4"
          interval={6000}
          indicators
          controls={false}
          touch
          slide
        >
          {features.map((feature) => (
            <Carousel.Item key={feature.titleId}>
              <Card className="surface-card border-0 overflow-hidden">
                <Card.Body className="p-4 pb-5 p-lg-5">
                  <Row className="align-items-center justify-content-center g-4 text-center my-lg-5 pt-lg-3 pb-lg-5">
                    <Col lg={10} xl={9} className="mx-auto">
                      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mb-3">
                        <div className="d-inline-flex align-items-center justify-content-center flex-shrink-0 border rounded-4 bg-secondary bg-opacity-10 p-3">
                          <feature.icon size={30} aria-hidden="true" />
                        </div>
                        <h3 className="h3 fw-semibold mb-0">
                          <FormattedMessage id={feature.titleId} />
                        </h3>
                      </div>
                      <p className="lead text-secondary-emphasis mb-0">
                        <FormattedMessage id={feature.descriptionId} />
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <Card className="surface-card border-0">
        <Card.Body className="p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <p className="section-label mb-2">
              <FormattedMessage id="home.nextMove.label" />
            </p>
            <h2 className="h3 fw-semibold mb-0">
              <FormattedMessage id="home.nextMove.title" />
            </h2>
          </div>
          <Link to="/about" className="btn btn-primary rounded-pill px-4">
            <FormattedMessage id="home.nextMove.learnMore" />
          </Link>
        </Card.Body>
      </Card>
    </Stack>
  );
}

export default Home;
