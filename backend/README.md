The APIs

1. Upload Receipt 
   URL: http://<host/ip>/api/receipts
   Method: POST
   Description: Uses Multipart Form Upload (key = file)

2. Add Fridge Item
   URL: http://<host/ip>/api/fridgeFoods
   Method: POST
   Description: Payload in JSON
   Example: {
        "fridge_food_name": "butter",
        "fridge_food_bought_date": "2021-01-09",
        "fridge_food_expire_date": "2022-01-03",
        "days_to_expire": 50,
        "removed_from_fridge": false
    }

3. Get all Fridge Items that have not been removed from fridge
   URL: http://<host/ip>/api/fridgeFoods
   Method: GET

4. Get Fridge Item by ID that has not been removed from fridge
   URL: http://<host/ip>/api/fridgeFoods/:id
   Method: GET

5. Remove Fridge Item by ID from fridge
   URL: http://<host/ip>/api/fridgeFoods/:id/
   Method: PUT

6. Get all Expired Fridge Items still in fridge
   URL: http://<host/ip>/api/fridgeFoods/expired/
   Method: GET