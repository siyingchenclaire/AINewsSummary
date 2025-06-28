import mysql.connector

def getNews(connection):
    # Create a cursor to execute queries
    cursor = connection.cursor()

    # Example query
    cursor.execute("SELECT * FROM mitnews")

    # Fetch and print results
    results = cursor.fetchall()

    # Clean up
    cursor.close()

    return results