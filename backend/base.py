# Import dependencies 
from flask import Flask, jsonify 

from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base

# create a flask app 
app = Flask(__name__)

# Define app routes
@app.route("/")
def welcome():
    return (
        f"Welcome to the anre research API <br/>"
        f"Available routes: <br/>"
        f"/api/v1.0/test<br/>"
    )

# Define test app route

@app.route("/api/v1.0/test")
def test():
    hello = f"Hello World"
    return(hello)

# Run the app in debug mode if this script is executed

if __name__ == "__main__":
    app.run(debug=True)