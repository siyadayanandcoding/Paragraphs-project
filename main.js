name_of_the_student_array = []; 
var display_student_array = [];
for (var j=1; j <=4; j++)
{

    var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);

    var length_of_name_of_students_array = name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);


}
{

    for (var k = 0; k < length_of_name_of_students_array; k++)
    display_student_arrat.push("<h4>NAME - "+ name_of_the_student_array[k]+ "</h4>");
    console.log(display_student_array);

    var remove_commas = display_student_array.join(" "); 
    console.log(remove_commas); document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";
}