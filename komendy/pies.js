module.exports = {
    name: 'pies',
    description: 'losowy pies',
    execute(message, args, Discord) {
        var pies = new Discord.MessageEmbed()
        .setTitle("HAU HAU 🐶🐶")
        .setColor("#ff364e")
        .setTimestamp()
        var random = Math.floor(Math.random() * 20) + 1
        if (random == 1) {
            pies
            .setImage('https://static.polityka.pl/_resource/res/path/22/99/229904bf-a6ef-4889-bcab-cd16647d25ed')
        }
        if (random == 2) {
            pies
            .setImage('https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20200317/SWIAT/200319192/AR/0/AR-200319192.jpg?imageversion=Artykul&lastModified=')
        }
        if (random == 3) {
            pies
            .setImage('https://naukawpolsce.pap.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/202007/36540394_36540427.jpg?itok=-AEn6ERm')
    }
    if (random == 4) {
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjqQ0CifnGu2YVidpEtCS7xaaej49BnW07yw&usqp=CAU')
    }
    if (random == 5){
        pies
        .setImage('https://media.wplm.pl/thumbs/6dd/NzIweDQ0Mi9jX2MvdV8xL2NjXzI4MDcxL3AvMjAyMC8wNC8yOS83ODUvNTc5LzZiNmJiNTJlYjY5YTQyYTI5MjhmYTBmNGUyMGEzOTg1LmpwZWc=.jpeg')
    }
    if (random == 6){
        pies
        .setImage('https://dzienniknaukowy.pl/assets/media/szpicminiaurowy.jpg')  
    }
    if (random == 7){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQXP7-g_bBhXRwM5AiHhM9kyrHfYj4Yi6Tt6Q6O_TV5g&usqp=CAU&ec=45704945')
    }
    if (random == 8){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXH9uryDHXmGZin0RTvKKi-r83W-j0-bTj9Q&usqp=CAU')
    }
    if (random == 9){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9mTT07v6Stv1Yp3fpvexy09zh-5_c3_VyGQ&usqp=CAU')
    }
    if(random == 10){
        pies
        .setImage('https://nowymarketing.pl/i/articles/24476_l2.jpg')
    }
    if(random == 11){
        pies
        .setImage('https://www.dworsierakow.pl/images/pakiety/twoj_pies.jpg')
    }
    if(random == 12){
        pies
        .setImage('https://zielonyogrodek.pl/i/images/7/4/4/d2FjPTkwMHgxLjQwMA==_src_27744-ogrod_dla_psa_fot._Alain_Audet_Pixabay.jpg')
    }
    if(random == 13){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPiXot99mqq_86J7MgGBSshkDFRA3zAxg2Tg&usqp=CAU')
    }
    if(random == 14){
        pies
        .setImage('https://vetexpert.eu/wp-content/uploads/2020/03/11_baner_1200x900_20200320_4.jpg')
    }
    if(random == 15){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM90R06UFSrRWiS3u6aIcdutmHxKd6-9ss4Q&usqp=CAU')
    }
    if(random == 16){
        pies
        .setImage('https://www.animalmed.pl/wp-content/uploads/2019/03/pies2.jpg')
    }
    if(random == 17){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8rYktdLjaDmUgiCmA0fYzuNpEvffDRg4Ysg&usqp=CAU')
    }
    if(random == 18){
        pies
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS31snYyKemvzvWUvoY3CeQ5kuhjz3aXvN7yw&usqp=CAU')
    }
    if(random == 19){
        pies
        .setImage('https://i2.wp.com/www.pies.pl/wp-content/uploads/nadpobudliwy-pies-jak-go-uspokoic.jpg?fit=1000%2C571&ssl=1')
    }
    if(random == 20){
        pies
        .setImage('https://i0.wp.com/www.pies.pl/wp-content/uploads/2019/03/jak-okreslic-wiek-psa.jpg?fit=1000%2C571&ssl=1')
    }
        message.channel.send(pies)
    }
}