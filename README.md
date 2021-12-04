# Developer Profiles:-

## Application link:- <a target="_blank" href='http://developer-profiles.herokuapp.com/'>developer-profiles.herokuapp.com</a>

## Application video:- https://youtu.be/B4mN_n3uq4U

## This web-app has the following features:-

<ol>
	<li>Developer List Page:- 
		<ul><li> Provides brief details about the developers.</li>
		<li> Search developers.</li>
		<li> Add new devlopers.</li>
		</ul>
</li>

<li>Developer Detail Page:- Shows detail developer info with their social profile links and list of their repos.

</li>
</ol>

## API Specs:-

### Get all developers:-

```js
GET /api/developers/
Sample Response Body:
[{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4"
}, {
	"id": "sagarjain0907",
	"avatar_url": "https://avatars.githubusercontent.com/u/20463272?v=4"
}]
Status: 200
```

### Add a developer:-

```js
POST /api/developers/
Sample Request Body:
{
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit"
}

Sample Response Body:
{
	"id": "gcnit"
}
Status: 201 (User Created), 400 (GitHub username is invalid)
```

### Get a developer:-

```js
GET /api/developers/:id/
Sample Response Body:
{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
	"name": "Gaurav Chandak",
	"company": "workat.tech",
	"blog": "https://workat.tech",
	"location": "Bangalore, India",
	"email": null,
	"bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit",
	"repos": [{
		"name": "awesome-learn-to-code",
		"html_url": "https://github.com/gcnit/awesome-learn-to-code",
		"description": "A list of awesome resources for learning to code",
		"updated_at": "2020-08-12T18:21:53Z"
}]
}
Status: 200 (Valid User), 404 (User does not exist)
```

### Remove a developer:-

```js
DELETE /api/developers/:id/

Status: 204 (Deleted)
```
