import time
import json
import RPi.GPIO as GPIO
from paho.mqtt import client as mqtt_client


broker = '10.0.1.128'
port = 1883
topic = [("foh-ctrl/jury_1", 0), ("foh-ctrl/jury_2", 0),
         ("foh-ctrl/jury_3", 0)]
client_id = 'foh-ctrl'
username = ''
password = ''
sleep_time = 0


# GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(8, GPIO.OUT)
GPIO.setup(10, GPIO.OUT)
GPIO.setup(12, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)


GPIO.output(8, True)
GPIO.output(10, True)
GPIO.output(12, True)
GPIO.output(16, True)
GPIO.output(18, True)
GPIO.output(22, True)


def connect_mqtt() -> mqtt_client:
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client


def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic")
        message = json.loads(msg.payload.decode())
        set_vote(message["vote"], msg.topic)

    client.subscribe(topic)
    client.on_message = on_message


def set_vote(vote, voter):
    match vote:
        case "green":
            vote_green(voter)
        case "red":
            vote_red(voter)
        case "reset":
            reset(voter)
        


def vote_red(voter):
    match voter:
        case "foh-ctrl/jury_1":
            GPIO.output(8, False)
            GPIO.output(10, True)
        case "foh-ctrl/jury_2":
            GPIO.output(12, False)
            GPIO.output(16, True)
        case "foh-ctrl/jury_3":
            GPIO.output(18, False)
            GPIO.output(22, True)

def vote_green(voter):
    match voter:
        case "foh-ctrl/jury_1":
            GPIO.output(8, True)
            GPIO.output(10, False)
        case "foh-ctrl/jury_2":
            GPIO.output(12, True)
            GPIO.output(16, False)
        case "foh-ctrl/jury_3":
            GPIO.output(18, True)
            GPIO.output(22, False)

def reset(voter):
    match voter:
        case "foh-ctrl/jury_1":
            GPIO.output(8, True)
            GPIO.output(10, True)
        case "foh-ctrl/jury_2":
            GPIO.output(12, True)
            GPIO.output(16, True)
        case "foh-ctrl/jury_3":
            GPIO.output(18, True)
            GPIO.output(22, True)



# if reset -> reset
# if green -> reset red -> vote green
# if red -> reset green -> vote red


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()


if __name__ == '__main__':
    run()
    GPIO.cleanup()               # clean up after yourself


