$(function () {
   $('.collapse').on('shown.bs.collapse', function () {
       $(this).prev().find('.fa').removeClass().addClass('fas fa-minus-circle')
   });

 $('.form-sel').select2(
     {
         minimumResultsForSearch: Infinity
     }
 );



});

