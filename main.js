


$(document).ready(function () {


    var API_KEY="AIzaSyDShjlAZzAf6MybSl2HfvpId_PF_YvxZJA"
    var video=''
    
        
    $("#form").submit(function(event){
        event.preventDefault()
        //The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

        var search = $("#search").val()

        videoSearch(API_KEY,search,100)
    })

    function videoSearch(key,search,maxResults){

        


        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key +"&type=video&part=snippet&maxResults=" + maxResults + "&q=" +search,function(data){
           console.log(data) 
           $("#videos").empty()

           for( let i=0;i<=5;i++){
            var element = data.items[i];
            console.log(element);
            video = `
               <iframe width="400" height="315"  border="50" frameBorder="50" src="http://www.youtube.com/embed/${element.id.videoId}" frameborder="0" allowfullscreen></iframe>

               `;
               
               $("#videos").append(video)
                }




        //    data.items.forEach(item => {
        //        video = `
        //        <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>

        //        `;
               
        //        $("#videos").append(video)
              
               
        //    });
        document.getElementById("page1").onclick = function() {myFunction(0,5)};
        document.getElementById("page2").onclick = function() {myFunction(6,11)};
        document.getElementById("page3").onclick = function() {myFunction(12,17)};
        document.getElementById("page4").onclick = function() {myFunction(18,23)};
        document.getElementById("page5").onclick = function() {myFunction(24,29)};
        document.getElementById("page6").onclick = function() {myFunction(30,35)};
function myFunction(n,m) {
    $("#videos").empty()
    for( let i=n;i<=m;i++){
        var element = data.items[i];
        console.log(element);
        video = `
           <iframe width="400" height="315"  border="50" frameBorder="50" src="http://www.youtube.com/embed/${element.id.videoId}" frameborder="0" allowfullscreen></iframe>

           `;
           
           $("#videos").append(video)
            }
  
}







           
    

           
        })

    }

})



