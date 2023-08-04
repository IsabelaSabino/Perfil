function cor( e ){
    let cor = generateColor();
    document.body.style.backgroundColor = cor;
    console.log(cor);
}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }