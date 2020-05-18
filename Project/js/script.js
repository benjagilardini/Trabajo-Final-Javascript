import Form from './modules/form-by-steps/form.js';
class Main extends Form {

    constructor() {
        super();
        console.log('Script init');
        this.initselectChild();
    }

    initselectChild(){
        let $selectChildren = $("#childGroupSelectUnder18");
        $selectChildren.on("change", this.selectChild);
    }

    selectChild() {
        let $childData1 = $('#childData1');
        let childData2 = document.getElementById('childData2');
        let childData3 = document.getElementById('childData3');
        let childData4 = document.getElementById('childData4');
    
        var select = document.getElementById("childGroupSelectUnder18");
        var childValue = select.options[select.selectedIndex].value;
        console.log(childValue);
    
        switch (childValue) {
          case '0':
            console.log('case 0');
            $childData1.css("display", "none");
            childData2.style.display = "none";
            childData3.style.display = "none";
            childData4.style.display = "none";
            break;
          case '1':
            console.log('case 1');
            $childData1.css("display", "block");
            childData2.style.display = "none";
            childData3.style.display = "none";
            childData4.style.display = "none";
            break;
          case '2':
            console.log('case 2');
            $childData1.css("display", "block");
            childData2.style.display = "block";
            childData3.style.display = "none";
            childData4.style.display = "none";
            break;
          case '3':
            console.log('case 3');
            $childData1.css("display", "block");
            childData2.style.display = "block";
            childData3.style.display = "block";
            childData4.style.display = "none";
            break;
          case '4':
            console.log('case 4');
            $childData1.css("display", "block");
            childData2.style.display = "block";
            childData3.style.display = "block";
            childData4.style.display = "block";
            break;
        }
      };
};

    // En el paso 2 al seleccionar los hijos menores de 18 años debe mostrar
    // los datos a completar de los hijos según el número de los mismos, por
    // lo tanto se deberia copiar la fila Child #1 y generar para los demás,
    // si se cambia nuevamente el número de hijos éste debe cambiar también por
    // lo que si selecciona None o al inicio no debe mostrar dicha fila Child #1

let main = new Main();