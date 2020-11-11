// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';

import Flex from '../Flex';
import FormField from '../FormField';
import RadioGroup from '../RadioGroup';
import Modal from './';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalButton from './ModalButton';
import ModalButtonGroup from './ModalButtonGroup';
import PrimaryButton from '../Button/PrimaryButton';
import ModalDocs from './Modal.mdx';

export default {
  title: 'UI Components/Modal',
  parameters: {
    docs: {
      page: ModalDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Modal,
  excludeStories: ['ModalDemo'],
};

const options = [
  {
    value: 'personal',
    label: 'My personal meeting ID: 1111-22-1111',
  },
  {
    value: 'new',
    label: 'Generate a new ID',
  },
];

const TestRadioGroup: React.FC<{}> = (props) => {
  const [value, setValue] = useState('personal');

  const handleChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <FormField
      options={options}
      field={RadioGroup}
      onChange={handleChange}
      value={value}
      label="Select from the meeting ID to use"
    />
  );
};

export const BasicExample = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '30rem', textAlign: 'center' }}>
        <div>
          <h1>Modal basic example</h1>
          <PrimaryButton onClick={toggleModal} label="toggle modal" />
          {showModal && (
            <Modal
              size={select('size', ['md', 'lg', 'fullscreen'], 'md')}
              onClose={toggleModal}
              rootId="modal-root"
            >
              <ModalHeader title="Start an instant meeting" />

              <ModalBody>
                <p style={{ margin: '0 0 0.5rem' }}>
                  Start this meeting with your personal meeting ID or generate a
                  new, unique and private meeting ID.
                </p>
                <TestRadioGroup />
              </ModalBody>
              <ModalButtonGroup
                primaryButtons={[
                  <ModalButton
                    onClick={() => alert('I will close the modal next')}
                    variant="primary"
                    label="submit"
                    closesModal
                  />,
                  <ModalButton
                    variant="secondary"
                    label="cancel"
                    closesModal
                  />,
                ]}
                secondaryButtons={
                  <ModalButton
                    onClick={() => alert("I won't close the modal")}
                    variant="secondary"
                    label="another action"
                  />
                }
              />
            </Modal>
          )}
        </div>
      </div>
    </Flex>
  );
};

BasicExample.story = 'Basic example';

