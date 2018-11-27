function redirectPage(){
    if(required){
        window.location = "https://web-project-amirahkabir.c9users.io/pages/dashboard/index.html";
    }
}


//Admin makes new post 

var newpost = {title:"", content:""};
            
$('#submit').click(function(event){
    newpost.title = $('#title').val();
    newpost.content = $('#content').val();
    $.ajax({
        method: "POST",
        url: "/newpost/create",
        data: newpost
    }).done(function(response){
        console.log(response);
    }).fail(function(response){
        console.log(response.responseText);
    });
});

$('#getArticles').click(function(event){
    $.ajax({
        method: "GET",
        url: "/newpost/list",
    }).done(function(response){
        console.log(response);
    }).fail(function(response){
        console.log(response.responseText);
    });
});