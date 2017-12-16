<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8"/>
  <meta name="1TSSNIR"/>
  <title>Contactez-nous</title>
</head>
<body>
  <form method="POST">
    <h1 class="contact">Une question ? Un problème ?<br/>
      Contactez-nous !</h1>
    <p>Entrez votre question et nous y répondrons dans les plus brefs délais :<br/>
      <textarea name="question">Poser vos questions ici...</textarea><br/>
      Adresse mail (sensible à la casse) :<br/>
      <input type="email" name="email"/><br/>
      Nom :<br/>
      <input type="text" name="nom"/><br/>
      Prénom :<br/>
      <input type="text" name="prenom"/><br/><br/>
      <input type="submit" name="submit" value="Confirmer"/></p>
    </form>

<?php
if (isset($_POST['submit'])){

  echo "votre demande à bien été enregistré et une réponse vous sera addressé par mail.";

}

?>