export const largeContent = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Flex layout="fill-space-centered">
      <div style={{ width: '30rem', textAlign: 'center' }}>
        <div>
          <h1>Modal with scrollable content</h1>
          <PrimaryButton onClick={toggleModal} label="toggle modal" />

          {showModal && (
            <Modal
              size={select('size', ['md', 'lg', 'fullscreen'], 'md')}
              onClose={toggleModal}
              rootId="modal-root"
            >
              <ModalHeader title="Scrollable content example" />
              <ModalBody>
                <div style={{ margin: '0 0 1rem' }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse urna eros, vestibulum quis gravida quis, tempus
                    in sapien. Sed aliquet velit lectus, ac tempus dui iaculis
                    ac. Morbi ullamcorper laoreet magna ac commodo. Aenean
                    pharetra nulla sapien, nec interdum dolor semper quis. Ut
                    posuere libero at scelerisque iaculis. Phasellus eu arcu
                    ullamcorper, ultrices turpis id, pretium tellus. Integer
                    accumsan ultrices semper. Maecenas eu scelerisque metus, nec
                    pulvinar odio. Nunc imperdiet efficitur vehicula. Curabitur
                    laoreet ut tellus quis sagittis. Nulla auctor vitae felis
                    quis convallis. Nunc hendrerit imperdiet elit at auctor.
                    Integer condimentum euismod orci vitae venenatis. Proin
                    maximus in sem vitae auctor. Aliquam egestas, lorem vel
                    volutpat pharetra, dolor felis malesuada lorem, vitae
                    fermentum eros erat tempor lacus.
                  </p>
                  <p>
                    Duis tempus sagittis consectetur. Aliquam ut ante eu elit
                    laoreet condimentum. Pellentesque nunc leo, egestas a
                    porttitor sed, euismod tempor neque. Aenean a est eu mauris
                    elementum venenatis. Cras sit amet ex pellentesque augue
                    suscipit dignissim. Donec tempor lacinia orci non elementum.
                    Fusce quis elit est. Nullam magna tortor, dapibus quis
                    maximus varius, dapibus a nunc. Proin eget magna posuere
                    justo ullamcorper posuere sit amet at quam. Donec lacinia
                    libero vel tellus efficitur, vitae posuere enim porta.
                    Suspendisse vitae tellus vitae tellus semper cursus ornare
                    in nunc. Mauris molestie velit eu malesuada pellentesque.
                  </p>
                  <p>
                    Vivamus nisi justo, sagittis eu dolor vel, pretium placerat
                    dolor. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Nullam condimentum nisi
                    velit, id pellentesque quam facilisis dapibus. Donec orci
                    est, faucibus at dapibus sit amet, hendrerit vitae libero.
                    Quisque sed pellentesque diam. Fusce vitae imperdiet nisi, a
                    elementum ante. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed fringilla pharetra nunc, sed ornare
                    urna congue a.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse urna eros, vestibulum quis gravida quis, tempus
                    in sapien. Sed aliquet velit lectus, ac tempus dui iaculis
                    ac. Morbi ullamcorper laoreet magna ac commodo. Aenean
                    pharetra nulla sapien, nec interdum dolor semper quis. Ut
                    posuere libero at scelerisque iaculis. Phasellus eu arcu
                    ullamcorper, ultrices turpis id, pretium tellus. Integer
                    accumsan ultrices semper. Maecenas eu scelerisque metus, nec
                    pulvinar odio. Nunc imperdiet efficitur vehicula. Curabitur
                    laoreet ut tellus quis sagittis. Nulla auctor vitae felis
                    quis convallis. Nunc hendrerit imperdiet elit at auctor.
                    Integer condimentum euismod orci vitae venenatis. Proin
                    maximus in sem vitae auctor. Aliquam egestas, lorem vel
                    volutpat pharetra, dolor felis malesuada lorem, vitae
                    fermentum eros erat tempor lacus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse urna eros, vestibulum quis gravida quis, tempus
                    in sapien. Sed aliquet velit lectus, ac tempus dui iaculis
                    ac. Morbi ullamcorper laoreet magna ac commodo. Aenean
                    pharetra nulla sapien, nec interdum dolor semper quis. Ut
                    posuere libero at scelerisque iaculis. Phasellus eu arcu
                    ullamcorper, ultrices turpis id, pretium tellus. Integer
                    accumsan ultrices semper. Maecenas eu scelerisque metus, nec
                    pulvinar odio. Nunc imperdiet efficitur vehicula. Curabitur
                    laoreet ut tellus quis sagittis. Nulla auctor vitae felis
                    quis convallis. Nunc hendrerit imperdiet elit at auctor.
                    Integer condimentum euismod orci vitae venenatis. Proin
                    maximus in sem vitae auctor. Aliquam egestas, lorem vel
                    volutpat pharetra, dolor felis malesuada lorem, vitae
                    fermentum eros erat tempor lacus.
                  </p>
                  <p>
                    Duis tempus sagittis consectetur. Aliquam ut ante eu elit
                    laoreet condimentum. Pellentesque nunc leo, egestas a
                    porttitor sed, euismod tempor neque. Aenean a est eu mauris
                    elementum venenatis. Cras sit amet ex pellentesque augue
                    suscipit dignissim. Donec tempor lacinia orci non elementum.
                    Fusce quis elit est. Nullam magna tortor, dapibus quis
                    maximus varius, dapibus a nunc. Proin eget magna posuere
                    justo ullamcorper posuere sit amet at quam. Donec lacinia
                    libero vel tellus efficitur, vitae posuere enim porta.
                    Suspendisse vitae tellus vitae tellus semper cursus ornare
                    in nunc. Mauris molestie velit eu malesuada pellentesque.
                  </p>
                  <p>
                    Vivamus nisi justo, sagittis eu dolor vel, pretium placerat
                    dolor. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Nullam condimentum nisi
                    velit, id pellentesque quam facilisis dapibus. Donec orci
                    est, faucibus at dapibus sit amet, hendrerit vitae libero.
                    Quisque sed pellentesque diam. Fusce vitae imperdiet nisi, a
                    elementum ante. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed fringilla pharetra nunc, sed ornare
                    urna congue a.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse urna eros, vestibulum quis gravida quis, tempus
                    in sapien. Sed aliquet velit lectus, ac tempus dui iaculis
                    ac. Morbi ullamcorper laoreet magna ac commodo. Aenean
                    pharetra nulla sapien, nec interdum dolor semper quis. Ut
                    posuere libero at scelerisque iaculis. Phasellus eu arcu
                    ullamcorper, ultrices turpis id, pretium tellus. Integer
                    accumsan ultrices semper. Maecenas eu scelerisque metus, nec
                    pulvinar odio. Nunc imperdiet efficitur vehicula. Curabitur
                    laoreet ut tellus quis sagittis. Nulla auctor vitae felis
                    quis convallis. Nunc hendrerit imperdiet elit at auctor.
                    Integer condimentum euismod orci vitae venenatis. Proin
                    maximus in sem vitae auctor. Aliquam egestas, lorem vel
                    volutpat pharetra, dolor felis malesuada lorem, vitae
                    fermentum eros erat tempor lacus.
                  </p>
                </div>
              </ModalBody>
              <ModalButtonGroup
                primaryButtons={[
                  <ModalButton variant="primary" label="submit" closesModal />,
                  <ModalButton
                    variant="secondary"
                    label="cancel"
                    closesModal
                  />,
                ]}
              />
            </Modal>
          )}
        </div>
      </div>
    </Flex>
  );
};

largeContent.story = {
  name: 'Large content example',
};

export const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PrimaryButton label="Open Modal" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal size="md" onClose={() => setIsOpen(false)} rootId="modal-root">
          <ModalHeader title="Modal header" displayClose={true} />
          <ModalBody>
            <p
              style={{
                color: '#616672',
                fontSize: '14px',
                margin: '0 0 0.5rem',
              }}
            >
              This is information presented in a modal
            </p>
            <ModalButtonGroup
              primaryButtons={[
                <ModalButton
                  onClick={() => {}}
                  label="submit"
                  variant="primary"
                />,
              ]}
              secondaryButtons={[
                <ModalButton
                  onClick={() => {}}
                  label="More info"
                  variant="secondary"
                />,
              ]}
            />
          </ModalBody>
        </Modal>
      )}
    </>
  );
};
