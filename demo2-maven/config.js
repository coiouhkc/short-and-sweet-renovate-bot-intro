module.exports = {
    platform: 'github',
    endpoint: 'https://github-enterprise.example.com/api/v3/',
    token: 'process.env.TOKEN',
    hostRules: [
        {
            "automerge": false
        },
    ],
    repositories: ['coiouhkc/monthly-balancing'],
};
