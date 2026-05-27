import classNames from "classnames";
import { motion } from "motion/react";
import { ButtonGroup, Container, Navbar, Stack } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, NavLink, type NavLinkRenderProps } from "react-router-dom";
import blackLogo from "../../assets/images/logo_1700x350_black.svg";
import whiteLogo from "../../assets/images/logo_1700x350_white.svg";
import { useAppTheme } from "../../contexts/useAppTheme.ts";
import LanguageToggleButton from "../language/LanguageToggleButton.tsx";
import ThemeToggleButton from "../theme/ThemeToggleButton.tsx";

const CXNavbar = () => {
  const intl = useIntl();
  const { isLight, nextTheme } = useAppTheme();
  const navLinkClass = ({ isActive }: NavLinkRenderProps) =>
    classNames("nav-link", "d-flex", "justify-content-center", "px-3", "py-2", { active: isActive });
  const navLinkContent = (messageId: string, isActive: boolean) => (
    <span className="position-relative d-inline-flex">
      <FormattedMessage id={messageId} />
      {isActive && (
        <motion.span
          className="nav-underscore"
          layoutId="nav-underscore"
          transition={{ type: "spring", stiffness: 480, damping: 36 }}
        />
      )}
    </span>
  );
  const nextThemeLabel = intl.formatMessage({ id: `app.theme.${nextTheme}` });
  const switchThemeLabel = intl.formatMessage(
    { id: "app.theme.switchTo" },
    { theme: nextThemeLabel }
  );
  const controlsLabel = `${switchThemeLabel}, ${intl.formatMessage({ id: "app.language.label" })}`;

  return (
    <Navbar expand="md" className="app-navbar py-0" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-lockup">
          <img className="brand-logo" src={isLight ? blackLogo : whiteLogo} alt="Code Arch X" />
        </Navbar.Brand>

        <ButtonGroup className="d-md-none gap-1" aria-label={controlsLabel}>
          <ThemeToggleButton />
          <LanguageToggleButton />
        </ButtonGroup>

        <Navbar.Toggle aria-controls="main-navigation" className="ms-auto" />
        <Navbar.Collapse id="main-navigation">
          <Stack
            direction="horizontal"
            gap={3}
            className="navbar-actions mt-3 mt-md-0 flex-wrap align-items-center"
          >
            <Navbar
              as="nav"
              className="app-nav-links"
              aria-label={intl.formatMessage({ id: "app.nav.primaryLabel" })}
            >
              <NavLink to="/" end className={navLinkClass}>
                {({ isActive }) => navLinkContent("app.nav.home", isActive)}
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                {({ isActive }) => navLinkContent("app.nav.services", isActive)}
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                {({ isActive }) => navLinkContent("app.nav.about", isActive)}
              </NavLink>
            </Navbar>

            <ButtonGroup
              className="d-none d-md-inline-flex ms-md-auto gap-1"
              aria-label={controlsLabel}
            >
              <ThemeToggleButton />
              <LanguageToggleButton />
            </ButtonGroup>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CXNavbar;
