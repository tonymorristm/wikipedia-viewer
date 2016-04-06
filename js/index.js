$(function(){  // document ready function
	
  function getWikiJson(){
 
    $('#form').submit(function(event){
      event.preventDefault(); //will keep cursor in search box after clear
    var searchTerm = $('#search').val(); // stores the value of searched term
    $('#search').val(null); // sets the value of search box back to original state, waiting for term
      $('.results-box').empty(); // clears results

    var url = "https://en.wikipedia.org/w/api.php?  action=query&format=json&prop=&list=search&srsearch=" + searchTerm + "&srprop=snippet&formatversion=latest&callback=?"
  
    $.ajax({
      dataType: 'jsonp',
      url: url,
        success: function(data){
      
        var dataReturned = data.query.search;
      
        $.each(dataReturned, function(index, value){
          
        $('.results-box').append('<div class="search-results"><div class="title">' + '<a href="https://en.wikipedia.org/wiki/' + value.title + '" target="_blank">' + value.title + '</a>' + '</div>' + '<div class="snippet">'+ value.snippet +'</div>' + '</br>' + '</div>');
     
          $(".search-results").hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "white");
          }); // .search-results hover function
     
        }); // .each function
          
        } // success: function
    
    }); // ajax function  
  

  }); // #form .submit function
    
  } // getWikiJson
  
  getWikiJson();
  
});  // document ready function