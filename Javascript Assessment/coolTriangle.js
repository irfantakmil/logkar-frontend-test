const coolTriangle = (n) => {
    let totalNumberofRows = n;
    let string = "";
    for (let i = 1; i <= totalNumberofRows; i++) {
        for (let j = 0; j < i; j++) {
            if(i === totalNumberofRows){
                string += "*";
            } else {
                if (j == 0 || j == i - 1){
                    console.log(i,j);
                    string += "*";
                } else {
                    string += " ";
                }
            }
            
        }
        string += "\n";
    }
    return string;

}

//console.log(coolTriangle(3));
console.log(coolTriangle(8));

