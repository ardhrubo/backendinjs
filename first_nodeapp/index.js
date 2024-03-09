require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const githubData = {
    "login": "ardhrubo",
    "id": 112472739,
    "node_id": "U_kgDOBrQyow",
    "avatar_url": "https://avatars.githubusercontent.com/u/112472739?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ardhrubo",
    "html_url": "https://github.com/ardhrubo",
    "followers_url": "https://api.github.com/users/ardhrubo/followers",
    "following_url": "https://api.github.com/users/ardhrubo/following{/other_user}",
    "gists_url": "https://api.github.com/users/ardhrubo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ardhrubo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ardhrubo/subscriptions",
    "organizations_url": "https://api.github.com/users/ardhrubo/orgs",
    "repos_url": "https://api.github.com/users/ardhrubo/repos",
    "events_url": "https://api.github.com/users/ardhrubo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ardhrubo/received_events",
    "type": "User",
    "site_admin": false,
    "name": "AR Dhrubo",
    "company": "@Constant-Research-and-Innovation-Lab ",
    "blog": "https://g.dev/ardhrubo",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "Never Give up. Never Stop learning. Never show excuses. Documenting my life to get the best output.",
    "twitter_username": null,
    "public_repos": 32,
    "public_gists": 0,
    "followers": 11,
    "following": 68,
    "created_at": "2022-08-30T08:27:10Z",
    "updated_at": "2024-03-01T15:48:57Z" 
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('ardhrubo')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2> Shut the hell off </h2>")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Our page</h1>')
})


app.get('/github',(req,res)=>{
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

