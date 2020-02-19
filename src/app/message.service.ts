import { Injectable } from '@angular/core';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  chats: Message[] = [{
    "id": 0,
    "msg": "Cross-group asynchronous open architecture",
    "date": "2019-07-05T23:54:53Z"
  }, {
    "id": 0,
    "msg": "Extended full-range instruction set",
    "date": "2019-05-19T10:35:09Z"
  }, {
    "id": 1,
    "msg": "Multi-tiered zero administration monitoring",
    "date": "2019-02-12T16:31:53Z"
  }, {
    "id": 1,
    "msg": "Pre-emptive bottom-line structure",
    "date": "2019-06-09T20:55:11Z"
  }, {
    "id": 1,
    "msg": "Configurable background algorithm",
    "date": "2019-11-16T02:53:12Z"
  }, {
    "id": 1,
    "msg": "Business-focused real-time process improvement",
    "date": "2020-02-07T01:44:13Z"
  }, {
    "id": 1,
    "msg": "Open-architected well-modulated access",
    "date": "2019-03-15T11:12:51Z"
  }, {
    "id": 0,
    "msg": "Proactive responsive protocol",
    "date": "2019-07-31T23:56:15Z"
  }, {
    "id": 0,
    "msg": "Reverse-engineered systematic hardware",
    "date": "2019-09-28T18:05:13Z"
  }, {
    "id": 0,
    "msg": "Re-contextualized scalable pricing structure",
    "date": "2019-11-06T04:28:00Z"
  }, {
    "id": 0,
    "msg": "Open-architected cohesive solution",
    "date": "2019-06-29T05:36:05Z"
  }, {
    "id": 0,
    "msg": "Stand-alone methodical Graphic Interface",
    "date": "2019-04-18T01:44:45Z"
  }, {
    "id": 0,
    "msg": "Configurable optimal attitude",
    "date": "2020-02-08T15:28:59Z"
  }, {
    "id": 1,
    "msg": "Expanded intermediate model",
    "date": "2019-08-15T14:34:24Z"
  }, {
    "id": 0,
    "msg": "Upgradable uniform capacity",
    "date": "2019-10-20T08:25:33Z"
  }, {
    "id": 0,
    "msg": "Configurable 3rd generation array",
    "date": "2019-04-16T15:19:42Z"
  }, {
    "id": 0,
    "msg": "Grass-roots fresh-thinking software",
    "date": "2019-03-17T23:25:48Z"
  }, {
    "id": 0,
    "msg": "Automated executive core",
    "date": "2019-10-30T07:51:12Z"
  }, {
    "id": 1,
    "msg": "Proactive motivating attitude",
    "date": "2019-11-30T01:08:07Z"
  }, {
    "id": 1,
    "msg": "Programmable multimedia customer loyalty",
    "date": "2019-08-27T12:27:56Z"
  }, {
    "id": 0,
    "msg": "Future-proofed solution-oriented moderator",
    "date": "2019-12-29T20:38:36Z"
  }, {
    "id": 0,
    "msg": "Seamless systematic core",
    "date": "2019-12-17T05:47:45Z"
  }, {
    "id": 0,
    "msg": "Optional incremental concept",
    "date": "2019-03-11T22:47:40Z"
  }, {
    "id": 1,
    "msg": "Horizontal context-sensitive task-force",
    "date": "2019-12-02T01:46:25Z"
  }, {
    "id": 0,
    "msg": "Networked object-oriented superstructure",
    "date": "2019-06-28T00:40:48Z"
  }, {
    "id": 1,
    "msg": "Phased eco-centric internet solution",
    "date": "2019-07-09T20:44:25Z"
  }, {
    "id": 0,
    "msg": "Programmable bifurcated structure",
    "date": "2020-01-01T07:04:04Z"
  }, {
    "id": 1,
    "msg": "Total content-based instruction set",
    "date": "2019-12-16T06:27:26Z"
  }, {
    "id": 1,
    "msg": "Profound needs-based framework",
    "date": "2019-10-15T05:34:48Z"
  }, {
    "id": 0,
    "msg": "Persistent 24/7 complexity",
    "date": "2019-08-03T02:32:25Z"
  }, {
    "id": 0,
    "msg": "Compatible 6th generation artificial intelligence",
    "date": "2019-07-18T18:27:27Z"
  }, {
    "id": 1,
    "msg": "Profit-focused transitional throughput",
    "date": "2019-10-31T19:11:55Z"
  }, {
    "id": 0,
    "msg": "Extended scalable application",
    "date": "2019-06-24T14:37:23Z"
  }, {
    "id": 1,
    "msg": "Progressive reciprocal approach",
    "date": "2019-07-13T21:50:37Z"
  }, {
    "id": 1,
    "msg": "Intuitive bifurcated artificial intelligence",
    "date": "2019-03-12T14:14:24Z"
  }, {
    "id": 1,
    "msg": "Operative explicit knowledge user",
    "date": "2019-11-05T07:18:43Z"
  }, {
    "id": 0,
    "msg": "Integrated systemic portal",
    "date": "2019-08-09T10:12:03Z"
  }, {
    "id": 0,
    "msg": "Profit-focused object-oriented policy",
    "date": "2019-04-09T20:04:51Z"
  }, {
    "id": 0,
    "msg": "Vision-oriented well-modulated support",
    "date": "2019-05-24T10:35:46Z"
  }, {
    "id": 0,
    "msg": "Versatile analyzing standardization",
    "date": "2019-04-23T10:09:03Z"
  }, {
    "id": 1,
    "msg": "Digitized full-range solution",
    "date": "2019-09-27T14:19:56Z"
  }, {
    "id": 0,
    "msg": "De-engineered leading edge monitoring",
    "date": "2019-04-24T19:29:31Z"
  }, {
    "id": 1,
    "msg": "Business-focused analyzing infrastructure",
    "date": "2019-03-09T09:44:17Z"
  }, {
    "id": 0,
    "msg": "Function-based real-time system engine",
    "date": "2019-03-21T11:09:20Z"
  }, {
    "id": 0,
    "msg": "Cross-group static initiative",
    "date": "2019-07-31T06:47:51Z"
  }, {
    "id": 0,
    "msg": "Cloned tangible implementation",
    "date": "2019-10-03T16:43:22Z"
  }, {
    "id": 1,
    "msg": "Persistent exuding functionalities",
    "date": "2019-03-12T19:34:35Z"
  }, {
    "id": 1,
    "msg": "Persistent empowering framework",
    "date": "2019-03-18T08:45:14Z"
  }, {
    "id": 0,
    "msg": "Managed solution-oriented database",
    "date": "2019-09-26T14:52:55Z"
  }, {
    "id": 0,
    "msg": "Down-sized national firmware",
    "date": "2019-09-22T13:18:22Z"
  }, {
    "id": 0,
    "msg": "Re-contextualized discrete info-mediaries",
    "date": "2019-05-15T06:41:37Z"
  }, {
    "id": 1,
    "msg": "Reactive foreground implementation",
    "date": "2019-11-07T17:33:13Z"
  }, {
    "id": 1,
    "msg": "Down-sized explicit capability",
    "date": "2019-12-05T07:38:52Z"
  }, {
    "id": 0,
    "msg": "Public-key content-based toolset",
    "date": "2019-03-01T03:03:42Z"
  }, {
    "id": 1,
    "msg": "Seamless object-oriented projection",
    "date": "2019-08-03T02:11:31Z"
  }, {
    "id": 1,
    "msg": "Quality-focused neutral product",
    "date": "2019-04-05T03:08:36Z"
  }, {
    "id": 0,
    "msg": "Multi-channelled scalable framework",
    "date": "2019-08-21T13:38:18Z"
  }, {
    "id": 1,
    "msg": "Stand-alone eco-centric conglomeration",
    "date": "2019-03-27T05:20:39Z"
  }, {
    "id": 0,
    "msg": "Business-focused 6th generation array",
    "date": "2019-11-01T14:03:11Z"
  }, {
    "id": 1,
    "msg": "Robust next generation policy",
    "date": "2019-07-16T11:14:36Z"
  }, {
    "id": 0,
    "msg": "Secured user-facing orchestration",
    "date": "2019-07-30T00:53:12Z"
  }, {
    "id": 1,
    "msg": "Open-source logistical open architecture",
    "date": "2019-12-18T01:42:44Z"
  }, {
    "id": 1,
    "msg": "Vision-oriented full-range internet solution",
    "date": "2019-03-16T20:31:42Z"
  }, {
    "id": 1,
    "msg": "Inverse leading edge system engine",
    "date": "2019-08-14T05:03:36Z"
  }, {
    "id": 1,
    "msg": "Vision-oriented hybrid product",
    "date": "2019-04-13T10:49:29Z"
  }, {
    "id": 0,
    "msg": "Switchable systematic forecast",
    "date": "2019-11-21T11:43:13Z"
  }, {
    "id": 0,
    "msg": "Public-key secondary ability",
    "date": "2019-11-15T13:24:30Z"
  }, {
    "id": 0,
    "msg": "Upgradable directional projection",
    "date": "2019-03-21T14:34:07Z"
  }, {
    "id": 0,
    "msg": "Devolved tangible array",
    "date": "2019-11-08T23:05:38Z"
  }, {
    "id": 1,
    "msg": "Cross-group web-enabled utilisation",
    "date": "2019-11-27T22:29:01Z"
  }, {
    "id": 1,
    "msg": "Organized content-based firmware",
    "date": "2019-03-20T20:35:49Z"
  }, {
    "id": 0,
    "msg": "Down-sized interactive adapter",
    "date": "2019-12-04T12:07:38Z"
  }, {
    "id": 1,
    "msg": "Assimilated bandwidth-monitored system engine",
    "date": "2019-05-05T21:43:11Z"
  }, {
    "id": 0,
    "msg": "User-centric object-oriented array",
    "date": "2019-04-13T20:38:06Z"
  }, {
    "id": 0,
    "msg": "Assimilated intermediate attitude",
    "date": "2019-06-10T22:17:25Z"
  }, {
    "id": 1,
    "msg": "Focused optimal time-frame",
    "date": "2019-03-23T07:39:29Z"
  }, {
    "id": 1,
    "msg": "User-friendly bi-directional frame",
    "date": "2019-12-09T23:15:27Z"
  }, {
    "id": 0,
    "msg": "Reverse-engineered foreground methodology",
    "date": "2019-11-29T07:58:34Z"
  }, {
    "id": 1,
    "msg": "Exclusive executive service-desk",
    "date": "2019-04-29T09:07:47Z"
  }, {
    "id": 1,
    "msg": "Vision-oriented mobile neural-net",
    "date": "2019-04-19T12:24:50Z"
  }, {
    "id": 1,
    "msg": "Exclusive incremental service-desk",
    "date": "2019-03-03T17:08:46Z"
  }, {
    "id": 0,
    "msg": "Ameliorated secondary Graphical User Interface",
    "date": "2019-03-16T00:35:22Z"
  }, {
    "id": 1,
    "msg": "Implemented intermediate function",
    "date": "2020-01-18T13:47:45Z"
  }, {
    "id": 1,
    "msg": "Customer-focused dedicated projection",
    "date": "2019-10-19T03:10:52Z"
  }, {
    "id": 1,
    "msg": "Phased didactic protocol",
    "date": "2020-01-11T11:31:52Z"
  }, {
    "id": 1,
    "msg": "Optional mission-critical local area network",
    "date": "2019-12-22T01:19:41Z"
  }, {
    "id": 0,
    "msg": "Reverse-engineered asymmetric superstructure",
    "date": "2019-08-21T07:07:09Z"
  }, {
    "id": 0,
    "msg": "Streamlined tangible service-desk",
    "date": "2019-10-10T05:59:44Z"
  }, {
    "id": 0,
    "msg": "Fully-configurable scalable system engine",
    "date": "2019-11-21T11:47:01Z"
  }, {
    "id": 1,
    "msg": "Pre-emptive uniform forecast",
    "date": "2019-11-18T21:48:20Z"
  }, {
    "id": 1,
    "msg": "Digitized full-range service-desk",
    "date": "2019-07-08T17:38:25Z"
  }, {
    "id": 0,
    "msg": "Multi-layered bottom-line pricing structure",
    "date": "2019-07-29T01:26:20Z"
  }, {
    "id": 0,
    "msg": "Assimilated object-oriented info-mediaries",
    "date": "2019-09-29T22:35:04Z"
  }, {
    "id": 0,
    "msg": "Progressive bottom-line neural-net",
    "date": "2019-02-22T07:35:47Z"
  }, {
    "id": 0,
    "msg": "Extended transitional methodology",
    "date": "2019-04-16T23:00:28Z"
  }, {
    "id": 0,
    "msg": "Cross-group uniform forecast",
    "date": "2019-07-09T23:42:46Z"
  }, {
    "id": 0,
    "msg": "Quality-focused 6th generation task-force",
    "date": "2019-06-22T15:40:06Z"
  }, {
    "id": 1,
    "msg": "Reactive 5th generation definition",
    "date": "2019-05-26T18:22:10Z"
  }, {
    "id": 1,
    "msg": "Optimized high-level challenge",
    "date": "2019-09-16T13:25:00Z"
  }, {
    "id": 1,
    "msg": "Up-sized bandwidth-monitored capacity",
    "date": "2019-05-19T16:45:49Z"
  }];

  constructor() { }

  getAll() {
    return this.chats;
  }

  send(msg: string) {
    msg = msg.trim();

    if (!msg) { return; }

    this.chats.push({
      "id": 0,
      "msg": msg,
      "date": new Date().toDateString()
    })
  }
}
