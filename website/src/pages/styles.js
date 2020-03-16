
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import classnames from 'classnames';

import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';

import Alert from '@site/src/components/alert';
import Callout from '@site/src/components/callout';
import CloudCore from '@site/src/components/cloudcore';
import Collapsible from '@site/src/components/collapsible';
import FAQList from '@site/src/components/faqList';
import FAQ from '@site/src/components/faqs';
import File from '@site/src/components/file';
import Lightbox from '@site/src/components/lightbox';
import Link from '@site/src/components/link';
import LoomVideo from '@site/src/components/loom';
import YoutubeVideo from '@site/src/components/youtube';

function Styles() {
  return (
    <Layout permalink="/">
        <div className="container">
            <div className='section' style={{marginTop: '40px'}}>
                <p>
                The following components are baked into the Markdown compilation context,
                so there is no need to import them from Markdown files. Simply add the components
                inline to use them.
                </p>
            </div>
            <div className='section' style={{marginTop: '40px'}}>
                <h1>Alert</h1>
<pre>{`<Alert type='info'>
    <h4>Heads up!</h4>
    <p>This is an alert</p>
</Alert>
`}</pre>
                <Alert type='info'><h4>Heads up!</h4><p>This is an "info" alert</p></Alert>
                <Alert type='warning'><h4>Heads up!</h4><p>This is a "warning" alert</p></Alert>
                <Alert type='danger'><h4>Heads up!</h4><p>This is a "danger" alert</p></Alert>
                <Alert type='success'><h4>Heads up!</h4><p>This is a "success" alert</p></Alert>
            </div>
            <div className='section' style={{marginTop: '40px'}}>
                <h1>Callout</h1>
<pre>{`<Callout type='info' title="Heads up!">
    <p>This is a callout</p>
</Callout>
`}</pre>
                <Callout type='info' title="info"><p>This is a callout</p></Callout>
                <Callout type='warning' title="warning"><p>This is a callout</p></Callout>
                <Callout type='danger' title="danger"><p>This is a callout</p></Callout>
                <Callout type='success' title="success"><p>This is a callout</p></Callout>
            </div>
            <div className='section' style={{marginTop: '40px'}}>
                <h1>CloudCore</h1>
<pre>{`<CloudCore>
    <div>
        <p>The first div contains Cloud info</p>
    </div>
    <div>
        <p>The second div contains Core info</p>
    </div>
</CloudCore>
`}</pre>
                <CloudCore>
                    <div>
                        <p>The first div contains Cloud info</p>
                    </div>
                    <div>
                        <p>The second div contains Core info</p>
                    </div>
                </CloudCore>
            </div>
            <div className='section' style={{marginTop: '40px'}}>
                <h1>Collapsible</h1>
<pre>{`<Collapsible header="The header info">
    <div>
        <p>Shows and hides children elements</p>
    </div>
</Collapsible>
`}</pre>
                <Collapsible header="The header info">
                    <div>
                        <p>Shows and hides children elements</p>
                    </div>
                </Collapsible>
            </div>
            <div className='section' style={{marginTop: '40px'}}>
                <h1>FAQList</h1>
<pre>{`<FAQList />`}</pre>
                    <p>(Not shown)</p>
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>FAQ</h1>
<pre>{`<FAQ src='faqs/sql-errors' alt_header="a header" />`}</pre>
                <FAQ src='faqs/sql-errors' />
                <FAQ src='faqs/sql-errors' alt_header="an overriden header" />
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>File</h1>
<pre>{`<File name="~/.dbt/profiles.yml">

\`\`\`yml
password: hunter2
\`\`\`


</File>
`}</pre>
                <File name="~/.dbt/profiles.yml">
                    <pre>
                        password: hunter2
                    </pre>
                </File>
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>Lightbox</h1>
                <pre>{`<Lightbox src="/img/dbt-logo-full.png" title="The dbt logo" />`}</pre>
                <Lightbox src="/img/dbt-logo-full.png" title="The dbt logo" />
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>Link</h1>
<pre>{`
    Links to .md pages can be specified using:
        - The absolute path to the document (docs/guides/best-practices)
        - The "slug" of the document (best-practices)
        - A relative path to the document (guides/best-practices)

      <Link href="viewpoint">A link to the viewpoint</Link>

    Invalid links are underlined, and will raise an error if compiled:

      <Link href="viewpoint-bad">A link to the viewpoint (that does not work)</Link>

    Markdown links are wired up to this component, so you can do:

      [A markdown link to the viewpoint](viewpoint)

`}</pre>
                <Link href="viewpoint">A link to the viewpoint</Link>
                <br />
                <Link href="viewpoint-bad" ignoreInvalid={true}>A link to the viewpoint (that does not work)</Link>
                <br />
                <Link href="viewpoint">A markdown link to the viewpoint</Link>
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>LoomVideo</h1>
                <pre>{`<LoomVideo id="09919ddb02e44015878c9e93e15fe792" />`}</pre>
                <LoomVideo id="09919ddb02e44015878c9e93e15fe792" />
            </div>

            <div className='section' style={{marginTop: '40px'}}>
            <h1>Tabs</h1>
<pre>{`
<Tabs
  defaultValue="default"
  values={[
    { label: 'Default', value: 'default', },
    { label: 'Snowflake', value: 'snowflake', },
  ]
}>
<TabItem value="default">

\`\`\`sql
select id from customers
\`\`\`
</TabItem>
<TabItem value="snowflake">
\`\`\`sql
select "ID" from customers
\`\`\`
</TabItem>
</Tabs>
`}</pre>
<Tabs
  defaultValue="default"
  values={[
    { label: 'Default', value: 'default', },
    { label: 'Snowflake', value: 'snowflake', },
  ]
}>
<TabItem value="default">

```sql
select id from customers
```
</TabItem>
<TabItem value="snowflake">
```sql
select "ID" from customers
```
</TabItem>
</Tabs>
</div>
        <div className='section' style={{marginTop: '40px'}}>
                <h1>YoutubeVideo</h1>
                <pre>{`<YoutubeVideo id="5yyGT1k2xzY" />`}</pre>
                <YoutubeVideo id="5yyGT1k2xzY" />
            </div>
        </div>
    </Layout>
  );
}

export default Styles;
