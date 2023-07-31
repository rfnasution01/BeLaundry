export const beloundryPostman = {
	"info": {
		"_postman_id": "526e6d5e-a796-4efd-ae82-0d34088aad6e",
		"name": "belaundry",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "13182343",
		"_collection_link": "https://taufik-thd.postman.co/workspace/posinfinite-v2~57954448-67d4-4699-8806-d2344e24c63a/collection/13182343-526e6d5e-a796-4efd-ae82-0d34088aad6e?action=share&creator=13182343&source=collection_link"
	},
	"item": [
		{
			"name": "user",
			"item": [
				{
					"name": "user info",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\"    : \"ovickbs@gmail.com\",\n    \"password\" : \"qwerpilkopi\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/platform/user/info",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"user",
								"info"
							]
						}
					},
					"response": []
				},
				{
					"name": "sign up",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\"     : \"Taufik Hidayat\",\n    \"phone\"    : \"6282122104014\",\n    \"email\"    : \"ovickbs@gmail.com\",\n    \"password\" : \"12345678\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/platform/user/sign-up",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"user",
								"sign-up"
							]
						}
					},
					"response": []
				},
				{
					"name": "sign in",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\"    : \"ovickbs@gmail.com\",\n    \"password\" : \"qwerpilkopi\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/platform/user/sign-in",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"user",
								"sign-in"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "product",
			"item": [
				{
					"name": "get category",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:4000/platform/product/categories",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"product",
								"categories"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all product",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:4000/platform/product",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"product"
							]
						}
					},
					"response": []
				},
				{
					"name": "find product",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:4000/platform/product/48",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"product",
								"48"
							]
						}
					},
					"response": []
				},
				{
					"name": "create new product",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\"        : \"Sendal Swallow Biru\",\n    \"description\" : \"Sendal Swallow Biru no.12\",\n    \"sku\"         : \"SWBL\",\n    \"stock\"       : 2,\n    \"category_id\" : 2,\n    \"price\"       : 12000,\n    \"image\"       : \"https://m.media-amazon.com/images/I/51FIaqed1eL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg\"\n}\n\n\n\n\n\n\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/platform/product",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"product"
							]
						}
					},
					"response": []
				},
				{
					"name": "update product",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"price\": 15000\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/platform/product/48",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"platform",
								"product",
								"48"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete product",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://belaundry-api.sebaris.link/platform/product/47",
							"protocol": "https",
							"host": [
								"belaundry-api",
								"sebaris",
								"link"
							],
							"path": [
								"platform",
								"product",
								"47"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "report",
			"item": [
				{
					"name": "product sold",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "{{token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://belaundry-api.sebaris.link/platform/product/report",
							"protocol": "https",
							"host": [
								"belaundry-api",
								"sebaris",
								"link"
							],
							"path": [
								"platform",
								"product",
								"report"
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "token",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k",
			"type": "string"
		}
	]
}