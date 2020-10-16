// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useEffect, HTMLAttributes, ComponentType, ReactNode } from 'react';

import { StyledInfiniteList } from './Styled';
import { BaseProps } from '../../Base';
import { Spinner } from '../../icons';

export interface InfiniteListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>, BaseProps {
  /* A callback function that will make an api call to load the next batch of items. */
  onLoad: () => void;
  /* Manages the visibility of the spinner when the API call is resolving. */
  isLoading: boolean;
  items: ReactNode[];
}
const InfiniteList = (props: InfiniteListProps) => {
  const { isLoading, onLoad, items } = props;

  const containerRef = useRef<HTMLUListElement>(null);
  const listEnd = useRef<HTMLDivElement>(null);
  const currentTopItemRef = useRef<HTMLLIElement>(null);
  const firstNew = useRef<HTMLLIElement>(null);
  const prevLength = useRef(items.length)
  const newLength = useRef(0);
  const onLoadRef = useRef(onLoad);

  onLoadRef.current = onLoad;

  useEffect(() => {
    firstNew.current?.scrollIntoView();
  }, [items.length]);

  useEffect(() => {
    listEnd.current?.scrollIntoView();
    const observer = new IntersectionObserver(entries => {
      const topEntry = entries[0];
      if (topEntry.isIntersecting) {
        onLoadRef.current()
      }
    },
      { 
        root: containerRef.current,
        threshold: 1
      }
    );
    
    if (currentTopItemRef.current) {
      observer.observe(currentTopItemRef.current);
    }
    return () => {
      if (currentTopItemRef.current) {
        observer.unobserve(currentTopItemRef.current)
      }
    }
  }, []);

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

  const messageList = items.map((item: JSX.Element, i: number) => <li id={i.toString()} key={i} ref={i === 0 ? currentTopItemRef : getRef(i)} role='article'>{item}</li>);

  return (
    <StyledInfiniteList
      {...props}
      ref={containerRef}
      className={`${isLoading ? 'ch-not-scrollable' : ''} infinite`}
      data-testid='infinite-list'
      aria-busy={isLoading ? true : false}
      role='feed'
    >
      {isLoading && <li className="ch-spinner"><Spinner /></li>}
      {messageList}
      <div ref={listEnd} />
    </StyledInfiniteList>
  )
};

export default InfiniteList;
