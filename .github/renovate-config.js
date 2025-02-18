module.exports = {
  extends: ["config:recommended", ":dependencyDashboard"],
  branchPrefix: 'renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  forkProcessing: 'enabled',
  dryRun: 'full',
  repositories: ['JulianSchallenmueller/azure-static-webapp-poc'],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      minimumReleaseAge: '0 days',
    },
  ],
};
