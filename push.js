var push = require('web-push')

let vapidKeys =
{
    publicKey:
        'BICpQdLi1tF-JQsLNqiv5DjOrGMX-3ErbM3tNfpwwjyaP436pQBoSinVWR3p7d4QJqJUB3-8LI0T3uWeDhdGvoE',
    privateKey: 'IFaiXH_FSUriBY2kMaEjg9xeW_usnWtzN249XZ8KIos'
}

push.setVapidDetails('mailto:test@code.co.uk', 
vapidKeys.publicKey,
 vapidKeys.privateKey
 )

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/d2r0-DVpK_Q:APA91bHqlop8t2UXz5zx0s71cfW7HuTA0QcLqzMfDdyMDwzZPeK8U0YxmuNLCYxFjEsulmw9v26tLoXwAfZui2Mzqv6DK9_tOyl8tW46yxJv6dqXaCuv9_qGIFxug0TH_U8_tF4QxYmw", "expirationTime": null, "keys": { "p256dh": "BIEuBC7mguIBLmrpeRq7mARpc4dZQaCIepvnxVxoxoPtlhT1zKGyk4ncvy8UlwM8qk8FyudNjdsaLjEZZHEMFVk", "auth": "Mh3ymt9wL3DDJuL-vqg47g" } }
push.sendNotification(sub, 'teste message')



