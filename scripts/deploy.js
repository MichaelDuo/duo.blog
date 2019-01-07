const ghpages = require('gh-pages');

const {
    GITHUB_PERSONAL_TOKEN, 
    GITHUB_USER, 
    GITHUB_REPOSITORY
} = process.env

console.log(`Repo: https://${GITHUB_PERSONAL_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPOSITORY}.git`)

ghpages.publish('build', {
    repo: `https://${GITHUB_PERSONAL_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPOSITORY}.git`,
    branch: 'master',
}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log('Succeed')
    }
})