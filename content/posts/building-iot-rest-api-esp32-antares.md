---
title: "Building High-Throughput RESTful APIs for ESP32 IoT Devices with Node.js and Antares"
slug: "building-iot-rest-api-esp32-antares"
date: "2025-04-15"
author: "Muhamad Rizal Fikri"
description: "A technical architectural guide on designing Node.js & Express REST APIs to ingest sensor telemetry from ESP32 microcontrollers and route data into the Antares IoT platform."
tags: ["IoT", "Node.js", "Express.js", "ESP32", "Antares", "Backend Architecture"]
category: "Backend & IoT"
readTime: "6 min read"
---

## Introduction

Connecting embedded microcontrollers like the **ESP32** to cloud backends requires addressing real-world network instability, intermittent connectivity, and sudden telemetry spikes. During my tenure as a **Backend Developer Intern at Telkom Indonesia (Antares)**, I focused on building resilient data ingestion pipelines connecting IoT edge hardware to the Antares IoT enterprise platform.

In this article, I will share the architectural principles and implementation patterns used to build scalable RESTful APIs with Node.js and Express.js for IoT workloads.

---

## Architectural Challenges in IoT Telemetry

Unlike traditional web applications where clients make sporadic, user-initiated HTTP requests, IoT devices stream data cyclically at fixed intervals (e.g., every 5 seconds). Key challenges include:

1. **Payload Optimization**: Microcontrollers have constrained memory buffers. HTTP payloads must be concise (compact JSON or binary buffers).
2. **Device Authentication**: Edge devices need lightweight, token-based verification without the overhead of heavy session handshakes.
3. **Telemetry Ingestion Throughput**: The backend must parse and forward sensor readings (temperature, humidity, voltage) into timeseries storage without blocking the Node.js event loop.

---

## Designing the Ingestion Pipeline

Our backend architecture relies on a multi-stage ingestion pipeline:

```
[ ESP32 Sensor Array ] 
        │ (HTTP POST / Wi-Fi)
        ▼
[ Node.js & Express Gateway ] ──► [ Token Validation & Rate Limiting ]
        │
        ├──► [ Antares Platform Adapter (MQTT/REST) ]
        └──► [ Database Logging & In-Memory Cache ]
```

### 1. Lightweight Validation Middleware

We validate incoming device headers to ensure the device fingerprint matches registered device IDs in the system:

```javascript
export function validateDeviceToken(req, res, next) {
    const deviceKey = req.headers['x-device-key'];
    const deviceId = req.params.deviceId;

    if (!deviceKey || !isValidDevice(deviceId, deviceKey)) {
        return res.status(401).json({ status: 'error', message: 'Unauthorized device' });
    }
    next();
}
```

### 2. Batching and Forwarding to Antares

Rather than executing a blocking remote API call for every incoming telemetry frame, we queue sensor payloads into memory buffers and dispatch them in micro-batches to the Antares IoT platform:

```javascript
import axios from 'axios';

export async function forwardTelemetryToAntares(applicationName, deviceName, sensorPayload) {
    const endpoint = `https://platform.antares.id:8443/~/antares-cse/antares-id/${applicationName}/${deviceName}`;

    try {
        const response = await axios.post(
            endpoint,
            {
                'm2m:cin': {
                    con: JSON.stringify(sensorPayload)
                }
            },
            {
                headers: {
                    'X-M2M-Origin': process.env.ANTARES_ACCESS_KEY,
                    'Content-Type': 'application/json;ty=4',
                    'Accept': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(`Telemetry forwarding failed for ${deviceName}:`, error.message);
        throw error;
    }
}
```

---

## Key Performance Takeaways

- **Keep payloads minimal**: Avoid verbose nested JSON fields; use abbreviated keys (`t` for temperature, `h` for humidity).
- **Graceful degradation**: In case of temporary Antares API rate limits, store telemetry data in local Redis queues and retry with exponential backoff.
- **Microcontroller reconnection logic**: Program the ESP32 firmware with non-blocking Wi-Fi reconnection routines to prevent hardware watchdogs from restarting the device on momentary dropouts.

---

## Conclusion

Building scalable backend infrastructure for IoT requires thinking differently about concurrency, data serialization, and edge reliability. By combining Node.js, Express.js, and the Antares platform, we achieved seamless real-time visibility across dozens of deployed sensor nodes.

Have questions about IoT backends or custom API development? Reach out via the [Contact Section](https://www.rizll.tech/#contact) or connect on [LinkedIn](https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250).
