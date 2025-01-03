from flask import Flask, render_template
import json


app = Flask(__name__)

with open('data.json') as file:
    data = json.load(file)
    services_data = data['services']
    projects_data = data['projects']

@app.route('/')
def home():
    return render_template('home.html', title='Y&Y Solution')


@app.route('/about')
def about():
    return render_template('about.html', title='About Us')


@app.route('/services')
def services():
    return render_template('services.html', title='Our Services', services=services_data)


@app.route('/projects')
def projects():
    return render_template('projects.html', title='Our Projects', projects=projects_data)


@app.route('/team')
def team():
    return render_template('team.html', title='Our Team')


@app.route('/contact')
def contact():
    return render_template('contacts.html', title='Contact Us')
