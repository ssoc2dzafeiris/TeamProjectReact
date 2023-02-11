# API Documentation

## Get Stats

METHOD: GET

Endpoint: http://localhost:3001/stats

## Get Courses

METHOD: GET

Endpoint: http://localhost:3001/courses

## Get Single Course

METHOD: GET

Endpoint: http://localhost:3001/courses/:id

## Delete Course

METHOD: DELETE

Endpoint: http://localhost:3001/courses/:id

## Create Course

METHOD: POST

Endpoint: http://localhost:3001/courses

Body:

```json
{
  "title": "Εισαγωγή στο Storytelling",
  "imagePath": "/courses/storytelling.jpg",
  "price": {
    "early_bird": 300,
    "normal": 500
  },
  "dates": {
    "start_date": "2023-01-12",
    "end_date": "2023-02-05"
  },
  "duration": "3 weeks",
  "online": true,
  "description": "My description"
}
```

## Update Course

METHOD: PUT

Endpoint: http://localhost:3001/courses/:id

Body:

```json
{
  "title": "Εισαγωγή στο Storytelling",
  "imagePath": "/courses/storytelling.jpg",
  "price": {
    "early_bird": 300,
    "normal": 500
  },
  "dates": {
    "start_date": "2023-01-12",
    "end_date": "2023-02-05"
  },
  "duration": "3 weeks",
  "online": true,
  "description": "My description"
}
```
