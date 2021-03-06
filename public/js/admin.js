$(function() {
  $(document).on('click', '.del', function(e) {
    var target = $(e.target);
    var id = target.data('id');
    var tr = $('.item-id-' + id);

    $.ajax({
        url: '/admin/list?id=' + id,
        type: 'DELETE'
      })
      .done(function(result) {
        if (result.success === 1) {
          if (tr.length > 0) {
            tr.remove();
          }
        }
      })
  })
})
