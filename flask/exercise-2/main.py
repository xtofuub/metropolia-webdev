from flask import Flask, request, render_template
import json 

app = Flask(__name__)

@app.route('/')
def page():
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
    english_words = []
    for i in data:
        english_words.append(i)
    return english_words

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, use_reloader=True)
    
