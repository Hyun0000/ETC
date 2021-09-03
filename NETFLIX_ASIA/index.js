function countryname() {
    var country = ['KOREA', 'MYANMAR', 'JAPAN', 'CAMBODIA', 'VIETNAM', 'INDIA', 'SINGAPORE', 'TURKEY', 'CHINA', 'INDONESIA', 'THAILAND', 'IRAN'];
    var i = 0;
    while (i < country.length) {
        document.write('<div><a href="' + country[i] + '.html">' + country[i] + '</div></a>');
        i = i + 1;
    }
}