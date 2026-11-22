from flask import Flask, request, render_template
import json 

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/translate/<word>')
def translate(word):
    try:
        word = word.lower()
        with open("word.json", "r") as file:
            data = json.load(file)

        response = {
                "English" : word,
                "Finnish" : data[word]
            }

        return response
    
    except KeyError:
        response = {
                "message" : "Word not found in dictionary",
                "status" : 404
                }
        return response

@app.route('/words')
def dictionary():
    with open("word.json", "r") as file:
        data = json.load(file)

    return data

@app.route('/add')
def add():
    try:
        args = request.args
        english = args.get("en")
        finnish = args.get("fi")
        with open("word.json", "r") as file:
            data = json.load(file)
        with open("word.json", "w") as file:
            data[english] = finnish
            json.dump(data, file)

        return f"Success."

    except ValueError:
        return f"Failed."

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, use_reloader=True)
    
