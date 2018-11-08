card = function() {

  var callback_getApiCardInfo = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;

  };

  return {
    getApiCardInfo : function() {
      var url = "/admin/gcitem";
      var data = {};
      data.inItemNm = $("#inCardNm").val();
      myajax.ajaxSubmit(url,data,callback_getApiCardInfo);
    }
  };
}();
