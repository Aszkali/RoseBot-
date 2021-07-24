module.exports = {
    name: 'kot',
    description: 'losowy kot',
    execute(message, args, Discord) {
        var kot = new Discord.MessageEmbed()
        .setTitle("MEOW 🐱🐱")
        .setColor("#ff364e")
        .setTimestamp()
        var random1 = Math.floor(Math.random() * 20) + 1
    if(random1 == 1){
        kot
        .setImage('https://rikoland.pl/data/include/img/news/1594756840.jpg')
    }
    if(random1 == 2){
        kot
        .setImage('https://r.dcs.redcdn.pl/http/o2/redefine/cp/wk/wkh4c1uo7ngkpyjw4wdp5vbw3bws7nax.jpg')
    }
    if(random1 == 3){
        kot
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs2CRU8eJSCWFQw_eeKwVTW-kGJE8raH7_Lg&usqp=CAU')
    }
    if(random1 == 4){
        kot
        .setImage('https://lubelski.pl/wp-content/uploads/2019/12/kot-2.jpg')
    }
    if(random1 == 5){
        kot
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zg2hZjbtCAqxDurh7XJunDjqEWe4S17GHw&usqp=CAU')
    }
    if(random1 == 6){
        kot 
        .setImage('https://johndog.pl/wp-content/uploads/2019/03/KW_11_W_TRESCI_803x503_08.jpg')
    }
    if(random1 == 7){
        kot
        .setImage('https://i.iplsc.com/zdj-ilustracyjne/0009ZL30IEIFID99-C125-F4.jpg')
    }
    if(random1 == 8){
        kot
        .setImage('https://petportal.pl/wp-content/uploads/2020/05/Po-czym-poznac%CC%81-z%CC%87e-kot-umiera-Odpowiadamy.jpg')
    }
    if(random1 == 9){
        kot
        .setImage('https://i.iplsc.com/kot-na-dworze-jak-zapewnic-mu-bezpieczenstwo/0005LTV0C99JX3O3-C122-F4.jpg')
    }
    if(random1 == 10){
        kot
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_2zr653NiE-T3EK0XcatPoeoMkn2BBCjGJjAbmcuYsw&usqp=CAU&ec=45704945')
    }
    if(random1 == 11){
        kot
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNnkjZjMn0un8ztZM9YpAH6naOF-mO49nz9Q&usqp=CAU')
    }
    if(random1 == 12){
        kot
        .setImage('https://okocie.pl/wp-content/uploads/2018/02/Fotolia_100121495_Subscription_Monthly_M-e1517926710922.jpg')
    }
    if(random1 == 13){
        kot
        .setImage('https://cdn.natemat.pl/5c7393b14591a01cfda762c345d3b576,1003,0,0,0.jpg')
    }
    if(random1 == 14){
        kot
        .setImage('https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_640/https://apetete.pl/blog/wp-content/uploads/2019/04/kocimi%C4%99tka-kot.jpg')
    }
    if(random1 == 15){
        kot
        .setImage('https://www.telekarma.pl/userfiles/images/aktualnosci/zdj%C4%99cia%20do%20aktualno%C5%9Bci/dlaczego-kot-lysieje(1).jpg')
    }
    if(random1 == 16){
        kot
        .setImage('https://bi.im-g.pl/im/22/24/18/z25316898V,kot.jpg')
    }
    if(random1 == 17){
        kot
        .setImage('https://s1.tvp.pl/images2/a/1/f/uid_a1f63cf69e30bd93d5acde6fc52f11d81552908892230_width_960_play_0_pos_0_gs_0_height_540.jpg')
    }
    if(random1 == 17){
        kot
        .setImage('https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/23/kot-dachowiec.jpg')
    }
    if(random1 == 18){
        kot
        .setImage('https://www.werandacountry.pl/cache/832-555/bfe41a533e4ae75fe529cc4ccb6c5a63/17353_151722637259.jpg')
    }
    if(random1 == 19){
        kot
        .setImage('https://bezpiecznarodzina.pl/userdata/public/assets/Blog/maly-kot-syjamski.jpg')
    }
    if(random1 == 20){
        kot
        .setImage('https://i.wpimg.pl/O/644x423/d.wpimg.pl/1145378141-1065712254/kot.jpg')
    }
    message.channel.send(kot)
    }
}