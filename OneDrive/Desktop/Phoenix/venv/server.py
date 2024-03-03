
from flask import Flask, jsonify

app = Flask(__name__)

sample_bus_schedule = {
    "bus_schedule": "Bus A: 9:00 AM, 12:00 PM, 3:00 PM\nBus B: 10:00 AM, 1:00 PM, 4:00 PM"
}

@app.route('/api/bus-schedule', methods=['GET'])
def get_bus_schedule():
    return jsonify(sample_bus_schedule)

if __name__ == '__main__':
    app.run(debug=True)

