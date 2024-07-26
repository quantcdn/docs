module.exports = {
  main: {
    'Overview': [
      'welcome',
      'golive',
      'custom-404'
    ],
    'Integrations': [
      'integrations/overview',
      {
        type: 'category',
        label: 'Drupal',
        items: [
          'integrations/drupal',
          'integrations/Drupal/seed',
          'integrations/Drupal/purger',
          'integrations/Drupal/drupal-cron',
          'integrations/Drupal/drupal-search'
        ],
      },
      'integrations/wordpress',
    ],
    'Dashboard': [
      'dashboard/get-started',
      'dashboard/content',
      'dashboard/domains',
      'dashboard/authentication',
      'dashboard/page-rules',
      'dashboard/page-rules-proxy',
      'dashboard/page-rules-waf',
      'dashboard/crawler',
      'dashboard/alerts',
      'dashboard/custom-http-headers',
      'dashboard/search',
      'dashboard/forms',
      'dashboard/team',
      'dashboard/s3-sync',
    ],
    'CLI': [
      'cli/get-started',
      'cli/crawler',
      'cli/continuous-integration'
    ],
    'API': [
      'api/get-started-content',
      'api/get-started-projects',
      'api/search',
      'api/client-workflow'
    ],
    "Security": [
      {
        type: "category",
        label: "WAF",
        items: [
          "security/WAF/get-started",
          "security/WAF/management",
          "security/WAF/custom-rules",
          {
            type: "category",
            label: "Ruleset",
            items: [
              'security/WAF/CRS/910',
              'security/WAF/CRS/920',
              'security/WAF/CRS/930',
              'security/WAF/CRS/931',
              'security/WAF/CRS/932',
            ],
          },
        ],
      }
    ],
  },
};
