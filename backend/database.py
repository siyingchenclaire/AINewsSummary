import mysql.connector

# Connect to the MySQL server
def getConnection():
    return mysql.connector.connect(
        host="localhost",       # or your DB server address
        user="root",   # e.g., "root"
        password="011129",
        database="news"
    )

def getNews(connection):
    # Create a cursor to execute queries
    cursor = connection.cursor()

    # Example query
    cursor.execute("SELECT * FROM daily_news")

    # Fetch and print results
    results = cursor.fetchall()

    # Clean up
    cursor.close()

    return results

def closeConnection():
    connection.close()