from flask import Flask, jsonify
from flask_cors import CORS
from database import getNews
import mysql.connector

server = Flask(__name__)
CORS(server)

# Connect to the MySQL server
def getConnection():
    return mysql.connector.connect(
        host="localhost",       # or your DB server address
        user="root",   # e.g., "root"
        password="011129",
        database="mitnews"
    )

@server.route('/api/server', methods=['GET'])
def getdata():
    sample_data = {
        'id': x,
        'message': y,
        'items': z,
        'status': y
    }
    return jsonify(sample_data)

@server.route('/getnews', methods=['GET'])
def getnews():
    connection = getConnection() #connect to database
    try:
        results = getNews(connection) #run SQL query
        return jsonify(results)

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

    finally:
        if connection:
            connection.close()

if __name__ == '__main__':
    server.run(debug=True)

url = 'http://127.0.0.1:5000/api/server'