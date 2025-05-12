function showFamily() {
    let family = {
      father: "Omar",
      mother: "Binti",
      sister: "Ali"
    };
  
// Delete the father key 
  delete family.father;
  document.getElementById("Dictionary").innerHTML = family.father;
}
