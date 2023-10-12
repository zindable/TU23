

from paho.mqtt import client as mqtt_client


broker = '10.0.1.128'
port = 1883
topic = [("foh-ctrl/jury_1", 0), ("foh-ctrl/jury_2", 0),
         ("foh-ctrl/jury_3", 0), ("foh-ctrl/reset", 0)]
client_id = 'foh-ctrl'
username = ''
password = ''
sleep_time = 0


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

    client.subscribe(topic)
    client.on_message = on_message


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()


if __name__ == '__main__':
    run()
