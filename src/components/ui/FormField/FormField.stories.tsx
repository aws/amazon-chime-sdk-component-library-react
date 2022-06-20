// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import FormField from '.';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Textarea from '../Textarea';
import Select from '../Select';
import RadioGroup from '../RadioGroup';
import Flex from '../Flex';
import FormFieldDocs from './FormField.mdx';

export default {
  title: 'UI Components/Form/FormField',
  parameters: {
    docs: {
      page: FormFieldDocs.parameters.docs.page().props.children.type,
    },
  },
  component: FormField,
};

const commonHiddenArgTypes = {
  checked: { table: { disable: true } },
  field: { table: { disable: true } },
  fieldProps: { table: { disable: true } },
  onChange: { table: { disable: true } },
  value: { table: { disable: true } },
  options: { table: { disable: true } },
};

const options = [
  {
    value: 'react',
    label: 'React',
  },
  {
    value: 'angular',
    label: 'Angular',
  },
  {
    value: 'vue',
    label: 'Vue',
  },
  {
    value: 'none',
    label: 'None',
  },
];

interface FormFieldProps {
  label: string;
  layout?: 'stack' | 'horizontal' | 'input-only';
  error: boolean;
  infoText: string;
  errorText: string;
  placeholder?: string;
}

const TestInput: React.FC<FormFieldProps> = (props) => {
  const [name, setName] = useState('');

  function handleChange(evt: any) {
    const value = evt.target.value;
    setName(value);
  }

  return (
    <FormField
      field={Input}
      label={props.label}
      value={name}
      fieldProps={{
        name: 'firstName',
        placeholder: props.placeholder,
      }}
      onChange={handleChange}
      layout={props.layout}
      errorText={props.errorText}
      error={props.error}
      infoText={props.infoText}
    />
  );
};

export const BasicInputFormField = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestInput {...args} />
      </div>
    </Flex>
  );
};

BasicInputFormField.args = {
  layout: 'stack',
  label: 'First Name',
  placeholder: 'Enter your first name',
  infoText: 'This is some informational text',
  error: false,
  errorText: 'This is some error text',
};

BasicInputFormField.argTypes = {
  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },
  label: { control: 'text' },
  placeholder: { control: 'text' },
  infoText: { control: 'text' },
  error: { control: 'boolean' },
  errorText: { control: 'text' },
  ...commonHiddenArgTypes,
};

const TestSelect: React.FC<FormFieldProps> = (props) => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => setValue(e.target.value);

  return (
    <FormField
      field={Select}
      options={options}
      onChange={handleChange}
      value={value}
      label={props.label}
      layout={props.layout}
      errorText={props.errorText}
      error={props.error}
      infoText={props.infoText}
    />
  );
};

export const SelectFormField = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestSelect {...args} />
      </div>
    </Flex>
  );
};

SelectFormField.args = {
  layout: 'stack',
  label: 'Select a framework',
  infoText: 'This is some informational text',
  error: false,
  errorText: 'This is some error text',
};

SelectFormField.argTypes = {
  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },
  label: { control: 'text' },
  infoText: { control: 'text' },
  error: { control: 'boolean' },
  errorText: { control: 'text' },
  ...commonHiddenArgTypes,
};

const TestTextarea: React.FC<FormFieldProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <FormField
      field={Textarea}
      label={props.label}
      value={value}
      fieldProps={{ placeholder: props.placeholder }}
      onChange={handleChange}
      layout={props.layout}
      infoText={props.infoText}
      error={props.error}
      errorText={props.errorText}
    />
  );
};

export const TextareaFormField = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestTextarea {...args} />
      </div>
    </Flex>
  );
};

TextareaFormField.args = {
  layout: 'stack',
  label: 'Description',
  placeholder: 'Enter your description here',
  infoText: 'This is some informational text',
  error: false,
  errorText: 'This is some error text',
};

TextareaFormField.argTypes = {
  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },
  label: { control: 'text' },
  placeholder: { control: 'text' },
  infoText: { control: 'text' },
  error: { control: 'boolean' },
  errorText: { control: 'text' },
  ...commonHiddenArgTypes,
};

