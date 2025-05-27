from flask import Flask, jsonify
from flask_cors import CORS

server = Flask(__name__)
CORS(server)

@server.route('/api/server', methods=['GET'])
def get_data():
    sample_data = {
        'id': 1,
        'message': 'Hello from the backend!',
        'items': ['apple', 'banana', 'cherry'],
        'status':'success'
    }
    return jsonify(sample_data)

if __name__ == '__main__':
    server.run(debug=True)

url = 'http://127.0.0.1:5000/api/server'