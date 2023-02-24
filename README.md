This API is useful for search, filter and sort queries

##### Host

```
https://netflix-api.up.railway.app/list
```

##### Header

```
Content-Type : application/json
```

| Endpoint    | Method | Description   |
| ----------- | ------ | ------------- |
| ```/list``` | GET    | To list shows |

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

* list all documents

  ```
  https://netflix-api.up.railway.app/list
  ```

* Filter based on show type

  ```
  https://netflix-api.up.railway.app/list?type=Movie
  ```

* Search query

  ```
  https://netflix-api.up.railway.app/list?search=Jagga
  ```

* Filter based on country name

  ```
  https://netflix-api.up.railway.app/list?country=India
  ```

* Range query for date added

  ```
  https://netflix-api.up.railway.app/list?min_date_added=August 23, 2019&max_date_added=August 25, 2021
  ```

* Range query for release date

  ```
  https://netflix-api.up.railway.app/list?min_release_year=2020&max_release_year=2022
  ```

* Filter based on rating

  ```
  https://netflix-api.up.railway.app/list?rating=TV-MA
  ```

* Sort based on 'date_added' or 'release_year'

  ```
  https://netflix-api.up.railway.app/list?sort=date_added
  ```

  ```
  https://netflix-api.up.railway.app/list?sort=release_year
  ```

* All combined

```
https://netflix-api.up.railway.app/list?type=Movie&search=Ind&country=India&min_date_added=August 23, 2019&max_date_added=August 25, 2021&min_release_year=2020&max_release_year=2022&rating=TV-MA&sort=release_year
```
