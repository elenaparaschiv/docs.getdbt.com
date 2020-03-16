module.exports = {
  docs: {
    Introduction: ["docs/introduction"],
    "Supported Databases": [
      "docs/supported-databases",
      "docs/supported-databases/profile-postgres",
      "docs/supported-databases/profile-redshift",
      "docs/supported-databases/profile-snowflake",
      "docs/supported-databases/profile-bigquery",
      "docs/supported-databases/profile-presto",
      "docs/supported-databases/profile-spark",
      "docs/supported-databases/profile-mssql"
      //"docs/introduction/supported-databases/redshift-v2"
    ],
    "Building a dbt Project": [
      {
        type: "category",
        label: "Projects",
        items: [
          "docs/building-a-dbt-project/dbt-projects",
          "docs/building-a-dbt-project/dbt-projects/creating-a-project",
          "docs/building-a-dbt-project/dbt-projects/use-an-existing-project",
          "docs/building-a-dbt-project/dbt-projects/configuring-quoting",
          "docs/building-a-dbt-project/dbt-projects/requiring-specific-dbt-versions",
          "docs/building-a-dbt-project/dbt-projects/configuring-query-comments"
          //"docs/building-a-dbt-project/dbt-projects/configuring-resources-from-the-project-file",
          //"docs/building-a-dbt-project/dbt-projects/dbt_projectyml-file",
        ]
      },
      {
        type: "category",
        label: "Models",
        items: [
          "docs/building-a-dbt-project/building-models",
          "docs/building-a-dbt-project/building-models/materializations",
          "docs/building-a-dbt-project/building-models/configuring-models",
          "docs/building-a-dbt-project/building-models/configuring-incremental-models",
          "docs/building-a-dbt-project/building-models/enable-and-disable-models",
          "docs/building-a-dbt-project/building-models/using-custom-aliases",
          "docs/building-a-dbt-project/building-models/using-custom-schemas",
          "docs/building-a-dbt-project/building-models/using-custom-database",
          "docs/building-a-dbt-project/building-models/tags",
          "docs/building-a-dbt-project/building-models/using-variables",
          "docs/building-a-dbt-project/building-models/using-sql-headers",
          "docs/building-a-dbt-project/building-models/snowflake-configs",
          "docs/building-a-dbt-project/building-models/redshift-configs",
          "docs/building-a-dbt-project/building-models/bigquery-configs"
        ]
      },
      "docs/building-a-dbt-project/hooks",
      "docs/building-a-dbt-project/seeds",
      "docs/building-a-dbt-project/snapshots",
      "docs/building-a-dbt-project/analyses",
      {
        type: "category",
        label: "Testing & Documentation",
        items: [
          "docs/building-a-dbt-project/testing-and-documentation",
          "docs/building-a-dbt-project/testing-and-documentation/documentation-website",
          "docs/building-a-dbt-project/testing-and-documentation/documentation",
          "docs/building-a-dbt-project/testing-and-documentation/schemayml-files",
          "docs/building-a-dbt-project/testing-and-documentation/testing"
        ]
      },
      //"docs/building-a-dbt-project/dont-nest-your-curlies",
      "docs/building-a-dbt-project/using-sources",
      //"docs/building-a-dbt-project/archival",
      "docs/building-a-dbt-project/using-operations",
      "docs/building-a-dbt-project/package-management"
    ],
    "Writing Code in dbt": [
      "docs/writing-code-in-dbt/getting-started-with-jinja",
      "docs/writing-code-in-dbt/using-jinja",
      "docs/writing-code-in-dbt/macros",
      {
        type: "category",
        label: "Jinja Function Reference",
        items: [
          "docs/writing-code-in-dbt/jinja-context/adapter",
          "docs/writing-code-in-dbt/jinja-context/config",
          "docs/writing-code-in-dbt/jinja-context/debug-method",
          "docs/writing-code-in-dbt/jinja-context/doc",
          "docs/writing-code-in-dbt/jinja-context/env_var",
          "docs/writing-code-in-dbt/jinja-context/exceptions",
          "docs/writing-code-in-dbt/jinja-context/execute",
          "docs/writing-code-in-dbt/jinja-context/flags",
          "docs/writing-code-in-dbt/jinja-context/fromjson",
          "docs/writing-code-in-dbt/jinja-context/graph",
          "docs/writing-code-in-dbt/jinja-context/invocation_id",
          "docs/writing-code-in-dbt/jinja-context/log",
          "docs/writing-code-in-dbt/jinja-context/modules",
          "docs/writing-code-in-dbt/jinja-context/ref",
          "docs/writing-code-in-dbt/jinja-context/return",
          "docs/writing-code-in-dbt/jinja-context/run_query",
          "docs/writing-code-in-dbt/jinja-context/run_started_at",
          "docs/writing-code-in-dbt/jinja-context/schema",
          "docs/writing-code-in-dbt/jinja-context/statement-blocks",
          "docs/writing-code-in-dbt/jinja-context/target",
          "docs/writing-code-in-dbt/jinja-context/this",
          "docs/writing-code-in-dbt/jinja-context/tojson",
          "docs/writing-code-in-dbt/jinja-context/var",
          {
            type: "category",
            label: "on-run-end Context",
            items: [
              "docs/writing-code-in-dbt/jinja-context/on-run-end-context",
              "docs/writing-code-in-dbt/jinja-context/schemas"
            ]
          }
        ]
      },
      "docs/writing-code-in-dbt/class-reference",
      {
        type: "category",
        label: "Extending dbt's Programming Environment",
        items: [
          "docs/writing-code-in-dbt/extending-dbts-programming-environment/creating-new-materializations",
          "docs/writing-code-in-dbt/extending-dbts-programming-environment/custom-schema-tests"
        ]
      }
    ],
    "Running a dbt Project": [
      {
        type: "category",
        label: "dbt Command Reference",
        items: [
          "docs/running-a-dbt-project/command-line-interface",
          "docs/running-a-dbt-project/command-line-interface/model-selection-syntax",
          "docs/running-a-dbt-project/command-line-interface/global-cli-flags",
          "docs/running-a-dbt-project/command-line-interface/clean",
          "docs/running-a-dbt-project/command-line-interface/cmd-docs",
          "docs/running-a-dbt-project/command-line-interface/compile",
          "docs/running-a-dbt-project/command-line-interface/debug",
          "docs/running-a-dbt-project/command-line-interface/deps",
          "docs/running-a-dbt-project/command-line-interface/init",
          "docs/running-a-dbt-project/command-line-interface/list",
          "docs/running-a-dbt-project/command-line-interface/rpc",
          "docs/running-a-dbt-project/command-line-interface/run",
          "docs/running-a-dbt-project/command-line-interface/run-operation",
          "docs/running-a-dbt-project/command-line-interface/seed",
          "docs/running-a-dbt-project/command-line-interface/snapshot",
          "docs/running-a-dbt-project/command-line-interface/source",
          "docs/running-a-dbt-project/command-line-interface/test",
          "docs/running-a-dbt-project/command-line-interface/version",
          "docs/running-a-dbt-project/command-line-interface/exit-codes"
        ]
      },
      "docs/running-a-dbt-project/using-the-dbt-ide",
      {
        type: "category",
        label: "Using the CLI",
        items: [
          "docs/running-a-dbt-project/using-the-command-line-interface",
          "docs/running-a-dbt-project/using-the-command-line-interface/installation",
          "docs/running-a-dbt-project/using-the-command-line-interface/configure-your-profile",
          {
            type: "category",
            label: "Installation instructions",
            items: [
              "docs/running-a-dbt-project/using-the-command-line-interface/macos",
              "docs/running-a-dbt-project/using-the-command-line-interface/windows",
              "docs/running-a-dbt-project/using-the-command-line-interface/ubuntu-debian",
              "docs/running-a-dbt-project/using-the-command-line-interface/centos",
              "docs/running-a-dbt-project/using-the-command-line-interface/install-from-source"
            ]
          }
        ]
      },
      "docs/running-a-dbt-project/dbt-api",
      "docs/running-a-dbt-project/running-dbt-in-production"
    ],
    Guides: [
      "docs/guides/best-practices",
      "docs/guides/managing-environments",
      "docs/guides/building-packages",
      {
        type: "category",
        label: "Migration Guides",
        items: [
          "docs/guides/migration-guide/upgrading-from-0-10-to-0-11",
          "docs/guides/migration-guide/upgrading-to-014",
          "docs/guides/migration-guide/upgrading-to-0-14-1",
          "docs/guides/migration-guide/upgrading-to-0-16-0"
        ]
      },
      "docs/guides/videos"
      //"docs/guides/database-specific-guides/creating-date-partitioned-tables", // deprecated
    ],
    Contributing: [
      "docs/contributing/contributor-license-agreements",
      "docs/contributing/building-a-new-adapter",
      "docs/contributing/slack-rules-of-the-road"
    ],
    "dbt Cloud": [
      "docs/dbt-cloud/cloud-overview",
      "docs/dbt-cloud/cloud-quickstart",
      "docs/dbt-cloud/the-dbt-ide",
      {
        type: "category",
        label: "Configuring dbt Cloud",
        items: [
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-using-a-managed-repository",
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-installing-the-github-application",
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-import-a-project-by-git-url",
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-managing-permissions",
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-seats-and-users",
          "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-supported-dbt-versions"
        ]
      },
      {
        type: "category",
        label: "Using dbt Cloud",
        items: [
          "docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration-with-github",
          "docs/dbt-cloud/using-dbt-cloud/cloud-generating-documentation",
          "docs/dbt-cloud/using-dbt-cloud/cloud-snapshotting-source-freshness",
          "docs/dbt-cloud/using-dbt-cloud/artifacts",
          "docs/dbt-cloud/using-dbt-cloud/cloud-using-a-custom-cron-schedule",
          "docs/dbt-cloud/using-dbt-cloud/cloud-setting-a-custom-target-name"
        ]
      },
      {
        type: "category",
        label: "dbt Cloud Enterprise",
        items: [
          "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-okta",
          "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-google-gsuite",
          "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-sso-with-azure-active-directory"
        ]
      }
    ],
    About: ["docs/about/license", "docs/about/viewpoint"]
  },
  reference: {
    "Configurations": [
      "reference/dbt_project.yml",
      "reference/model-configs",
      "reference/seed-configs",
      "reference/snapshot-configs"
    ]
  },
  tutorial: {
    "Getting Started": [
      "tutorial/setting-up",
      {
        type: "category",
        label: "Create a project",
        items: [
          "tutorial/create-a-project-dbt-cloud",
          "tutorial/create-a-project-dbt-cli"
        ]
      },
      "tutorial/build-your-first-models",
      "tutorial/test-and-document-your-project",
      "tutorial/deploy-your-project"
    ],
    "Building out your project": [
      "tutorial/add-a-seed"
    ]
  },
  learn: {
    "Getting Started": [
      "learn/setting-up",
      {
        type: "category",
        label: "Create a project",
        items: [
          "learn/create-a-project-dbt-cloud",
          "learn/create-a-project-dbt-cli"
        ]
      },
      "learn/build-your-first-models",
      "learn/test-and-document-your-project"
    ]
  }
};
