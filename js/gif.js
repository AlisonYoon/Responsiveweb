// JavaScript Document


  $(document).ready(function(){

    var $mainImage = $('#gifdefault'),
        originalImageSrc = $mainImage.attr('src'); // originalImageSrc = $mainImage.attr('src');

    $('p')
        .on('mouseover', function() {
            var newImageSrc = 'images/' + $(this).attr('id') + '.gif';
            $mainImage.attr('src',newImageSrc); // $mainImage.attr('src', newImageSrc);
        })
        .on('mouseout', function() {
            $mainImage.attr('src',originalImageSrc); // $mainImage.attr('src', originalImageSrc);
        });

   });
