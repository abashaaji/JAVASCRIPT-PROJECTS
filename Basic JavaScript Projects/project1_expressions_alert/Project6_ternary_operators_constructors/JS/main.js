function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short":"You are tall enaugh ";
    document.getElementById("Ride").innerHTML = can_ride + "to ride."
}