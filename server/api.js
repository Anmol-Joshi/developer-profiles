/* eslint-disable no-restricted-syntax */
const axios = require('axios');
const express = require('express');

const developerData = require('./developer_data');

const router = express.Router();

router.get('/developers', (req, res) => {
    const result = [];
    // console.log(developerData);
    const keys = Object.keys(developerData);
    // console.log('keys are', keys);
    const values = Object.values(developerData);
    // console.log('values are', values);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
        result.push({ id: developerData[key].id, avatar_url: developerData[key].avatar_url });
    }
    res.status(200).send(result);
});
router.delete('/developers/:id', (req, res) => {
    // eslint-disable-next-line no-plusplus
    delete developerData[req.params.id];
    // console.log('Deleted');
    res.status(204).send('Deleted');
});
router.post('/developers', (req, res) => {
    const data = req.body;
    const finalResult = {
        id: data.github_id,
        linkedin_id: data.linkedin_id,
        codechef_id: data.codechef_id,
        hackerrank_id: data.hackerrank_id,
        twitter_id: data.twitter_id,
        medium_id: data.medium_id,
    };
    const url = `https://api.github.com/users/${data.github_id}`;
    const promise1 = Promise.resolve(
        axios.get(url).then((resp) => {
            finalResult.avatar_url = resp.data.avatar_url;
            finalResult.name = resp.data.name;
            finalResult.company = resp.data.company;
            finalResult.blog = resp.data.blog;
            finalResult.location = resp.data.location;
            finalResult.email = resp.data.email;
            finalResult.bio = resp.data.bio;
            finalResult.github_id = resp.data.login;
        }),
    );
    const promise2 = Promise.resolve(
        // eslint-disable-next-line no-loop-func
        axios.get(`https://api.github.com/users/${data.github_id}/repos`).then((res1) => {
            const repos = [];
            for (const repo of res1.data) {
                repos.push({
                    name: repo.name,
                    html_url: repo.owner.html_url,
                    description: repo.description,
                    updated_at: repo.updated_at,
                });
            }
            finalResult.repos = repos;
        }),
    );
    const promise = Promise.all([promise1, promise2]);
    // promise.then(() => {
    //     developerData[data.github_id] = finalResult;
    //     res.status(201).send('User Created');
    // });
    // promise.catch((error) => {
    //     console.log(error);
    //     res.status(400).send('GitHub username is invalid');
    // });
    const onSuccess = (result) => {
        // console.log(result);
        developerData[data.github_id] = finalResult;
        res.status(201).send({ id: data.github_id });
    };

    const onError = (error) => {
        // console.log(error);
        res.status(400).send('GitHub username is invalid');
    };
    promise.then(onSuccess, onError);
});

router.get('/developers/:id', (req, res) => {
    // console.log(developerData[req.params.id]);
    if (developerData[req.params.id]) {
        res.status(200).send(developerData[req.params.id]);
    } else {
        res.status(400).send('User does not exist');
    }
});

module.exports = router;
