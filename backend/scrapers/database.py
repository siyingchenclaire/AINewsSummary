import mysql.connector

# Connect to the MySQL server
connection = mysql.connector.connect(
    host="localhost",       # or your DB server address
    user="root",   # e.g., "root"
    password="",
    database=""
)


# Create a cursor to execute queries
cursor = connection.cursor()

# Define news article data
title = "Lee Jae-myung and the uncertain future of South Korean politics"
content = '''
Fresh from his commanding win in the June 3 snap presidential election, South Korea’s Lee Jae-myung presented himself as a supporter of the Western democracies at the G-7 in Alberta, Canada, this month. 

While there as the president of an invited nation — South Korea, formally the Republic of Korea, is not one of the seven — Lee met with the leaders of Japan, Canada, Britain, Australia, South Africa, India, Brazil and Mexico. He also sat down with United Nations Secretary-General Antonio Guterres as well as European Union officials. 

Lee did not, however, get to meet with President Trump, who cut short his attendance to deal with the widening Israel-Iran war. 

The cancellation of the meeting with Trump has already undermined Lee’s standing at home.

“The South Korean public is upset with Lee’s performance at the G-7,” Greg Scarlatoiu, president and CEO of the Committee for Human Rights in North Korea, told me. “He was expected to engage in his first significant diplomatic endeavor to prioritize trade and tariffs. A one-on-one meeting with Trump was the test in the eyes of the public.” 

The cancellation — many in South Korea think their president was snubbed — is bound to bolster Lee’s more anti-American advisors. As Scarlatoiu points out, Lee “has allowed two camps to form within his national security and foreign policy teams.” 

There are the officials keen on strengthening relations with Washington, and those advocating “independent politics,” a move away from America and toward China and North Korea. 

“Perhaps this balancing act is an attempt to preserve the U.S.-South Korea alliance while resuscitating South Korea-China relations,” Scarlatoiu said. 

Lee has affirmed the military alliance with the U.S. — America is the only nation committed to defend the South — but he almost certainly wants American troops off South Korean soil.  

Before presenting himself as a moderate in the recent presidential campaign — Lee unsuccessfully ran for president in 2022. In that campaign, he wanted to end the alliance, formed in 1953 just months after the Korean War armistice, and move Seoul firmly into China’s and North Korea’s camp. 

After all, while campaigning for the presidential nomination of the Democratic Party of Korea in July 2021, he called American troops in his country an “occupying force.” Worse, Lee charged America with keeping Japanese rule in place in Korea, a highly explosive charge.
'''
source = "The Hill"
url = "https://thehill.com/opinion/international/5368818-lee-jae-myung-south-korea-election/"

# Prepare and execute INSERT statement
insert_query = """
INSERT INTO daily_news (title, content, source, url)
VALUES (%s, %s, %s, %s)
"""
cursor.execute(insert_query, (title, content, source, url))

# Commit the transaction
connection.commit()
print("News article inserted successfully.")

# Clean up
cursor.close()
connection.close()
