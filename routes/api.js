var express = require('express');
var router = express.Router();
var faker = require('faker');

/**
 * Articles
 */

router.get('/articles', function(req, res, next) {
  
    //fake article data
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"results":[{"id":21341149,"byline":"Jon Fingas","title":"Newspaper giants threaten Brave over its ad-swapping browser","slug":"newspaper-giants-attack-brave-browser","published":"2016-04-09T16:31:00-0400","created":"2016-04-09T10:06:45-0400","updated":"2016-04-09T11:04:08-0400","activated":"2016-04-09T16:31:00-0400","metadata":{"post-dek":"They claim that replacing native ads with others is a violation of copyright.","lede-image":"http:\/\/o.aolcdn.com\/hss\/storage\/midas\/d20f8c1fd2a70c23086b44039c7b67b2\/203628789\/brave-browser-2016-01-04-01.jpg","post-type":"article"}},{"id":21336938,"byline":"Engadget staff","title":"Mini review video: Our verdict on the iPhone SE in about a minute","slug":"mini-review-video-our-verdict-on-the-iphone-se-in-about-a-minut","published":"2016-04-09T15:00:00-0400","created":"2016-04-01T13:54:42-0400","updated":"2016-04-09T09:08:31-0400","activated":"2016-04-09T14:00:00-0400","metadata":{"post-dek":"A good deal, but can you handle going back to a 4-inch screen?","lede-image":"http:\/\/o.aolcdn.com\/hss\/storage\/midas\/bb07252ade69e3de6d91ed6cf46cd4f3\/203631268\/se-fb1.jpg","post-type":"video"}},{"id":21341042,"byline":"Timothy J. Seppala","title":"OS X update fixed &#039;simple&#039; bug that could leak your iMessages","slug":"el-capitan-imessage-javascript-bug","published":"2016-04-09T13:28:00-0400","created":"2016-04-09T01:27:34-0400","updated":"2016-04-09T09:20:25-0400","activated":"2016-04-09T01:13:00-0400","metadata":{"post-dek":"Clicking a JavaScript link sends attackers a copy of your entire chat history.","lede-image":"http:\/\/o.aolcdn.com\/hss\/storage\/midas\/caf3b02baf0d1e486a4cb5e9dec15544\/203663300\/OS%2BX%2BEl%2BCapitan%2BFullbleed.jpg","post-type":"article"}},{"id":21340954,"byline":"Roberto Baldwin","title":"Grabbing and going with BMW&#039;s ReachNow car share service","slug":"grabbing-and-going-with-bmws-reachnow-car-share-service","published":"2016-04-09T12:00:00-0400","created":"2016-04-08T17:52:56-0400","updated":"2016-04-08T23:49:43-0400","activated":"2016-04-09T12:00:00-0400","metadata":{"post-dek":"A few growing pains don&#039;t sour the experience of riding in style. ","lede-image":"http:\/\/o.aolcdn.com\/hss\/storage\/midas\/468872bc08ae643093c481ef215b005\/203662582\/0408_reachnow-20.jpg","post-type":"slideshow"}},{"id":21340231,"byline":"Andrew Tarantola","title":"ICYMI: Auto-transcribing Moleskines, meta-Rembrandts and more","slug":"icymi-auto-transcribing-moleskines-and-more","published":"2016-04-09T11:00:00-0400","created":"2016-04-07T17:27:37-0400","updated":"2016-04-09T12:51:47-0400","activated":"2016-04-09T11:00:00-0400","metadata":{"post-dek":"Plus that guy who modded his Game Boy to play classic NES titles.","lede-image":"http:\/\/pthumbnails.5min.com\/10392407\/519620306_c_895_503.jpg","post-type":"video"}}],"ids":[21341149,21336938,21341042,21340954,21340231],"metadata":[],"page":1,"page_size":5,"next_page_size":5,"total_results":176996,"total_pages":35400}));

});


/**
 * User Cards
 */

router.get('/users', function(req, res, next) {
    
    var arr = []

    for(var i = 0, max = 20; i < max; i++){
        arr.push(faker.helpers.createCard());
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(arr));

});

module.exports = router;
