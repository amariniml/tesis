<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE"> 
    <link rel="stylesheet" href="css/tether.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="icomoon.css">
    <link rel="stylesheet" href="css/style.css">
    <title>AHP version 3.0</title>
</head>
<body>
    <?php require('./components/navbar.php') ?>

    <?php require('./components/footer.php') ?>
    <div id="structure" class="contenedor mt-5 mb-5">
        <h1 class="mb-3">Please, enter the required data for continue</h1>
        <hr>
        <form action="#" id="form-ahp" onsubmit="capturedata(); return false;">

            <div class="col-lg-12">
                <input type="text" id="goal" name="goal" placeholder="Enter the goal of the process here...">
            </div>



            <div class="col-lg-6 mt-5">
                <a onclick="addcriteria()" class="btn btn-block btn-primary">
                    <span class="icon-plus"></span> Criteria 
                </a>
            </div>  
            <div class="col-lg-6 mt-5">
                <a onclick="removecriteria()" class="btn btn-block btn-danger">
                    <span class="icon-minus"></span> Criteria 
                </a>
            </div>
            
            <div id="criteria-area">
                <div class="col-lg-10 mt-3">
                    <input type="text" value="Cilindrada" id="criteria" name="criteria1" placeholder="Enter the criteria n°1 for start the evaluation...">
                </div>
                <div class="col-lg-2 mt-3">
                    <a class="btn btn-primary">
                        <span class="icon-plus"></span>
                    </a>
                    <a class="btn btn-danger">
                        <span class="icon-minus"></span>
                    </a>
                </div>
                <div class="col-lg-10 mt-2">
                    <input type="text" value="Velocidad" id="criteria" name="criteria2" placeholder="Enter the criteria n°2 for start the evaluation...">
                </div>
                <div class="col-lg-2 mt-2">
                    <a class="btn btn-primary">
                        <span class="icon-plus"></span>
                    </a>
                    <a class="btn btn-danger">
                        <span class="icon-minus"></span>
                    </a>
                </div>
                <div class="col-lg-10 mt-2">
                    <input type="text" value="Aceleracion" id="criteria" name="criteria3" placeholder="Enter the criteria n°3 for start the evaluation...">
                </div>
                <div class="col-lg-2 mt-2">
                    <a class="btn btn-primary">
                        <span class="icon-plus"></span>
                    </a>
                    <a class="btn btn-danger">
                        <span class="icon-minus"></span>
                    </a>
                </div>
            </div>

            <div class="col-lg-6 mt-5">
                <a onclick="addalternative()" class="btn btn-block btn-primary">
                    <span class="icon-plus"></span> Alternative 
                </a>
            </div>  
            <div class="col-lg-6 mt-5">
                <a onclick="removealternative()" class="btn btn-block btn-danger">
                    <span class="icon-minus"></span> Alternative 
                </a>
            </div>

            <div id="alternative-area">
                <div class="col-lg-12 mt-3">
                    <input type="text" id="alternative" value="Ford" name="alternative1" placeholder="Enter the alternative n°1 for start the evaluation...">
                </div>
                <div class="col-lg-12 mt-2">
                    <input type="text" id="alternative" value="Fiat" name="alternative2" placeholder="Enter the alternative n°2 for start the evaluation...">
                </div>
                <div class="col-lg-12 mt-2">
                    <input type="text" id="alternative" value="Chevrolet" name="alternative3" placeholder="Enter the alternative n°3 for start the evaluation...">
                </div>
            </div>



            

          <button type="submit" class="btn btn-block btn-primary mt-5">Continue</button>
        </form>
    </div>

    

    <form action="#" onsubmit="dothemath(); return false;" class="pairwaise-calculations">
        <div class="contenedor">
            <div id="pairwaise" class="pairwaise mt-3">
                <div class="matrix-container">
                    <h1 class="mb-5">Pairwaise Comparation Matrix <small>Criteria vs Criteria</small></h1>
                </div>
            </div>
            
            <div id="pairwaise-sub-c" class="pairwaise mt-5">
                <div class="matrix-container-sub-c">
                    <!-- <h1 class="mb-5">Pairwaise Comparation Matrix <small>Criteria vs Criteria</small></h1> -->
                </div>
            </div>
            
            <div id="pairwaise-a-a" class="pairwaise mt-5">
                <div class="matrix-container-a-a">
                    <h1 class="mb-5">Pairwaise Comparation Matrix <small>Alternative vs Alternative</small></h1>
                </div>
            </div>
            <button type="submit" id="dothemath-button" class="btn btn-block btn-primary mt-5">Do the Math!</button>
        </div>
    </form>

    <div id="results" class="results mb-5">
        <div class="contenedor">
            <h1 class="display-4">The results are:</h1>
            <hr>
            <table class="table table-hover sortable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Alternative Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody id="results-rows">
                </tbody>
            </table>
        </div>
    </div>


    

    
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/tether.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/numeric-1.2.6.min.js" type="text/javascript"></script>
    <script src="js/hierarchy.js"></script>
    <script src="js/ahp.js"></script>
    <script src="js/frontfunctionality.js"></script>
    <script src="js/sorttable.js"></script>

</body>
</html>