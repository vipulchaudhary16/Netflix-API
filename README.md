## Netflix API
It's an API for fetching Netflix shows

#### Host
```
http://
```

#### Header
```js
Content-Type : application/json
```
#### Endpoints

|            Endpoint | Method | Description              |
| ------------------: | ------ | ------------------------ |
|      `/manage/seed` | POST     | To seed data to database |
| ```/manage/reset``` | DELETE | To reset database        |
|             `/list`               | GET       | To list shows            |
---
### Endpoint 1: ```/manage/seed```

This endpoint will seed data to database
```
If database is already seeded then
    it will return : `Data already seeded`
​else
    ​It will return `Data seeded successfully`
```
​Note: as we have almost 8000+ documents so it will take long time to seed, almost 5 minutes.

---
### Endpoint 2: ```/manage/reset```

This endpoint will be useful for resetting the database.
```
​if database is already cleaned then
​   it will return `No Data`
else
​   it will return `All data deleted successfully`
```
---
### Endpoint 3: ```/list```

This endpoint is useful for search, filter and sort queries

It has some query parameter, as mentioned below with example value

|     Query Params | Description                                                  | Possible value              |
| ---------------: | ------------------------------------------------------------ | --------------------------- |
|             type | add value for filtering based on show type                   | Movie or TV Show            |
|           search | add value for searching query on 'Title', 'Cast' or 'Director' | Jagga etc.                  |
|          country | add country name if you want to filter shows based on country | India                       |
|   min_date_added | add lower bound value for date added range query             | August 23, 2019             |
|   max_date_added | add Higher bound value for date added range query            | August 25, 2021             |
| min_release_year | add lower bound value for release year range query           | 2020                        |
| max_release_year | add higher bound value for release year range query          | 2022                        |
|           rating | add value of rating if you want to filter based on rating    | TV-MA                       |
|             sort | Sort based on 'date_added' or 'release_year'                 | date_added or date_released |

### Examples

1. #### Seed

   ```
   host/manage/seed
   ```

2. #### Reset

   ```
   host/manage/reset
   ```

3. #### List

* list all documents

  ```
  host/list
  ```

* Filter based on show type

  ```
  host/list?type=Movie
  ```

* Search query

  ```
  host/list?search=Jagga
  ```

* Filter based on country name

  ```
  host/list?country=India
  ```

* Range query for date added

  ```
  host/list?min_date_added=August 23, 2019&max_date_added=August 25, 2021
  ```

* Range query for release date

  ```
  host/list?min_release_year=2020&max_release_year=2022
  ```

* Filter based on rating

  ```
  host/list?rating=TV-MA
  ```

* Sort based on 'date_added' or 'release_year'

  ```
  host/list?sort=date_added
  ```

  ```
  host/list?sort=release_year
  ```

* All combined

  ```
  host/list?type=Movie&search=Ind&country=India&min_date_added=August 23, 2019&max_date_added=August 25, 2021&min_release_year=2020&max_release_year=2022&rating=TV-MA&sort=release_year
  ```

  

