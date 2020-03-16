---
title: "Seeds"
id: "seeds"
---

## Getting started
<Callout type='info' title="Want to run through a tutorial?">
Check out [our lesson](tutorial/add-a-seed.md) on adding a seed file to your project.
</Callout>

Seeds are CSV files in your dbt project (typically in your `data` directory),
that dbt can load into your data warehouse using the `dbt seed` command.

Seeds can be referenced in downstream models the same way as referencing models
— by using the `ref` [unction.

Because these CSV files are located in your dbt repository, they are version
controlled and code reviewable. Seeds are best suited to static data which
changes infrequently.

Good use-cases for seeds:
* A list of mappings of country codes to country names
* A list of test emails to exclude from analysis
* A list of employee account IDs

Poor use-cases of dbt seeds:
* Loading raw data uploaded to CSVs

## Example
To load a seed file in your dbt project:
1. Add the file to your `data` directory, with a `.csv` file extension, e.g. `data/country_codes.csv`

<File name='data/country_codes.csv'>

```text
country_code,country_name
US,United States
CA,Canada
GB,United Kingdom
...
```

</File>

2. Run the `dbt seed` [command](running-a-dbt-project/command-line-interface/seed.md) — a new table will be created in your warehouse in your target schema, named `country_codes`
```
$ dbt seed

Found 2 models, 3 tests, 0 archives, 0 analyses, 53 macros, 0 operations, 1 seed file

14:46:15 | Concurrency: 1 threads (target='dev')
14:46:15 |
14:46:15 | 1 of 1 START seed file analytics.country_codes........................... [RUN]
14:46:15 | 1 of 1 OK loaded seed file analytics.country_codes....................... [INSERT 3 in 0.01s]
14:46:16 |
14:46:16 | Finished running 1 seed in 0.14s.

Completed successfully

Done. PASS=1 ERROR=0 SKIP=0 TOTAL=1
```

3. Refer to seeds in downstream models using the `ref` function.

<File name='models/orders.csv'>

```sql
-- This refers to the table created from data/country_codes.csv
select * from {{ ref('country_codes') }}
```

</File>

## Related documentation
* [Seed configurations](reference/seed-configs.md)
* The `dbt seed` [command](running-a-dbt-project/command-line-interface/seed.md)

## FAQs:
<FAQ src="load-raw-data-with-seed" />
<FAQ src="configurable-data-path" />
<FAQ src="full-refresh-seed" />
<FAQ src="testing-seeds" />
<FAQ src="seed-datatypes" />
<FAQ src="run-downstream-of-seed" />
<FAQ src="leading-zeros-in-seed" />
<FAQ src="build-one-seed" />
<FAQ src="seed-hooks" />
