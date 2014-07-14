---
layout:       post
image:        /assets/img/robot-web-tools.jpg
title:        Robot Web Tools with Baxter
demo:         https://github.com/jonrovira/robot_web_tools
requirements: [ros-hydro-ros-base (basic ROS installation), 
               ros-hydro-rosbridge-server (rosbridge_server),
               mjpeg_server,
               Rethink Robotics Baxter robot]
overview:      In this project, you will demonstrate the capabilities of Robot
               Web Tools, particularly when interfacing it with Rethink Robotics' Baxter robot. The included demo contains code to publish a simple message to a ROS Topic, stream one of Baxter's camera feeds, and control Baxter's left arm, all via a web browser.
---




### Get the demo up and running
1. Make sure "Enable Networking" is unchecked in the networking menu
2. Ensure that Baxter ethernet cable is connected to PC
3. Open up a terminal and run Avahi's network address configuration daemon
```
$ sudo avahi-autoipd eth0
```
4. In a new terminal, start roscore
```
$ roscore
```
5. In a new terminal, launch a rosbridge server
```
$
roslaunch rosbridge_server rosbridge_websocket.launch
```
6. In a new terminal, launch a mjpeg server
```
$ rosrun mjpeg_server mjpeg_server
```
7. In Google Chrome, navigate to the local html page
```
file:///home/puppeteer/jons_stuff/catkin_ws/src/robot_web_tools/src/index.html
```
8. To see Baxter's left hand camera stream, run the startcamera script in a new terminal
```
$ rosrun robot_web_tools startcamera.py
```
