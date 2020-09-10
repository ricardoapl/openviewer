## Overview

OpenViewer is a two-part web application comprised of OpenViewer itself (a frontend for [OpenStack](https://www.openstack.org/)) and NotSoKinD (a frontend for [Kubernetes](https://kubernetes.io/)).

## Features

OpenViewer

- Login, logout, and switch between different projects
- Create, update, delete and list block storage
- Create, delete, and list images
- List networks, pools, and ports
- Create, delete, and list floating IPs
- Create, delete, and list instances
- Start and stop instances
- Manage instance high-availability settings (requires [Masakari](https://www.openstack.org/software/releases/ussuri/components/masakari))
- Orchestrate web services (requires [Heat](https://www.openstack.org/software/releases/ussuri/components/heat))

NotSoKinD

- Login and logout with bearer tokens
- Create, delete, and list namespaces
- Create, update, delete and list deployments
- List pods and containers within
- Create, update, delete and list services
- Create, delete, and list horizontal pod autoscalers (with resource or custom metrics)

## Installation

Clone this repository into your local machine and run ```npm install```.

## Requirements

In order to install and run this application, you must have:

- [Node.js](https://nodejs.org/en/)
- [Vue.js](https://vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)

Please refer to each of these components’ documentation for further details.

You will also need an OpenStack cluster and/or a Kubernetes cluster.

## Usage

To compile and hot-reload use `npm run serve`.

To compile for production use `npm run build`.

## Authors

This software was developed by João Godinho ([**@cat5e**](https://github.com/cat5e)), Patricia Rodrigues ([**@zdzaz**](https://github.com/zdzaz)) and Ricardo Lopes ([**@ricardoapl**](https://github.com/ricardoapl)).

## License

OpenViewer is available under the terms of the MIT License.
