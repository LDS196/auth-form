import { yup } from '~/adapters/YupAdapter';
import { i18n } from '~/modules/lang/LangAdapter';

import { LoginFormFields } from '../forms/register-form';

export const loginValidationSchema = yup.object().shape({
  [LoginFormFields.login]: yup
    .string()
    .required()
    .min(5, i18n.t('input.login.validation.length', { ns: 'auth', min: 5, max: 20 }))
    .max(20, i18n.t('input.login.validation.length', { ns: 'auth', min: 5, max: 20 })),
  [LoginFormFields.password]: yup
    .string()
    .required()
    .min(5, i18n.t('input.login.validation.length', { ns: 'auth', min: 5, max: 20 }))
    .max(20, i18n.t('input.login.validation.length', { ns: 'auth', min: 5, max: 20 })),
});
