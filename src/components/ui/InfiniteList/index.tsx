// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useEffect, useState, HTMLAttributes } from 'react';

import { StyledInfiniteList } from './Styled';
import { BaseProps } from '../Base';
import { Spinner } from '../icons'; // TODO: update icon

export interface InfiniteListProps extends HTMLAttributes<HTMLUListElement>, BaseProps {
  /* The elements that will populat the list. These elements will be wrapped in <li> tags, so that can be any element. */
  items: JSX.Element[];
  /* A callback function that will make an api call to load the next batch of items. */
  onLoad: () => void;
  /* Accessibility label of the list */
  label: string;
  /* Manages the visibility of the spinner when the API call is resolving */
  isLoading: boolean;
}

const InfiniteList = (props: InfiniteListProps) => {
  const { items, onLoad, label, isLoading } = props;

  const feedRef = useRef<HTMLUListElement>(null);
  const listEnd = useRef<HTMLDivElement>(null);
  const currentTopItem = useRef<HTMLLIElement>(null);
  const firstNew = useRef<HTMLLIElement>(null);
  const prevLength = useRef(items.length)
  const newLength = useRef(0);

  const onLoadRef = useRef(onLoad);
  onLoadRef.current = onLoad;

  useEffect(() => {
    firstNew.current?.scrollIntoView();
  }, [items.length])

  useEffect(() => {
    listEnd.current?.scrollIntoView();
    const observer = new IntersectionObserver(entries => {
      const topEntry = entries[0];
      if (topEntry.isIntersecting) {
        onLoadRef.current()
      }
    },
      {
        root: feedRef.current,
        threshold: 1
      }
    );

    if (currentTopItem.current) {
      observer.observe(currentTopItem.current);
    }
    return () => {
      if (currentTopItem.current) {
        observer.unobserve(currentTopItem.current)
      }
    }
  }, [])

  if (items.length !== prevLength.current) {
    prevLength.current = newLength.current;
  }
  newLength.current = items.length;

  const getRef = (index: number) => {
    if (
      index === (items.length - prevLength.current) - 1 &&
      isLoading &&
      items.length !== prevLength.current
    ) {
      return firstNew
    } else {
      return null
    }
  };

  return (
    <StyledInfiniteList
      ref={feedRef}
      className={isLoading ? 'ch-not-scrollable' : ''}
      {...props}
      data-testid='infinite-list'
      aria-busy={isLoading ? true : false}
      role='feed'
      aria-label={label}
    >
      {isLoading && <li className="ch-spinner"><Spinner /></li>}
      {items.map((item, index) => {
        if (index === 0) {
          return <li id={index.toString()} key={index} ref={currentTopItem} role='article'>{item}</li>
        }
        return <li id={index.toString()} key={index} ref={getRef(index)} role='article'>{item}</li>
      })}
      <div ref={listEnd} />
    </StyledInfiniteList>
  )
};

export default InfiniteList;
