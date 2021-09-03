var Body = {
    backcolor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    },
    fontcolor : function(color) {
        document.querySelector('body').style.color = color;
    }
}
 var link = {
    listcolor : function(color) {
        var lists = document.querySelectorAll('a');
        var i = 0;
        while (i < lists.length) {
            lists[i].style.color = color;
            i = i + 1;
        }
    }
 }

function handler(self) {
    var color = document.querySelector('body');
    if (self.value === 'CAT') {
    Body.backcolor('#FFFC00');
    Body.fontcolor('green');
    self.value = 'DOG';
    link.listcolor('green');
} else {
    Body.backcolor('#1DA1F2');
    Body.fontcolor('black');
    self.value = 'CAT';
    link.listcolor('black');
    }
 }

var menus = {
    navmenu : function() {
var menu = ['APPLE', 'KIWI', 'GRAPE','CHERRY'];
var i = 0;
while (i < menu.length) {
    document.write('<li>'+menu[i]+'</li>');
    i = i + 1;
        }
    }
}