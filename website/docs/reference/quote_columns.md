
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Definition
An optional seed configuration, used to determine whether column names in the seed file should be quoted.

* When `true`, dbt will quote the column names defined in the seed file when building a table for the seed, preserving casing.
* (Default) When `false`, dbt will not quote the column names defined in the seed file.

## Usage
<File name='dbt_project.yml'>

```yml
seed:
  quote_columns: true | false
```

</File>


## Changelog
* v0.15.0: Introduced in v0.15.0, with a default of False
* Future: The default value may change in a future release. If you're using seed files, it is recommended that you set this configuration explicitly to avoid breaking changes in the future.

## Recommended configuration
* Redshift:
* Snowflake: set `quote_columns: false`

## Examples

Consider a CSV as follows:

<File name='country_codes.csv'>

```text
country_code,Country_Name
US,United States
CA,Canada
GB,United Kingdom
...
```

</File>


Due to the different nature of quoting on each database, the way you select from this seed will differ.


<Tabs
  defaultValue="default"
  values={[
    { label: 'Default', value: 'default', },
    { label: 'Snowflake', value: 'sf', },
  ]
}>
<TabItem value="default">

When `quote_columns: false`:

```sql
-- ✅ This will work
select country_code, country_name from {{ ref('country_codes') }};
select COUNTRY_CODE from {{ ref('country_codes') }};
select "country_code", "Country_Name" from {{ ref('country_codes') }};


--❌ This will not work
select "COUNTRY_CODE" from {{ ref('country_codes') }}

```

When `quote_columns: true`:


</TabItem>
<TabItem value="sf">

When `quote_columns: false`:

```sql
-- ✅ This will work
select country_code from {{ ref('country_codes') }};
select COUNTRY_CODE from {{ ref('country_codes') }};
select "country_code" from {{ ref('country_codes') }};


--❌This will not work
select "COUNTRY_CODE" from {{ reg('country_codes') }}

```

</TabItem>
</Tabs>