const TestRadioGroup: React.FC<FormFieldProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <FormField
      options={options}
      field={RadioGroup}
      onChange={handleChange}
      value={value}
      label={props.label}
      errorText={props.errorText}
      error={props.error}
      infoText={props.infoText}
    />
  );
};

export const RadioGroupFormField = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestRadioGroup {...args} />
      </div>
    </Flex>
  );
};

RadioGroupFormField.args = {
  label: 'Select from the following:',
  infoText: 'This is some informational text',
  error: false,
  errorText: 'This is some error text',
};

RadioGroupFormField.argTypes = {
  label: { control: 'text' },
  infoText: { control: 'text' },
  error: { control: 'boolean' },
  errorText: { control: 'text' },
  layout: { table: { disable: true } },
  ...commonHiddenArgTypes,
};

const TestCheckboxGroup: React.FC<{}> = (props) => {
  const [state, setState] = React.useState({
    react: false,
    angular: false,
    vue: false,
  });

  function handleChange(evt: any) {
    const value = evt.target.checked;
    setState({
      ...state,
      [evt.target.value]: value,
    });
  }

  return (
    <>
      <FormField field={Checkbox} label="React" value="react" checked={state.react} onChange={handleChange} />
      <FormField field={Checkbox} label="Angular" value="angular" checked={state.angular} onChange={handleChange} />
      <FormField field={Checkbox} label="Vue" value="vue" checked={state.vue} onChange={handleChange} />
    </>
  );
};

export const CheckboxFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestCheckboxGroup />
      </div>
    </Flex>
  );
};

CheckboxFormField.argTypes = {
  layout: { table: { disable: true } },
  label: { table: { disable: true } },
  infoText: { table: { disable: true } },
  error: { table: { disable: true } },
  errorText: { table: { disable: true } },
  ...commonHiddenArgTypes,
};

const TestMixedInputs: React.FC<FormFieldProps> = (props) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    acknowledge: false,
    select: '',
    textarea: '',
    tabs: 'spaces',
  });

  function handleChange(evt: any) {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    setState({
      ...state,
      [evt.target.type === 'radio' ? 'tabs' : evt.target.name]: value,
    });
  }

  return (
    <>
      <FormField
        field={Input}
        label="First Name"
        value={state.firstName}
        fieldProps={{
          name: 'firstName',
          placeholder: 'Enter your first name',
        }}
        onChange={handleChange}
        layout={props.layout}
        errorText="This is invalid"
        error={props.error}
      />
      <FormField
        layout={props.layout}
        options={options}
        field={RadioGroup}
        onChange={handleChange}
        value={state.tabs}
        label="Select from the following"
        errorText="This is invalid"
        error={props.error}
      />
      <FormField
        layout={props.layout}
        fieldProps={{ name: 'select' }}
        field={Select}
        options={options}
        onChange={handleChange}
        value={state.select}
        label="Select a framework"
        errorText="This is invalid"
        error={props.error}
      />
      <FormField
        layout={props.layout}
        field={Textarea}
        label="Additional comments"
        value={state.textarea}
        fieldProps={{
          placeholder: 'Enter any additional comments',
          name: 'textarea',
        }}
        onChange={handleChange}
        errorText="This is invalid"
        error={props.error}
      />
      <FormField
        layout={props.layout}
        field={Checkbox}
        fieldProps={{ name: 'acknowledge' }}
        label="Acknowledge"
        value="acknowledge"
        checked={state.acknowledge}
        onChange={handleChange}
        errorText="This is invalid"
        error={props.error}
      />
    </>
  );
};

export const MixedInputsFormField = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestMixedInputs {...args} />
      </div>
    </Flex>
  );
};

MixedInputsFormField.args = {
  layout: 'stack',
  error: false,
};

MixedInputsFormField.argTypes = {
  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },
  error: { control: 'boolean' },
  label: { table: { disable: true } },
  infoText: { table: { disable: true } },
  errorText: { table: { disable: true } },
  ...commonHiddenArgTypes,
};
