import { motion } from "motion/react";
import { FormattedMessage } from "react-intl";
import { BiCodeAlt, BiCompass, BiGroup, BiRepeat, BiRocket, BiSearchAlt } from "react-icons/bi";
import DownArrows from "../components/DownArrows.tsx";
import ServiceCard from "../components/services/ServiceCard.tsx";
import useMotionSnapSections from "../hooks/useMotionSnapSections.ts";

const services = [
  {
    icon: BiCompass,
    titleId: "services.architecture.title",
    descriptionId: "services.architecture.description",
    includes: [
      "services.architecture.include.1",
      "services.architecture.include.2",
      "services.architecture.include.3"
    ],
    price: "€3,500",
    priceNoteId: "services.price.from",
    spanNotePosition: "left" as const
  },
  {
    icon: BiGroup,
    titleId: "services.leadership.title",
    descriptionId: "services.leadership.description",
    includes: [
      "services.leadership.include.1",
      "services.leadership.include.2",
      "services.leadership.include.3"
    ],
    price: "€1,200",
    priceNoteId: "services.price.week",
    spanNotePosition: "right" as const
  },
  {
    icon: BiCodeAlt,
    titleId: "services.delivery.title",
    descriptionId: "services.delivery.description",
    includes: [
      "services.delivery.include.1",
      "services.delivery.include.2",
      "services.delivery.include.3"
    ],
    price: "€750",
    priceNoteId: "services.price.day",
    spanNotePosition: "right" as const
  },
  {
    icon: BiRepeat,
    titleId: "services.modernization.title",
    descriptionId: "services.modernization.description",
    includes: [
      "services.modernization.include.1",
      "services.modernization.include.2",
      "services.modernization.include.3"
    ],
    price: "€6,000",
    priceNoteId: "services.price.from",
    spanNotePosition: "left" as const
  },
  {
    icon: BiRocket,
    titleId: "services.oneOff.title",
    descriptionId: "services.oneOff.description",
    includes: [
      "services.oneOff.include.1",
      "services.oneOff.include.2",
      "services.oneOff.include.3"
    ],
    price: "€1,500",
    priceNoteId: "services.price.from",
    spanNotePosition: "left" as const
  },
  {
    icon: BiSearchAlt,
    titleId: "services.reliability.title",
    descriptionId: "services.reliability.description",
    includes: [
      "services.reliability.include.1",
      "services.reliability.include.2",
      "services.reliability.include.3"
    ],
    price: "€2,500",
    priceNoteId: "services.price.from",
    spanNotePosition: "left" as const
  }
];

const Services = () => {
  const setSnapSectionRef = useMotionSnapSections();

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
            <FormattedMessage id="services.hero.label" />
          </p>
          <h1 className="display-6 fw-semibold mb-3 lh-sm">
            <FormattedMessage id="services.hero.title" />
          </h1>
          <p className="lead text-secondary-emphasis mb-0">
            <FormattedMessage id="services.hero.lead" />
          </p>
        </div>

        <DownArrows />
      </motion.section>

      {services.map((service, index) => (
        <motion.section
          className="position-relative d-flex min-vh-100 w-100 align-items-center overflow-hidden py-4 py-lg-5"
          initial={{ opacity: 0, y: 56, scale: 0.98 }}
          key={service.titleId}
          ref={setSnapSectionRef(index + 1)}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 0.58, once: false }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="position-relative w-100">
            <ServiceCard {...service} />
          </div>
        </motion.section>
      ))}

      <p className="text-center text-secondary-emphasis small mb-0">
        <FormattedMessage id="services.pricing.disclaimer" />
      </p>
    </>
  );
}

export default Services;
