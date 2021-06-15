var push = require('web-push')

let vapidKeys =
{
    publicKey:
        'BICpQdLi1tF-JQsLNqiv5DjOrGMX-3ErbM3tNfpwwjyaP436pQBoSinVWR3p7d4QJqJUB3-8LI0T3uWeDhdGvoE',
    privateKey: 'IFaiXH_FSUriBY2kMaEjg9xeW_usnWtzN249XZ8KIos'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub ={}
push.sendNotification(sub, 'teste message')
