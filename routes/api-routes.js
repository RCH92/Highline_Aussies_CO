let fs = require('fs');
module.exports = function(app){

    app.get('/api/:dog', function(req, res){
        let currentDog = req.params.dog;
        var folderPath = './public/images/';
        console.log(req.params.dog);
        switch (currentDog) {
            case 'allie':
                folderPath += 'allie/allie_slider';
            break;
            case 'crush':
                folderPath += 'crush/crush_slider';
            break;
            case 'dela':
                folderPath += 'dela/dela_slider';
            break;
            case 'shimmer':
                folderPath += 'shimmer/shimmer_slider';
            break;
            case 'lulu':
                folderPath += 'lulu/lulu_slider';
            break;
            case 'deacon':
                folderPath += 'bred_by/deacon/deacon_slider';
                break;
            case 'stout':
                folderPath += 'bred_by/stout/stout_slider';
            break;
            case 'wyatt':
                folderPath += 'bred_by/wyatt/wyatt_slider';
            break;
            case 'nike':
                folderPath += 'bred_by/nike/nike_slider';
            break;
            case 'bacio':
                folderPath += 'bred_by/bacio/bacio_slider';
            break;
            case 'bogart':
                folderPath += 'bred_by/bogart/bogart_slider';
            break;
            case 'taylor':
                folderPath += 'bred_by/taylor/taylor_slider';
            break;
            case 'parker':
                folderPath += 'bred_by/parker/parker_slider';
            break;
            case 'layla':
                folderPath += 'bred_by/layla/layla_slider';
            break;
            case 'zeus':
                folderPath += 'gallery/zeus';
            break;

            

        }
        makeJson(folderPath);
        function makeJson(path){
            var files = fs.readdirSync(path);
            var imgPath = "/public" + folderPath.slice(1) + '/';

           var finalPaths = files.map(img =>{
                return imgPath + img;
            });
            res.send(finalPaths);
        }
        
        
    });

    //other routes..
}