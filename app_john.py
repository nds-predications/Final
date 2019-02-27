import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
# import PyMysql
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

# app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:Grateful11!!@localhost:3306/bball_db"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:007326@localhost:3306/bball_db"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)
engine = db.engine
# Save references to each table



@app.route("/")
def index():
    """Return the homepage."""
    
    return render_template("index_4.html")

@app.route("/model_1415")
def model_1415():
    """Return a all database data"""
    df = pd.read_sql('Select * from model_1415', engine)
    # Use Pandas to perform the sql query
   
    # df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return df.to_json(orient='records')



if __name__ == "__main__":
    app.run(debug=True)
