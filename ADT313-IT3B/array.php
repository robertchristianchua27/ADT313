<h1> ARRAY </h1>

 <?php 
     $cars = array("Volvo", "BMW", "Nissan");
     $cars = ["Volvo", "BMW" , "Nissan"];
     
     //BMW is selected
     echo $cars[1];
     
     $userInformation = array (
        "firstname" => "Robert Christian",
        "lastname" => "Chua",
        "role" => " Student"
     );
     //adds value to array
     $userInformation['address'] = 'bocaue';

     echo $userInformation['role'];
     
     print_r($userInformation);
     echo "</br>";
     var_dump($userInformation);
     echo "</br>";


     $user = array(
        "informmation" => array(
            "firstname" => "Robert Christian",
            "lastname" => "Chua",
        ),
        "roles"=>array(
            "instructor",
            "student"
        ),
        "address"=>array(
            "Province"=> "Bulacan",
            "Municipality"=>"Marilao",
            "city" =>"Marilao"

        )

        );

        echo $user["address"]["Province"]."</h1>";
        echo $user["roles"][1]."</h2>";
  ?>