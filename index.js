require('dotenv').config()
const express = require('express')
const app = express()
// console.log('chai aur backend')

const port = process.env.PORT;

const githubData = {
    "login": "harshjoshi02",
    "id": 88721613,
    "node_id": "MDQ6VXNlcjg4NzIxNjEz",
    "avatar_url": "https://avatars.githubusercontent.com/u/88721613?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/harshjoshi02",
    "html_url": "https://github.com/harshjoshi02",
    "followers_url": "https://api.github.com/users/harshjoshi02/followers",
    "following_url": "https://api.github.com/users/harshjoshi02/following{/other_user}",
    "gists_url": "https://api.github.com/users/harshjoshi02/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/harshjoshi02/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/harshjoshi02/subscriptions",
    "organizations_url": "https://api.github.com/users/harshjoshi02/orgs",
    "repos_url": "https://api.github.com/users/harshjoshi02/repos",
    "events_url": "https://api.github.com/users/harshjoshi02/events{/privacy}",
    "received_events_url": "https://api.github.com/users/harshjoshi02/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-08-10T12:50:48Z",
    "updated_at": "2025-04-03T07:29:43Z"
  }

app.get('/', (req,res) => {
    res.send('welcome to backend')
}) 

app.get('/twitter', (req,res) => {
    res.send('redirect to twitter')
})

app.get('/login', (req,res) => {
    res.send(`<h1>login page under development</h1>`)
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

