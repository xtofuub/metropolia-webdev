from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def page():
    return render_template('index.html')

@app.route('/prime_number/<number>')
def prime(number):
    isprime = True
    num = int(number)
    for i in range(2, num):
        if num % i == 0:
            isprime = False
            break
    response = {
            "Number" : number,
            "isPrime" : isprime
        
    }
    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
