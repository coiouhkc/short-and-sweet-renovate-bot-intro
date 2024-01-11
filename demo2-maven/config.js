module.exports = {
    platform: 'github',
    endpoint: 'https://github-enterprise.example.com/api/v3/',
    token: 'process.env.TOKEN',
    hostRules: [
        {
            "automerge": false
        },
    ],
    repositories: ['coiouhkc/short-and-sweet-renovate-intro-demo'],
};
