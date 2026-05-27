import { Button } from "react-bootstrap";
import { useIntl } from "react-intl";
import { useAppTheme } from "../../contexts/useAppTheme.ts";
import { BsMoon, BsSun } from "react-icons/bs";

const btnStyle = { width: "2.25rem", height: "2.25rem" };

const ThemeToggleButton = () => {
  const intl = useIntl();
  const { isLight, nextTheme, toggleTheme } = useAppTheme();
  const nextThemeLabel = intl.formatMessage({ id: `app.theme.${nextTheme}` });
  const switchThemeLabel = intl.formatMessage(
    { id: "app.theme.switchTo" },
    { theme: nextThemeLabel }
  );

  const IconComponent = isLight ? BsMoon : BsSun;
  return (
    <Button
      variant="outline-secondary"
      className="rounded-circle p-0 d-inline-flex align-items-center justify-content-center"
      style={btnStyle}
      onClick={toggleTheme}
      aria-label={switchThemeLabel}
      aria-pressed={isLight}
      title={switchThemeLabel}
    >
      <IconComponent size={18} aria-hidden="true" />
    </Button>
  );
};

export default ThemeToggleButton;
