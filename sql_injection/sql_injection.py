"""
HANDS ON ACTIVITY: SQL INJECTION 
Checking website's vulnerabilitiy to SQL Injection by
only using GET 
"""

# Import the needed libraries 
import sys
# will allow us to communicate with the webpage
import urllib, urllib.request

def isVulnerable(url):
    # Open up the webpage
    response = urllib.request.urlopen(url + "=1")
    body.response.read()
    fullBody = body.decode('UTF-8')
    return fullBody

def main():
    inputURL = input("Please input the vulnerable webpage's URL: ")
    fullBody = isVulnerable(inputURL)
    errorMessage = "You have an error in your SQL syntax"

    if errorMessage in fullBody:
        print("This website is vulnerable to SQL injection.")
    else:
        print("This website is NOT vulnerable to SQL injection.")

main()