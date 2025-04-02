import requests

headers = {
    'X-Luckdata-Api-Key': '191b7ab91276e4832792f627a222c3a1'
}

json_data={
    "phone_number": "447984231120"
}

response = requests.post(
    'https://api/whatsapp-number-validator/rltsvuouydi1',
    headers=headers,
    json=json_data,
)
print(response.json())