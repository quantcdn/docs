module.exports = {
  someSidebar: {
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
          'integrations/drupal/seed',
          'integrations/drupal/drupal-cron',
          'integrations/drupal/drupal-search'
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
  },
};
