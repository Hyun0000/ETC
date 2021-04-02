function nav_listmane() {
    var nav_list = ['Front-End', 'Back-End'];
    var i = 0;
    while (i < nav_list.length) {
        document.write('<li>' + nav_list[i] + '</li>');
        i = i + 1;
    }
}

