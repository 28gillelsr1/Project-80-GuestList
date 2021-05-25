
guest_array = [];
    
function submit()
{
   
    var display_guest_array= [];

    for (var j = 1; j<=1;  j++) 
    {
        var name_of_the_guest = document.getElementById("name_1").value;
        console.log(name_of_the_guest);
        guest_array.push(name_of_the_guest);
    }

    console.log(guest_array);

    var length_of_guest_array = guest_array.length;
    console.log(length_of_guest_array);

    for (var k = 0; k < length_of_guest_array; k++) 
    {
        display_guest_array.push("<h4>NAME - "+ guest_array[k] + "</h4>");
        console.log(display_guest_array);
    }

    console.log(display_guest_array);
    

    var remove_commas = display_guest_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_guest_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").display=submit_button;
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    guest_array.sort();
    console.log(guest_array);

    var display_guest_array_sorting = [];

    var length_of_guest_array = guest_array.length;
    console.log(length_of_guest_array);

    for (var k = 0; k < length_of_guest_array; k++) 
    {
        display_guest_array_sorting.push("<h4>NAME - " + guest_array[k] + "</h4>");
        console.log(display_guest_array_sorting);
    }

    var remove_commas = display_guest_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_guest_without_commas").innerHTML = remove_commas;
}
function searching()
{
    
	var s= document.getElementById("name_2").value;
	var found=0;
	var j;
	for(j=0; j<guest_array.length; j++)
		{
			if(s==guest_array[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
    



