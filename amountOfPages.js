function amountOfPages(summary){
    let counter = 1;
    let string = '';
    
    while(string.length < summary) {
      string += counter
      counter++
    }
    return counter - 1
    
  }