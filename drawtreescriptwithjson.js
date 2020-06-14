$(document).ready(function () {

    levelarray=setlevels(data, 0);
    console.log("levelarray=", levelarray);
    // console.log(typeof(levelarray.filter(e=>e.name=="fa")[0].level));
    




    // console.log(data);
    let completed = [];
    // let top = 100;
    let left = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            completed.push(key);
            let top = (levelarray.filter(e=>e.name==key)[0].level);
            if(left[levelarray.filter(e=>e.name==key)[0].level]==undefined){
                left[levelarray.filter(e=>e.name==key)[0].level]=0
            }
            else{
                left[levelarray.filter(e=>e.name==key)[0].level]+=1;
            }
            console.log(left);
            drawindiv(key, 100*top, 200*left[levelarray.filter(e=>e.name==key)[0].level]);
            // left = left + 100;
        }
    }
    console.log(completed);



});





function drawindiv(indiv, top, left) {
    let indivbox = document.createElement("div");
    indivbox.innerHTML = indiv;
    indivbox.setAttribute("class", "indivbox");
    indivbox.setAttribute("id", indiv);
    stylestr = "top:" + top + "px;left:" + left + "px";
    // console.log(top);
    indivbox.setAttribute("style", stylestr);
    $(".mainbox").append(indivbox);
}








function setlevels(data, currentlevel) {
    selectedindiv = "fa";
    curlevel = currentlevel;
    let levelarray = [];

    let obj = {
        name: selectedindiv,
        level: curlevel
    }
    levelarray.push(obj);
    selectedindivindex = 0;


    while (selectedindivindex < levelarray.length) {

        let dataofselec = data[levelarray[selectedindivindex].name];
        // console.log(dataofselec.spouse);
        
        if (dataofselec.spouse != undefined) {

            dataofselec.spouse.forEach(element => {
                let objspouse = {
                    name: element,
                    level: levelarray[selectedindivindex].level
                    
                }


                // check if already there
                if (levelarray.filter(e=>e.name===objspouse.name)[0]==undefined) {
                    levelarray.push(objspouse);
                    // console.log(objspouse,"pushed");
                }
            });
        }
        // console.log(dataofselec.child);
        if (dataofselec.child != undefined) {
            dataofselec.child.forEach(element => {
                let objchild = {
                    name: element,
                    level: levelarray[selectedindivindex].level + 1
                }

                // check if already there
                if (levelarray.filter(e=>e.name===objchild.name)[0]==undefined) {
                    levelarray.push(objchild);
                    // console.log(objchild,"pushed");

                }
            });
        }





        selectedindivindex++;
    }















    // console.log("levelarray=", levelarray);

    return(levelarray);

}