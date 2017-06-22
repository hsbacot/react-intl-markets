import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

// default to 'en' since react-intl defaults locale to 'en'
const showMarket = (currentMarket, supportedMarkets = ["en"]) =>
  supportedMarkets.includes(currentMarket);
const getMarket = locale =>
  locale.includes("-") ? locale.split("-")[1] : locale;

const Markets = ({ supported, suppressed, children, intl }) => {
  const { locale } = intl;
  const market = getMarket(locale);

  return suppressed
    ? !showMarket(market, suppressed) ? children : null
    : showMarket(market, supported) ? children : null;
};

Markets.defaultProps = {
  hidden: false
};

export default injectIntl(Markets);
