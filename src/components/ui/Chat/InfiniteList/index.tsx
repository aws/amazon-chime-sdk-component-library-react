// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BaseProps } from '../../Base';
import { Spinner } from '../../icons';
import { StyledInfiniteList } from './Styled';

export interface InfiniteListProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>,
    BaseProps {
  /* A callback function that will make an api call to load the next batch of items. */
  onLoad: () => void;
  /* Manages the visibility of the spinner when the API call is resolving. */
  isLoading: boolean;
  /* The elements to be shown in the list */
  items: ReactNode[];
}

export const InfiniteList: FC<React.PropsWithChildren<InfiniteListProps>> = (
  props
) => {
  const { isLoading, onLoad, items } = props;

  const listEnd = useRef<HTMLDivElement>(null);
  const currentTopItemRef = useRef<HTMLLIElement>(null);
  const firstNew = useRef<HTMLLIElement>(null);
  const prevLength = useRef(items.length);
  const newLength = useRef(0);
  const onLoadRef = useRef(onLoad);

  onLoadRef.current = onLoad;

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    firstNew.current?.scrollIntoView();
  }, [items.length]);

  const topObserver = new IntersectionObserver(
    (entries) => {
      const topEntry = entries[0];
      if (topEntry.isIntersecting) {
        onLoadRef.current();
      }
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    listEnd.current?.scrollIntoView();

    if (currentTopItemRef.current) {
      topObserver.observe(currentTopItemRef.current);
    }
    return () => {
      if (currentTopItemRef.current) {
        topObserver.unobserve(currentTopItemRef.current);
      }
    };
  }, []);

  if (items.length !== prevLength.current) {
    prevLength.current = newLength.current;
  }
  newLength.current = items.length;

  const getRef = (index: number) => {
    if (index === newLength.current - 1) {
      return newBottom;
    } else if (
      index === items.length - prevLength.current - 1 &&
      isLoading &&
      items.length !== prevLength.current
    ) {
      return firstNew;
    } else {
      return null;
    }
  };

  const newBottom = useRef<HTMLLIElement>(null);
  let prevBottom: Element | null;

  const messageList = items.map((item: ReactNode, i: number) => (
    <li
      id={i.toString()}
      key={i}
      ref={i === 0 ? currentTopItemRef : getRef(i)}
      role="article"
    >
      {item}
    </li>
  ));

  const bottomObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      setAtBottom(entry.isIntersecting);
    },
    {
      threshold: 0,
    }
  );

  useEffect(() => {
    if (atBottom && listEnd.current) {
      listEnd.current.scrollIntoView();
    }
    prevBottom = newBottom.current;

    if (prevBottom) {
      bottomObserver.unobserve(prevBottom);
    }

    if (newBottom.current) {
      bottomObserver.observe(newBottom.current);
      prevBottom = newBottom.current;
    }

    return () => {
      if (prevBottom) {
        bottomObserver.unobserve(prevBottom);
      }
    };
  }, [items.length]);

  return (
    <StyledInfiniteList
      {...props}
      className={`${isLoading ? 'ch-not-scrollable' : ''}`}
      data-testid="infinite-list"
      aria-busy={isLoading ? true : false}
      role="feed"
    >
      {isLoading && (
        <li className="ch-spinner">
          <Spinner />
        </li>
      )}
      {messageList}
      <div ref={listEnd} />
    </StyledInfiniteList>
  );
};

export default InfiniteList;
