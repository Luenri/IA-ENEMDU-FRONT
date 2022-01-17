$(document).ready(function(){
    const Url='http://127.0.0.1:8000/modelos/random_run';
    $('#btn').click(function(){
        $.ajax({
            url: Url,
            type: 'GET',
            success: function(result){
                console.log(result)
            },
            error: function(error){
                console.log(`Error${error}`)
            }
        })
    })
})


function enviarInfo(){

    const Url='http://127.0.0.1:8000/modelos/modelos_predict';

    var formulario=document.getElementById("formulario");
    var v1=formulario["v1"].value;
    var v2=formulario["v2"].value;
    var v3=formulario["v3"].value;
    var v4=formulario["v4"].value;
    var v5=formulario["v5"].value;
    var v6=formulario["v6"].value;
    var v7=formulario["v7"].value;
    var v8=formulario["v8"].value;
    var v9=formulario["v8"].value;
    var v10=formulario["v10"].value;
    var v11=formulario["v11"].value;
    var v12=formulario["v12"].value;
    var v13=formulario["v4"].value;
    var v14=formulario["v14"].value;
    var v15=formulario["v15"].value;
    var v16=formulario["v16"].value;
    var v17=formulario["v17"].value;

    var data= {};
    data.area=v1;
    data.hogar=v2;
    data.ingpc=v3;
    data.nnivins=v4;
    data.p02=v5;
    data.p03=v6;
    data.p04=v7;
    data.p05a=v8;
    data.p05b=v8;
    data.p06=v10;
    data.p07=v11;
    data.p09=v12;
    data.p10a=v4;
    data.p10b=v14;
    data.p15=v15;
    data.p20=v16;
    data.vivienda=v17;

    var Jsondata=JSON.stringify(data);
    console.log(Jsondata);

    $.ajax({
        type: "POST",
        url: Url,
        data: Jsondata,

        success:function(result){
            console.log(result)
            var randomForest=document.getElementById("randomForest");
            randomForest.value=result.random_forest.prob_desempleado;

            var regresionLineal=document.getElementById("regresionLineal");
            regresionLineal.value=result.logistic_regression.prob_desempleado;
            
        }

    })
}


