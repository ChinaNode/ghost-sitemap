var sm = require('sitemap')
    , Post = require('./models/post').Post
    , config = require('../../config.js')
    , host = config.production.url || config.development.url
    , when = require('when');

/*
* 绑定路由
*/
module.exports = function(server){

    server.get('/sitemap.xml', function(req, res){
        var urls = ['/'];

        // 发送响应xml
        function response(xml){
            res.header('Content-Type', 'application/xml');
            res.send(xml)
        }

        // 查询model
        Post.findAll({columns: ['id', 'slug']}).then(function(posts){
            
            urls = urls.concat(posts.models.map(function(p){
                return '/' + p.attributes.slug
            }));
            createSitemap(urls, response);

        }).otherwise(function(err){
            createSitemap(urls, response);
        });
    });

}


/*
* sitemap创建方法
*/
function createSitemap(urls, cbk){
    var sitemap = sm.createSitemap ({
        hostname: host,
        cacheTime: 600000,
        urls: urls
    });
    sitemap.toXML( function (xml) {
        cbk(xml);
    });
}