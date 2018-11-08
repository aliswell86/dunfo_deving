
var express = require("express");
var request = require("request");
var qs = require("querystring");
var router = express.Router();
var header_txt = "관리자 - 던포";
var header_description = "던포 - Dungeon&Fighter Info";

router.get("/", function(req, res) {
  res.render("admin/admin",{title:header_txt,description:header_description});
});

router.post("/gcitem", function(req, res) {
  var x = 0;
  var inItemNm = req.body.inItemNm;
  console.log("[1]inItemNm : " + inItemNm);
  var inItemNmAry = inItemNm.split("\n");

  for(var i=0;i<inItemNmAry.length;i++) {
    console.log("[2]inItemNm : " + inItemNmAry[i]);
    setTimeout(getApiList,x,inItemNmAry[i]);
    x+=150;
  }

  res.json([]);
});

module.exports = router;

var getApiList = function(inItemNm) {
  var result = "";
  var options = {
    url:"https://api.neople.co.kr/df/items?apikey=vZmjeyzzdCx4opNjt4gus3jVE8uTC6Dq&itemName="+qs.escape(inItemNm)
    //encoding: "binary"
  };

  request(options, function(err,res,html) {
    console.log("URL : " + options.url);
    console.log("html : " + html);
    result = html;
  }).on('complete', function() {
    // console.log("result : " + result);
  });
};
