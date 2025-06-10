
# 🐞 Bug Report

**Test Name:** `Creating multiple products`  
**Timestamp:** 2025-06-10T04:01:17.367Z  

---

## ❌ Error
```txt
expected [ 21 ] to have a length of 10 but got 1
```

---

## 📤 Request
```json
"POST /products"
```

---

## 📥 Response
```json
[
  {
    "id": 21,
    "title": "Test Product 0",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 1",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 2",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 3",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 4",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 5",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 6",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 7",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 8",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  },
  {
    "id": 21,
    "title": "Test Product 9",
    "price": 100,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "category": "test"
  }
]
```
