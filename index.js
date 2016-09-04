function IsPC()  
{  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
}      

$(function () {
  var first_selected = true;
  var selected_item,selected_pillar;

  function onclickEvent() {
    if (first_selected) {

      // 新一次点击
      $($(this).find('.item')[0]).addClass('selected');
      this.selected = true;
      first_selected = false;
      selected_item = $($(this).find('.item')[0]);
      selected_pillar = $(this);

    } else {

      selected_item.removeClass('selected');
      // 第二次点击
      if (!this.selected) {

        // 新的柱子
        $(this).find('.wrap').prepend(selected_item);

      }

      $('.pillar').each(function () {
        this.selected = false;
      });
      first_selected = true;

    }
  }

  if (IsPC()) {
    $('.pillar').bind("click", onclickEvent);
  } else {
    $('.pillar').bind("touchstart", onclickEvent);
  }
  
});