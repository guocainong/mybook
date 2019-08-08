new BScroll('#sidebar-scroll',{
    click: true
});
var detailScroll = new BScroll('#shop-scroll',{
    click: true
});
var $ = function(id) {
    return document.getElementById(id);
}

var sidebarList = $('sidebar-list').children;
var list = Array.prototype.slice.call(sidebarList);
var shopList = $('shop-list').children;
var sList = Array.prototype.slice.call(shopList);
var offsetTopArr = [];
for(var i = 0; i < sList.length; i++) {
    offsetTopArr.push(sList[i].offsetTop);
}
list.forEach(function(item, index, arr){
    item.onclick = function() {
        if(-offsetTopArr[index] >　detailScroll.maxScrollY)　{
            detailScroll.scrollTo(0, -offsetTopArr[index], 800);
        }
        else {
            detailScroll.scrollTo(0, detailScroll.maxScrollY, 800);
        }
        for (var j = 0; j < sidebarList.length; j++) {
            sidebarList[j].className = '';
        }
        this.className = 'active';        
    }
});