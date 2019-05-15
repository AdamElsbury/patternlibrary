$(document).ready(function()
{
    $(".dropdown1open").click(function()
    {
        $(".navigation-dropdown-1").toggle();
        $(this).toggleClass("active");
    });
});

$(document).ready(function()
{
    $(".dropdown2open").click(function()
    {
        $(".navigation-dropdown-2").toggle();
        $(this).toggleClass("active");
    });
});
