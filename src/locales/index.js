/* eslint-disable no-prototype-builtins */
import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import pt from './pt-BR';
import en from './en_US';
import moment from 'moment';
import 'moment/min/locales.min';

const normalizeTranslate = {
  'en-US': 'en_US',
  'pt-BR': 'pt_BR',
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

export const getLanguageByDevice = () =>
  Platform.OS === 'android'
    ? NativeModules.I18nManager.localeIdentifier
    : 'pt_BR';

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize) && moment.locale(translateNormalize)
    : (I18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = key => I18n.t(key);
