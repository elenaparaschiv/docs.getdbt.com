/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';

/*
 * docs.getdbt.com additions:
 */
import Alert from '@site/src/components/alert';
import Callout from '@site/src/components/callout';
import CloudCore from '@site/src/components/cloudcore';
import Collapsible from '@site/src/components/collapsible';
import FAQ from '@site/src/components/faqs';
import FAQList from '@site/src/components/faqList';
import File from '@site/src/components/file';
import Lightbox from '@site/src/components/lightbox';
import Link from '@site/src/components/link';
import LoomVideo from '@site/src/components/loom';
import YoutubeVideo from '@site/src/components/youtube';

export default {
  code: props => {
    const {children} = props;
    if (typeof children === 'string') {
      return <CodeBlock {...props} />;
    }
    return children;
  },
  a: props => {
    if (/\.[^./]+$/.test(props.href)) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} />;
    }
    return <Link {...props} />;
  },
  pre: props => <pre className={styles.mdxCodeBlock} {...props} />,
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),

  Alert: Alert,
  Callout: Callout,
  CloudCore: CloudCore,
  Collapsible: Collapsible,
  FAQ: FAQ,
  FAQList: FAQList,
  File: File,
  Lightbox: Lightbox,
  Link: Link,
  LoomVideo: LoomVideo,
  YoutubeVideo: YoutubeVideo,
};
