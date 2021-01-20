// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';

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

const TestInput: React.FC<{}> = (props) => {
  const [name, setName] = useState('');

  function handleChange(evt: any) {
    const value = evt.target.value;
    setName(value);
  }

  return (
    <FormField
      field={Input}
      label="First Name"
      value={name}
      fieldProps={{
        name: 'firstName',
        placeholder: 'Enter your first name',
      }}
      onChange={handleChange}
      layout={select(
        'layout',
        {
          stack: 'stack',
          horizontal: 'horizontal',
          'input-only': 'input-only',
        },
        'stack'
      )}
      errorText={text('errorText', 'This is some error text')}
      error={boolean('Toggle Error', false)}
      infoText={text('infoText', 'This is some informational text')}
    />
  );
};

export const BasicInputFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestInput />
      </div>
    </Flex>
  );
};

const TestSelect: React.FC<{}> = (props) => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => setValue(e.target.value);

  const options = [
    {
      value: 'no_framework_selected',
      label: 'No Framework',
    },
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
  ];

  return (
    <FormField
      field={Select}
      options={options}
      onChange={handleChange}
      value={value}
      label="Select a framework"
      layout={select(
        'layout',
        {
          stack: 'stack',
          horizontal: 'horizontal',
          'input-only': 'input-only',
        },
        'stack'
      )}
      errorText={text('errorText', 'This is some error text')}
      error={boolean('Toggle Error', false)}
      infoText={text('infoText', 'This is some informational text')}
    />
  );
};

export const SelectFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestSelect />
      </div>
    </Flex>
  );
};

const TestTextarea: React.FC<{}> = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <FormField
      field={Textarea}
      label="I'm a label"
      value={value}
      fieldProps={{ placeholder: 'Text goes here' }}
      onChange={handleChange}
      layout={select(
        'layout',
        {
          stack: 'stack',
          horizontal: 'horizontal',
          'input-only': 'input-only',
        },
        'stack'
      )}
      errorText={text('errorText', 'This is some error text')}
      error={boolean('Toggle Error', false)}
      infoText={text('infoText', 'This is some informational text')}
    />
  );
};

export const TextareaFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestTextarea />
      </div>
    </Flex>
  );
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

const TestRadioGroup: React.FC<{}> = (props) => {
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
      label="Select from the following"
      errorText={text('errorText', 'This is some error text')}
      error={boolean('Toggle Error', false)}
      infoText={text('infoText', 'This is some informational text')}
    />
  );
};

const TestCheckbox: React.FC<{}> = (props) => {
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
      <FormField
        field={Checkbox}
        label="React"
        value="react"
        checked={state.react}
        onChange={handleChange}
      />
      <FormField
        field={Checkbox}
        label="Angular"
        value="angular"
        checked={state.angular}
        onChange={handleChange}
      />
      <FormField
        field={Checkbox}
        label="Vue"
        value="vue"
        checked={state.vue}
        onChange={handleChange}
      />
    </>
  );
};

export const CheckboxFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestCheckbox />
      </div>
    </Flex>
  );
};

export const RadioGroupFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestRadioGroup />
      </div>
    </Flex>
  );
};

const radioOptions = [
  {
    value: 'tabs',
    label: 'Tabs',
    name: 'tabs',
  },
  {
    value: 'spaces',
    label: 'Spaces',
    name: 'tabs',
  },
];

const TestMixedInputs: React.FC<{}> = (props) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    acknowledge: false,
    select: '',
    textarea: '',
    tabs: 'spaces',
  });

  function handleChange(evt: any) {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    setState({
      ...state,
      [evt.target.type === 'radio' ? 'tabs' : evt.target.name]: value,
    });
  }

  const options = [
    {
      value: 'no_fruit_selected',
      label: 'Select an option',
    },
    {
      value: 'bananas',
      label: 'Bananas',
    },
    {
      value: 'oranges',
      label: 'Oranges',
    },
    {
      value: 'grapefruit',
      label: 'Grapefruit',
    },
  ];

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
        layout={select(
          'layout',
          {
            stack: 'stack',
            horizontal: 'horizontal',
            'input-only': 'input-only',
          },
          'stack'
        )}
        errorText="This is invalid"
        error={boolean('Toggle Error', false)}
      />
      <FormField
        layout={select(
          'layout',
          {
            stack: 'stack',
            horizontal: 'horizontal',
            'input-only': 'input-only',
          },
          'stack'
        )}
        options={radioOptions}
        field={RadioGroup}
        onChange={handleChange}
        value={state.tabs}
        label="Select from the following"
        errorText="This is invalid"
        error={boolean('Toggle Error', false)}
      />
      <FormField
        layout={select(
          'layout',
          {
            stack: 'stack',
            horizontal: 'horizontal',
            'input-only': 'input-only',
          },
          'stack'
        )}
        fieldProps={{ name: 'select' }}
        field={Select}
        options={options}
        onChange={handleChange}
        value={state.select}
        label="Select a framework"
        errorText="This is invalid"
        error={boolean('Toggle Error', false)}
      />
      <FormField
        layout={select(
          'layout',
          {
            stack: 'stack',
            horizontal: 'horizontal',
            'input-only': 'input-only',
          },
          'stack'
        )}
        field={Textarea}
        label="Additional comments"
        value={state.textarea}
        fieldProps={{
          placeholder: 'Enter any additional comments',
          name: 'textarea',
        }}
        onChange={handleChange}
        errorText="This is invalid"
        error={boolean('Toggle Error', false)}
      />
      <FormField
        layout={select(
          'layout',
          {
            stack: 'stack',
            horizontal: 'horizontal',
            'input-only': 'input-only',
          },
          'stack'
        )}
        field={Checkbox}
        fieldProps={{ name: 'acknowledge' }}
        label="Acknowledge"
        value="acknowledge"
        checked={state.acknowledge}
        onChange={handleChange}
        errorText="This is invalid"
        error={boolean('Toggle Error', false)}
      />
    </>
  );
};

export const MixedInputsFormField = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '20rem' }}>
        <TestMixedInputs />
      </div>
    </Flex>
  );
};
