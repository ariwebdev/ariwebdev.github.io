function init() {
  Tabletop.init( { key: '18gl1SOsOVk2RJaLnxXOcWYEJCi-cLQ04bYXyupNQgd8',
                   callback: database,
                   simpleSheet: true } )
}

function database(data, tabletop) {
  console.log(data);
  var cDiv = '</div>',
        oHref = '<a href="'
        cHref = '"</a>'

  for (var i = 0; i < data.length; i++) {
    $('.l-main-content').append(
      // add card css & opening a href tag
      '<div class="card">' + oHref
      // add link to article
      + data[i].link
      // add img class
      + '"> ' + '<img class="card--img" src="'
      // add image to img src & close out href tag
      + 'images/article-sm/' + data[i].img + '.jpg"></a>'
      // add card desc css
      + '<div class="card--desc">'
      // add card date
      + '<div class="card--date">'
      // add date data
      + data[i].date
      // add card date closing tag
      + cDiv
      // add href opening tag
      + oHref
      // add link
      + data[i].link
      // add closing href tag
      + '">'
      // add card title css
      + '<h2 class="card--title">'
      // add card title data
      + data[i].headline
      // add card title css closing tag
      +  '</h2>'
      // add closing tag for title
      + '</a>'
      // add card copy op tag
      + '<p class="card--copy">'
      // add preview text data
      + data[i].preview
      // add closing card copy tag
      + '</p>'
      // add read more link css
      + '<a class="card--link" href="'
      // add read more url
      + data[i].link
      // add closing bracket for link
      + '">'
      // add Read More text
      + 'Read More'
      // add closing tag for read more link
      + '</a>'
      // add card desc closing tag
      + cDiv
      // add card css closing div
      + cDiv
    )
}
}

window.addEventListener('DOMContentLoaded', init)
