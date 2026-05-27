import { Button } from "react-bootstrap";
import { useIntl } from "react-intl";
import { useAppLocale } from "../../contexts/useAppLocale.ts";

const btnStyle = { width: "2.25rem", height: "2.25rem" };

const LanguageToggleButton = () => {
  const intl = useIntl();
  const { locale, setLocale } = useAppLocale();
  const label = intl.formatMessage({ id: "app.language.label" });

  return (
    <Button
      variant="outline-secondary"
      className="rounded-circle p-0 d-inline-flex align-items-center justify-content-center text-uppercase small fw-bold"
      style={btnStyle}
      onClick={() => setLocale(locale === "en" ? "bg" : "en")}
      aria-label={label}
      title={label}
    >
      {locale === "en" ? "bg" : "en"}
    </Button>
  );
};

export default LanguageToggleButton;
