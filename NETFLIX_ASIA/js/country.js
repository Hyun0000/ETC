function genrename() {
    var genre = ['ACTION', 'SF', 'COMEDY', 'MUSICAL', 'ANIMATION', 'HORROR', 'DOCUMENTARY'];
    var i = 0;
    while (i < genre.length) {
        document.write('<li><span>' + genre[i] + '</li></span>');
        i = i + 1;
    }
}