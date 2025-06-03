function Color_Function(){
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
            case "Yellow":
                Color_Output = "Yellow" + Color_String;
                break;
                case "Green":
                    Color_Output = "Green" + Color_String;
                    break;
                    default:
                        Color_Output = "pleasse enter a color exactly written on the above list";

    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//GetElementByClassName Method
function Hello_world_function(){
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "thIS text has changed";
}