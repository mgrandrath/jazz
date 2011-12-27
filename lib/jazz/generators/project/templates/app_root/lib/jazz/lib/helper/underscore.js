_.mixin({
  capitalize : function(string) {
    var income = string.split('_');
    var out = "";
    
    for (var i in income){
      out += income[i].charAt(0).toUpperCase() + income[i].substring(1)
      
    }

    return out;
  }
});