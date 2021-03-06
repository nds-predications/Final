from flask import Flask, request, render_template
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/')
def static_page():
   return render_template('index.html')

if __name__ == '__main__':
   app.run(debug=True)