function abbrevName(name){
    //split input at first space
    var initials = name.split(' ');
    // picks first letter in each name converts to uppercase and concatenates with a dot 
    return initials[0].charAt(0).toUpperCase()+'.' + initials[1].charAt(0).toUpperCase(); 
  }