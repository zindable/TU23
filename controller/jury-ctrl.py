import time

from paho.mqtt import client as mqtt_client
import RPi.GPIO as GPIO


# GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(8, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 
GPIO.setup(10, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 
GPIO.setup(12, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 
GPIO.setup(22, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 

broker = '10.0.1.128'
port = 1883
root_topic = "jury-ctrl"
client_id = 'jury-ctrl'
username = ''
password = ''
sleep_time = 2

def connect_mqtt():
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


def publish(client, message, topic):
    topic = root_topic + "/" + topic
    result = client.publish(topic, message)
    
    status = result[0]
    if status == 0:
        print(f"Send `{message}` to topic `{topic}`")
    else:
        print(f"Failed to send message to topic {topic}")


# TODO Refactor this method
def run():
    client = connect_mqtt()
    client.loop_start()
    
    while True:
        if GPIO.input(8) == GPIO.HIGH:
            publish(client, 1 ,"jury_1")
            time.sleep(sleep_time)
        if GPIO.input(10) == GPIO.HIGH:
            publish(client, 2 ,"jury_1")
            time.sleep(sleep_time)
        if GPIO.input(12) == GPIO.HIGH:
            publish(client, 1 ,"jury_2")
            time.sleep(sleep_time)
        if GPIO.input(16) == GPIO.HIGH:
            publish(client, 2 ,"jury_2")
            time.sleep(sleep_time)
        if GPIO.input(18) == GPIO.HIGH:
            publish(client, 1 ,"jury_3")
            time.sleep(sleep_time)
        if GPIO.input(22) == GPIO.HIGH:
            publish(client, 2 ,"jury_3")
            time.sleep(sleep_time)


if __name__ == '__main__':
    run()