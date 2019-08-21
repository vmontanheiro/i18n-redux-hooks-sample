import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

const I18nProvider = ({ language, timezoneSTR, children }) => {
  const xx = pt;
  const [i18n, setI18n] = useState(
    i18next.init({
      lng: language,
      fallbackLng: `xx`,
      resources: {
        pt_BR: pt,
        en_US: en,
        en,
        es,
        xx,
      },
    }),
  );

  useEffect(() => {
    i18next.init({
      lng: language,
      fallbackLng: `xx`,
      resources: {
        pt_BR: pt,
        en_US: en,
        en,
        es,
        xx,
      },
    });
    moment.locale(language);
    setI18n(i18n);
  }, [language, timezoneSTR]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

I18nProvider.propTypes = {
  language: PropTypes.string.isRequired,
  timezoneSTR: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  language: state.App.language,
  timezoneSTR: state.App.timezoneSTR,
});

export default connect(mapStateToProps)(I18nProvider); // Running by HOC because the store still not available yet
