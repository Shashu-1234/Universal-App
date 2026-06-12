const { describe, it, before, after } = require('node:test');
const assert = require('node:assert/strict');

let server;
let baseUrl;

before(async () => {
  const { createApp } = require('../../dist/app.js');
  const app = createApp();

  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const address = server.address();
      baseUrl = `http://127.0.0.1:${address.port}`;
      resolve();
    });
  });
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
});

describe('discovery and device endpoints', () => {
  it('starts scan and stores discovered controllable devices', async () => {
    const scanResponse = await fetch(`${baseUrl}/discovery/scan`, { method: 'POST' });
    assert.equal(scanResponse.status, 202);

    const scanBody = await scanResponse.json();
    assert.equal(scanBody.status, 'completed');
    assert.equal(scanBody.discovered, 2);

    const resultsResponse = await fetch(`${baseUrl}/discovery/results`);
    assert.equal(resultsResponse.status, 200);

    const resultsBody = await resultsResponse.json();
    assert.equal(resultsBody.devices.length, 2);
    assert.ok(resultsBody.devices.every((device) => device.type !== 'smartphone'));

    const devicesResponse = await fetch(`${baseUrl}/devices`);
    assert.equal(devicesResponse.status, 200);

    const devicesBody = await devicesResponse.json();
    assert.equal(devicesBody.devices.length, 2);
  });

  it('returns device by id and 404 for unknown ids', async () => {
    const devicesResponse = await fetch(`${baseUrl}/devices`);
    const devicesBody = await devicesResponse.json();
    const firstDevice = devicesBody.devices[0];

    const byIdResponse = await fetch(`${baseUrl}/devices/${firstDevice.id}`);
    assert.equal(byIdResponse.status, 200);

    const byIdBody = await byIdResponse.json();
    assert.equal(byIdBody.id, firstDevice.id);

    const notFoundResponse = await fetch(`${baseUrl}/devices/non-existent`);
    assert.equal(notFoundResponse.status, 404);
  });
});
