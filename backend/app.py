from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app) 
listings = [
    {
        "id": 1,
        "name": "Epic Designs",
        "para": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "logo": "assets/Group 1.svg",
        "projects": 57,
        "years": 8,
        "price": "$$",
        "phone1": "+91 - 984532853",
        "phone2": "+91 - 984532854",
        
    },
    {
        "id": 2,
        "name": "Studio-D3",
        "para": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "logo": "assets/Group 1 (1).svg",
        "projects": 43,
        "years": 6,
        "price": "$$$",
        "phone1": "+91 - 984532853",
        "phone2": "+91 - 984532854",
        
    },
    {
        "id": 3,
        "name": "House of Designs",
        "para": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "logo": "assets/Group 1.svg",
        "projects": 90,
        "years": 10,
        "price": "$$$$",
        "phone1": "+91 - 984532853",
        "phone2": "+91 - 984532854",
        
    },
    {
        "id": 4,
        "name": "DecoDistrict",
        "para": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "logo": "assets/Group 1.svg",
        "projects": 70,
        "years": 11,
        "price": "$$$$",
        "phone1": "+91 - 984532853",
        "phone2": "+91 - 984532854",
        
    }
]


@app.route('/api/listings')
def get_listings():
    return jsonify(listings)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
