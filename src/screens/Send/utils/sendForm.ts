// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { createFormContext } from '@/components/FormContext';

const { FormProvider, useFormContext, useFormField } = createFormContext(['address', 'amount']);

export { FormProvider, useFormContext, useFormField };
