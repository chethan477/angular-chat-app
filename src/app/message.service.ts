import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  chats: Message[] = [{
    "id": 1,
    "msg": "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-09-16T07:53:46Z"
  }, {
    "id": 2,
    "msg": "enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
    "fuid": 1,
    "tuid": 5,
    "date": "2019-06-11T19:57:10Z"
  }, {
    "id": 3,
    "msg": "id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
    "fuid": 4,
    "tuid": 4,
    "date": "2019-07-13T06:39:15Z"
  }, {
    "id": 4,
    "msg": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
    "fuid": 3,
    "tuid": 3,
    "date": "2019-11-11T13:39:59Z"
  }, {
    "id": 5,
    "msg": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
    "fuid": 5,
    "tuid": 1,
    "date": "2019-04-04T18:58:06Z"
  }, {
    "id": 6,
    "msg": "sit amet turpis elementum ligula vehicula consequat morbi a ipsum",
    "fuid": 0,
    "tuid": 3,
    "date": "2019-12-05T22:05:49Z"
  }, {
    "id": 7,
    "msg": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
    "fuid": 1,
    "tuid": 0,
    "date": "2019-09-06T04:56:02Z"
  }, {
    "id": 8,
    "msg": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
    "fuid": 3,
    "tuid": 5,
    "date": "2019-10-19T01:38:01Z"
  }, {
    "id": 9,
    "msg": "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
    "fuid": 3,
    "tuid": 2,
    "date": "2020-01-22T05:42:15Z"
  }, {
    "id": 10,
    "msg": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
    "fuid": 2,
    "tuid": 0,
    "date": "2019-08-16T17:54:23Z"
  }, {
    "id": 11,
    "msg": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
    "fuid": 5,
    "tuid": 5,
    "date": "2019-10-11T22:44:29Z"
  }, {
    "id": 12,
    "msg": "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
    "fuid": 0,
    "tuid": 2,
    "date": "2019-05-29T16:14:59Z"
  }, {
    "id": 13,
    "msg": "vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    "fuid": 4,
    "tuid": 4,
    "date": "2019-10-06T08:36:59Z"
  }, {
    "id": 14,
    "msg": "venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis",
    "fuid": 1,
    "tuid": 3,
    "date": "2019-05-07T09:25:07Z"
  }, {
    "id": 15,
    "msg": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-12-24T18:39:13Z"
  }, {
    "id": 16,
    "msg": "vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
    "fuid": 2,
    "tuid": 5,
    "date": "2019-08-23T15:13:23Z"
  }, {
    "id": 17,
    "msg": "leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque",
    "fuid": 0,
    "tuid": 4,
    "date": "2019-05-07T15:17:22Z"
  }, {
    "id": 18,
    "msg": "mi integer ac neque duis bibendum morbi non quam nec dui luctus",
    "fuid": 2,
    "tuid": 4,
    "date": "2019-11-27T09:56:01Z"
  }, {
    "id": 19,
    "msg": "lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
    "fuid": 2,
    "tuid": 0,
    "date": "2019-11-02T04:08:22Z"
  }, {
    "id": 20,
    "msg": "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    "fuid": 0,
    "tuid": 3,
    "date": "2019-11-08T19:29:24Z"
  }, {
    "id": 21,
    "msg": "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
    "fuid": 4,
    "tuid": 2,
    "date": "2019-03-23T23:08:30Z"
  }, {
    "id": 22,
    "msg": "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
    "fuid": 3,
    "tuid": 0,
    "date": "2019-06-11T03:01:55Z"
  }, {
    "id": 23,
    "msg": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "fuid": 1,
    "tuid": 4,
    "date": "2019-05-08T20:34:42Z"
  }, {
    "id": 24,
    "msg": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
    "fuid": 0,
    "tuid": 5,
    "date": "2019-11-10T03:49:27Z"
  }, {
    "id": 25,
    "msg": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
    "fuid": 5,
    "tuid": 2,
    "date": "2019-06-18T23:51:29Z"
  }, {
    "id": 26,
    "msg": "tempus vivamus in felis eu sapien cursus vestibulum proin eu",
    "fuid": 5,
    "tuid": 0,
    "date": "2019-10-02T21:47:58Z"
  }, {
    "id": 27,
    "msg": "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-04-30T20:35:16Z"
  }, {
    "id": 28,
    "msg": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper",
    "fuid": 0,
    "tuid": 2,
    "date": "2019-03-02T17:13:51Z"
  }, {
    "id": 29,
    "msg": "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
    "fuid": 2,
    "tuid": 1,
    "date": "2019-05-11T19:23:58Z"
  }, {
    "id": 30,
    "msg": "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
    "fuid": 5,
    "tuid": 2,
    "date": "2019-06-05T01:35:41Z"
  }, {
    "id": 31,
    "msg": "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-04-19T04:20:51Z"
  }, {
    "id": 32,
    "msg": "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
    "fuid": 5,
    "tuid": 4,
    "date": "2020-02-16T21:24:16Z"
  }, {
    "id": 33,
    "msg": "pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",
    "fuid": 2,
    "tuid": 0,
    "date": "2019-09-11T19:26:19Z"
  }, {
    "id": 34,
    "msg": "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-04-25T04:24:55Z"
  }, {
    "id": 35,
    "msg": "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
    "fuid": 4,
    "tuid": 0,
    "date": "2020-01-27T06:13:19Z"
  }, {
    "id": 36,
    "msg": "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
    "fuid": 0,
    "tuid": 1,
    "date": "2019-10-26T09:14:34Z"
  }, {
    "id": 37,
    "msg": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin",
    "fuid": 4,
    "tuid": 4,
    "date": "2019-10-06T15:51:20Z"
  }, {
    "id": 38,
    "msg": "sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
    "fuid": 2,
    "tuid": 2,
    "date": "2019-07-16T06:39:27Z"
  }, {
    "id": 39,
    "msg": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
    "fuid": 5,
    "tuid": 5,
    "date": "2019-12-20T07:33:53Z"
  }, {
    "id": 40,
    "msg": "mi in porttitor pede justo eu massa donec dapibus duis",
    "fuid": 3,
    "tuid": 0,
    "date": "2019-05-20T09:07:43Z"
  }, {
    "id": 41,
    "msg": "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
    "fuid": 1,
    "tuid": 3,
    "date": "2019-04-07T07:43:27Z"
  }, {
    "id": 42,
    "msg": "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
    "fuid": 0,
    "tuid": 1,
    "date": "2019-05-26T00:59:46Z"
  }, {
    "id": 43,
    "msg": "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
    "fuid": 1,
    "tuid": 1,
    "date": "2019-09-15T12:22:57Z"
  }, {
    "id": 44,
    "msg": "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
    "fuid": 0,
    "tuid": 4,
    "date": "2019-09-07T07:30:41Z"
  }, {
    "id": 45,
    "msg": "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
    "fuid": 3,
    "tuid": 4,
    "date": "2019-08-23T10:30:58Z"
  }, {
    "id": 46,
    "msg": "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    "fuid": 1,
    "tuid": 2,
    "date": "2019-08-27T03:06:37Z"
  }, {
    "id": 47,
    "msg": "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
    "fuid": 4,
    "tuid": 0,
    "date": "2020-02-10T01:34:47Z"
  }, {
    "id": 48,
    "msg": "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
    "fuid": 3,
    "tuid": 3,
    "date": "2020-02-14T18:50:48Z"
  }, {
    "id": 49,
    "msg": "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
    "fuid": 2,
    "tuid": 2,
    "date": "2019-07-30T10:47:43Z"
  }, {
    "id": 50,
    "msg": "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-10-11T03:59:06Z"
  }, {
    "id": 51,
    "msg": "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
    "fuid": 0,
    "tuid": 0,
    "date": "2019-11-14T22:58:47Z"
  }, {
    "id": 52,
    "msg": "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
    "fuid": 3,
    "tuid": 3,
    "date": "2019-07-18T22:00:38Z"
  }, {
    "id": 53,
    "msg": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio",
    "fuid": 0,
    "tuid": 5,
    "date": "2019-10-21T03:35:15Z"
  }, {
    "id": 54,
    "msg": "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
    "fuid": 1,
    "tuid": 2,
    "date": "2019-07-20T12:03:21Z"
  }, {
    "id": 55,
    "msg": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
    "fuid": 4,
    "tuid": 4,
    "date": "2019-07-02T16:58:14Z"
  }, {
    "id": 56,
    "msg": "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla",
    "fuid": 1,
    "tuid": 5,
    "date": "2019-12-17T10:24:06Z"
  }, {
    "id": 57,
    "msg": "turpis a pede posuere nonummy integer non velit donec diam",
    "fuid": 0,
    "tuid": 5,
    "date": "2019-08-29T20:41:56Z"
  }, {
    "id": 58,
    "msg": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
    "fuid": 3,
    "tuid": 5,
    "date": "2019-08-04T23:10:21Z"
  }, {
    "id": 59,
    "msg": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
    "fuid": 5,
    "tuid": 3,
    "date": "2020-02-02T19:27:18Z"
  }, {
    "id": 60,
    "msg": "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    "fuid": 2,
    "tuid": 4,
    "date": "2019-06-07T20:10:46Z"
  }, {
    "id": 61,
    "msg": "sagittis dui vel nisl duis ac nibh fusce lacus purus",
    "fuid": 4,
    "tuid": 5,
    "date": "2019-04-08T11:33:03Z"
  }, {
    "id": 62,
    "msg": "eget massa tempor convallis nulla neque libero convallis eget eleifend",
    "fuid": 0,
    "tuid": 1,
    "date": "2019-09-11T14:47:50Z"
  }, {
    "id": 63,
    "msg": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
    "fuid": 4,
    "tuid": 5,
    "date": "2019-11-20T20:49:35Z"
  }, {
    "id": 64,
    "msg": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
    "fuid": 2,
    "tuid": 1,
    "date": "2019-02-27T18:43:51Z"
  }, {
    "id": 65,
    "msg": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
    "fuid": 5,
    "tuid": 3,
    "date": "2020-01-22T02:05:10Z"
  }, {
    "id": 66,
    "msg": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
    "fuid": 5,
    "tuid": 3,
    "date": "2020-01-13T04:49:52Z"
  }, {
    "id": 67,
    "msg": "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
    "fuid": 2,
    "tuid": 5,
    "date": "2020-01-22T22:51:48Z"
  }, {
    "id": 68,
    "msg": "duis at velit eu est congue elementum in hac habitasse platea dictumst",
    "fuid": 0,
    "tuid": 0,
    "date": "2019-08-10T10:58:45Z"
  }, {
    "id": 69,
    "msg": "sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
    "fuid": 2,
    "tuid": 0,
    "date": "2019-04-04T09:50:11Z"
  }, {
    "id": 70,
    "msg": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
    "fuid": 0,
    "tuid": 5,
    "date": "2019-03-17T08:09:37Z"
  }, {
    "id": 71,
    "msg": "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu",
    "fuid": 1,
    "tuid": 2,
    "date": "2019-07-09T02:06:26Z"
  }, {
    "id": 72,
    "msg": "tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
    "fuid": 4,
    "tuid": 1,
    "date": "2019-08-24T22:09:22Z"
  }, {
    "id": 73,
    "msg": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
    "fuid": 1,
    "tuid": 5,
    "date": "2019-09-24T22:32:43Z"
  }, {
    "id": 74,
    "msg": "risus praesent lectus vestibulum quam sapien varius ut blandit non",
    "fuid": 4,
    "tuid": 5,
    "date": "2019-08-30T00:25:54Z"
  }, {
    "id": 75,
    "msg": "in porttitor pede justo eu massa donec dapibus duis at velit eu est",
    "fuid": 3,
    "tuid": 0,
    "date": "2020-01-04T19:59:48Z"
  }, {
    "id": 76,
    "msg": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
    "fuid": 0,
    "tuid": 0,
    "date": "2019-07-11T05:02:23Z"
  }, {
    "id": 77,
    "msg": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
    "fuid": 1,
    "tuid": 5,
    "date": "2019-09-22T17:34:46Z"
  }, {
    "id": 78,
    "msg": "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere",
    "fuid": 1,
    "tuid": 1,
    "date": "2019-10-03T13:00:16Z"
  }, {
    "id": 79,
    "msg": "porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum",
    "fuid": 4,
    "tuid": 1,
    "date": "2019-06-16T13:42:19Z"
  }, {
    "id": 80,
    "msg": "in ante vestibulum ante ipsum primis in faucibus orci luctus",
    "fuid": 3,
    "tuid": 2,
    "date": "2019-11-21T02:24:04Z"
  }, {
    "id": 81,
    "msg": "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
    "fuid": 3,
    "tuid": 0,
    "date": "2019-04-28T23:39:08Z"
  }, {
    "id": 82,
    "msg": "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
    "fuid": 4,
    "tuid": 1,
    "date": "2019-07-04T13:16:38Z"
  }, {
    "id": 83,
    "msg": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
    "fuid": 4,
    "tuid": 4,
    "date": "2020-02-01T19:00:48Z"
  }, {
    "id": 84,
    "msg": "ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
    "fuid": 0,
    "tuid": 3,
    "date": "2019-06-25T11:29:18Z"
  }, {
    "id": 85,
    "msg": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    "fuid": 0,
    "tuid": 4,
    "date": "2019-09-20T15:12:51Z"
  }, {
    "id": 86,
    "msg": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "fuid": 0,
    "tuid": 4,
    "date": "2019-03-06T14:06:46Z"
  }, {
    "id": 87,
    "msg": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
    "fuid": 0,
    "tuid": 5,
    "date": "2019-08-14T04:11:34Z"
  }, {
    "id": 88,
    "msg": "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
    "fuid": 4,
    "tuid": 1,
    "date": "2019-08-08T01:31:19Z"
  }, {
    "id": 89,
    "msg": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
    "fuid": 4,
    "tuid": 4,
    "date": "2019-09-08T22:29:41Z"
  }, {
    "id": 90,
    "msg": "massa donec dapibus duis at velit eu est congue elementum in hac habitasse",
    "fuid": 0,
    "tuid": 0,
    "date": "2019-05-25T21:52:32Z"
  }, {
    "id": 91,
    "msg": "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
    "fuid": 5,
    "tuid": 5,
    "date": "2019-07-02T01:31:46Z"
  }, {
    "id": 92,
    "msg": "vel sem sed sagittis nam congue risus semper porta volutpat",
    "fuid": 2,
    "tuid": 5,
    "date": "2019-06-23T05:35:44Z"
  }, {
    "id": 93,
    "msg": "interdum mauris non ligula pellentesque ultrices phasellus id sapien in",
    "fuid": 0,
    "tuid": 4,
    "date": "2019-04-10T15:08:24Z"
  }, {
    "id": 94,
    "msg": "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
    "fuid": 0,
    "tuid": 3,
    "date": "2019-08-17T08:43:06Z"
  }, {
    "id": 95,
    "msg": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
    "fuid": 2,
    "tuid": 5,
    "date": "2019-03-28T01:51:04Z"
  }, {
    "id": 96,
    "msg": "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
    "fuid": 2,
    "tuid": 1,
    "date": "2019-09-30T02:33:09Z"
  }, {
    "id": 97,
    "msg": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
    "fuid": 2,
    "tuid": 4,
    "date": "2019-03-25T22:50:32Z"
  }, {
    "id": 98,
    "msg": "lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    "fuid": 4,
    "tuid": 3,
    "date": "2019-10-06T05:58:30Z"
  }, {
    "id": 99,
    "msg": "morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
    "fuid": 1,
    "tuid": 3,
    "date": "2019-10-30T11:02:59Z"
  }, {
    "id": 100,
    "msg": "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate",
    "fuid": 2,
    "tuid": 1,
    "date": "2019-11-28T13:53:41Z"
  }];

  chats$ = new BehaviorSubject([]);
  newMessage$ = new Subject();

  myUID = null;
  selectedUID = null;

  constructor() { }

  getAll() { return this.chats; }

  getAll$ = new Observable<Message[]>(observer => observer.next(this.chats.filter(i => i.fuid === 0 || i.tuid === 1)));

  setMyUID(uid) { this.myUID = uid; }

  changeChatWindow(uid) {
    if (this.selectedUID !== uid) {
      this.selectedUID = uid;
      this.chats$.next(this.chats.filter(i => (i.fuid === this.myUID && i.tuid === uid) || (i.fuid === uid && i.tuid === this.myUID)));
    }
  }

  pushNewMessage(message) {
    this.newMessage$.next(message);
  }

  send(msg: string) {
    msg = msg.trim();

    if (!msg) { return; }

    const message: Message = {
      id: new Date().getMilliseconds(),
      fuid: this.myUID,
      tuid: this.selectedUID,
      msg: msg,
      date: new Date().toDateString(),
    }

    this.chats.push(message);
    this.pushNewMessage(message);
  }

}
