from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/repositories', methods=['POST'])
def repositories():
    username = request.form['username']
    per_page = int(request.form.get('per_page', 10))

    # Call GitHub API to get repositories
    url = f'https://api.github.com/users/{username}/repos'
    params = {'per_page': per_page}
    response = requests.get(url, params=params)
    repositories = response.json()

    return render_template('repositories.html', repositories=repositories)

if __name__ == '__main__':
    app.run(debug=True)
