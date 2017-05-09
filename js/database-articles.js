function init() {
  Tabletop.init( { key: '18gl1SOsOVk2RJaLnxXOcWYEJCi-cLQ04bYXyupNQgd8',
                   callback: database,
                   simpleSheet: true} )
}

function database(data, tabletop) {
  console.log(data);
  var id = $('.article ').attr('id')

  $('.article--img').attr('src', 'images/article-lg/' + data[id].img + '.jpg')

  $('.article--date').append(
    data[id].date
  )

  $('.article--title').append(
    data[id].headline
  )

  $('.article--copy').append(
    data[id].copy
  )

  $('.prev, .article-controls--prev a').attr('href', data[id].prevLink)
  $('.next, .article-controls--next a').attr('href', data[id].nextLink)

  $('.article-controls--prev a').append(
    data[id].previous
  )

  $('.article-controls--next a').append(
    data[id].next
  )




}

window.addEventListener('DOMContentLoaded', init)
