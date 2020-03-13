---
title: Can I test and document seeds?
---

Yes!

To test and document seeds, use a [schema file](link-to-doc) and nest the
the configurations under a `seeds:` key

## Example:

<File name='data/schema.yml'>

```yml
version: 2

seeds:
  - name: country_codes
    description: A mapping of two letter country codes to country names
    columns:
      - name: country_code
        tests:
          - unique
          - not_null
      - name: country_name
        tests:
          - unique
          - not_null
```

</File>

Check out the [schema file docs](link-to-doc) for more information.
