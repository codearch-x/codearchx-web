import { motion } from "motion/react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { FaAws } from "react-icons/fa";
import { BiChalkboard, BiCompass, BiDotsHorizontalRounded, BiTachometer } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import {
  SiApachekafka,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiKubernetes,
  SiOpenai,
  SiSpringboot,
  SiTerraform
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import DownArrows from "../components/DownArrows.tsx";
import useMotionSnapSections from "../hooks/useMotionSnapSections.ts";

const About = () => {
  const setSnapSectionRef = useMotionSnapSections();

  const values = [
    {
      icon: BiCompass,
      titleId: "about.principles.clarity.title",
      textId: "about.principles.clarity.text"
    },
    {
      icon: BiTachometer,
      titleId: "about.principles.speed.title",
      textId: "about.principles.speed.text"
    },
    {
      icon: BiChalkboard,
      titleId: "about.principles.communication.title",
      textId: "about.principles.communication.text"
    }
  ];

  const techStack = [
    { icon: DiJava, name: "Java" },
    { icon: SiSpringboot, name: "Spring Boot" },
    { icon: SiApachekafka, name: "Kafka" },
    { icon: SiDocker, name: "Buildpacks" },
    { icon: FaAws, name: "AWS" },
    { icon: VscAzure, name: "Azure" },
    { icon: SiGooglecloud, name: "GCP" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiTerraform, name: "Terraform" },
    { icon: SiGithubactions, name: "Github Actions" },
    { icon: SiOpenai, name: "AI" },
    { icon: BiDotsHorizontalRounded, name: "Others" }
  ];

  const domainExperience = [
    "about.domain.fintech",
    "about.domain.insuretech",
    "about.domain.cloudPlatforms",
    "about.domain.enterpriseSystems",
    "about.domain.aiIntegration",
    "about.domain.others"
  ];

  return (
    <>
      <motion.section
        className="position-relative d-flex min-vh-100 w-100 align-items-center py-5"
        initial={{ opacity: 0, y: 56, scale: 0.98 }}
        ref={setSnapSectionRef(0)}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.58, once: false }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="container px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
          <p className="section-label mb-2">
            <FormattedMessage id="about.hero.label" />
          </p>
          <h1 className="display-6 fw-semibold mb-3 lh-sm">
            <FormattedMessage id="about.hero.title" />
          </h1>
          <p className="lead text-secondary-emphasis mb-0">
            <FormattedMessage id="about.hero.lead" />
          </p>
        </div>

        <DownArrows />
      </motion.section>

      <motion.section
        className="position-relative d-flex min-vh-100 w-100 align-items-center overflow-hidden py-4 py-lg-5"
        initial={{ opacity: 0, y: 56, scale: 0.98 }}
        ref={setSnapSectionRef(1)}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.58, once: false }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="container px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={5}>
              <p className="section-label mb-2">
                <FormattedMessage id="about.support.label" />
              </p>
              <h2 className="display-6 fw-semibold mb-3 lh-sm">
                <FormattedMessage id="about.support.title" />
              </h2>
              <p className="lead text-secondary-emphasis mb-0">
                <FormattedMessage id="about.support.description" />
              </p>
            </Col>

            <Col lg={7}>
              <p className="section-label mb-3">
                <FormattedMessage id="about.principles.label" />
              </p>
              <ListGroup variant="flush">
                {values.map((value) => (
                  <ListGroup.Item
                    key={value.titleId}
                    className="d-flex align-items-start gap-3 border-0 px-0 py-3 bg-transparent"
                  >
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-secondary bg-opacity-10 flex-shrink-0 p-2 text-body">
                      <value.icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-1 text-body">
                        <FormattedMessage id={value.titleId} />
                      </h3>
                      <p className="text-secondary-emphasis mb-0">
                        <FormattedMessage id={value.textId} />
                      </p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </div>
      </motion.section>

      <motion.section
        className="position-relative d-flex min-vh-100 w-100 align-items-center overflow-hidden py-4 py-lg-5"
        initial={{ opacity: 0, y: 56, scale: 0.98 }}
        ref={setSnapSectionRef(2)}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.58, once: false }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="container px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
          <Row className="align-items-center g-4">
            <Col lg={4}>
              <p className="section-label mb-2">
                <FormattedMessage id="about.tech.label" />
              </p>
              <h2 className="display-6 fw-semibold mb-3 lh-sm">
                <FormattedMessage id="about.tech.title" />
              </h2>
              <p className="text-secondary-emphasis mb-0">
                <FormattedMessage id="about.tech.description" />
              </p>
            </Col>

            <Col lg={8}>
              <div className="d-flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    pill
                    bg="secondary"
                    className="d-inline-flex align-items-center gap-2 px-3 py-2 fs-6 fw-semibold bg-opacity-10 text-body"
                    key={tech.name}
                  >
                    <tech.icon size={20} aria-hidden="true" />
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </motion.section>

      <motion.section
        className="position-relative d-flex min-vh-100 w-100 align-items-center overflow-hidden py-4 py-lg-5"
        initial={{ opacity: 0, y: 56, scale: 0.98 }}
        ref={setSnapSectionRef(3)}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.58, once: false }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="container px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
          <Row className="align-items-center g-4">
            <Col lg={4}>
              <p className="section-label mb-2">
                <FormattedMessage id="about.domain.label" />
              </p>
              <h2 className="display-6 fw-semibold mb-3 lh-sm">
                <FormattedMessage id="about.domain.title" />
              </h2>
              <p className="text-secondary-emphasis mb-0">
                <FormattedMessage id="about.domain.description" />
              </p>
            </Col>

            <Col lg={8}>
              <div className="d-flex flex-wrap gap-2">
                {domainExperience.map((domainId) => (
                  <Badge
                    pill
                    bg="secondary"
                    className="d-inline-flex align-items-center px-3 py-2 fs-6 fw-semibold bg-opacity-10 text-body text-lowercase"
                    key={domainId}
                  >
                    <FormattedMessage id={domainId} />
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </motion.section>

      <motion.section
        className="position-relative d-flex min-vh-100 w-100 align-items-center overflow-hidden py-4 py-lg-5"
        initial={{ opacity: 0, y: 56, scale: 0.98 }}
        ref={setSnapSectionRef(4)}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.58, once: false }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="container px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
          <p className="section-label mb-2">
            <FormattedMessage id="about.work.label" />
          </p>
          <h2 className="display-6 fw-semibold mb-0 lh-sm">
            <FormattedMessage id="about.work.title" />
          </h2>
        </div>
      </motion.section>
    </>
  );
}

export default About;
