 <?php

$status = '';
$erreurNom = '';
$erreurPrenom = '';
$erreurEntreprise = '';
$erreurFonction = '';
$erreurMail = '';
$erreurTel = '';
$erreurEnvoi = '';


if(isset($_POST['sexe'])){ $sexe = strip_tags($_POST['sexe']); }else{ $sexe = ''; }
if(isset($_POST['nom'])){ $nom = strip_tags($_POST['nom']); }else{ $nom = '';}
if(isset($_POST['prenom'])){ $prenom = strip_tags($_POST['prenom']); }else{ $prenom = '';}
if(isset($_POST['entreprise'])){ $entreprise = strip_tags($_POST['entreprise']); }else{ $entreprise = '';}
if(isset($_POST['fonction'])){ $fonction = strip_tags($_POST['fonction']); }else{ $fonction = '';}
if(isset($_POST['mail'])){ $mail = strip_tags($_POST['mail']); }else{ $mail = ''; }
if(isset($_POST['tel'])){ $tel = strip_tags($_POST['tel']); }else{ $tel = ''; }
if(isset($_POST['objet'])){ $objet = strip_tags($_POST['objet']); }else{ $objet = ''; }
if(isset($_POST['message'])){ $message = strip_tags($_POST['message']); }else{ $message = ''; }


// MAIL DE DESTINATION //////////////////////////////////////
$mailto = 'shwarp@live.fr';

if(isset($_POST['submitted'])) {
 	if(empty($nom)) {
 		$erreurNom = 'Le champ Nom est obligatoire';
 		$status = "erreur"; 
 	}
 	if(empty($prenom)) {
 		$erreurPrenom = 'Le champ Prénom est obligatoire';
 		$status = "erreur"; 
 	}
 	if(empty($entreprise)) {
 		$erreurEntreprise = 'Le champ Entreprise est obligatoire';
 		$status = "erreur"; 
 	}
 	if(empty($fonction)) {
 		$erreurFonction = 'Le champ Fonction est obligatoire';
 		$status = "erreur"; 
 	}
 	if(empty($mail)) {
 		$erreurMail = 'Le champ <span>Email</span> est obligatoire';
 		$status = "erreur"; 
 	}else{
 		if(!(filter_var($mail, FILTER_VALIDATE_EMAIL))) {
 			$erreurMail = 'Vérifiez votre adresse email';
 			$status = "erreur"; 
 		}
 	}
 	if(!empty($tel)) {
 		if (!(strlen($tel) == 10 && ctype_digit($tel))) {
 			$erreurTel = 'Vérifiez votre numéro de téléphone';
 			$status = "erreur"; 
 		}
 	}
 	if($erreurNom == '' && $erreurPrenom == '' && $erreurEntreprise == '' && $erreurFonction == '' && $erreurMail == '' && $erreurTel == ''){ 
 		$subject = $objet . " de MySasCredit.com";

 		$from = 'From: ' . $nom . ' ' . $prenom . '<' . $mail . '>';
 		$reply = 'Reply-To: ' . $mail;
 		$headers = $from . "\r\n" .
 				   $reply . "\r\n";

 		$content = 'De: ' . $sexe .' ' . $nom .' ' . $prenom . "\r\n" .
 				   'Entreprise: ' . $entreprise . "\r\n" .
 				   'Fonction: ' . $fonction . "\r\n\r\n" .
 				   'Coordonnées: ' . "\r\n" . $mail . "\r\n" . $tel . "\r\n\r\n\r\n" .
 				   'Message: ' . "\r\n\r\n" . $message;

 		$sent = mail($mailto, $subject, $content, $headers);

 		if($sent) {
 			$status = "succes";
 		}
 		else{ 
 			$status = "erreur"; 	
 			$erreurEnvoi = "Votre message n'a pas pu être envoyé. Veuillez réessayer!";
 		}
 	}
}

?>

<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	  	<meta charset="utf-8">
	  	<title>Contact - MySasCredit</title>

	  	<meta name="description" content="">
	  	<meta name="viewport" content="width=device-width,initial-scale=1">

	  	<link rel="stylesheet" href="css/libs/normalize.css">
	  	<link rel="stylesheet" href="css/style.css">

		<script src="js/libs/modernizr.js" type="text/javascript" charset="utf-8"></script>
		
	</head>

	<body>
	  	<div class="wrapper">
		  	<header>
		  		<nav>
		  			<a id="logo" class="hide-text" href="./" title="Retour à l'accueil">MySasCredit</a>
		  			<div id="menu" class="menu">
			  			<ul>
			  				<li><a href="./">Accueil</a></li>
			  				<li><a href="apropos.html">MySasCredit</a></li>
			  				<li><a href="cartographie.html">Cartographie</a></li>
			  				<li><a href="saas.html">SAAS</a></li>
			  				<li><a href="partenaires.html">Partenaires</a></li>
			  				<li><a href="references.html">Références</a></li>
			  				<li><a href="/" class="actif">Contact</a></li>
			  			</ul>
			  		</div>
		  			<a id="burger" href="#" title="Déployer le menu">Menu<span class="btnBurger"><span class="b1"></span><span class="b2"></span><span class="b3"></span></span></a>
		  		</nav>
		  	</header>

		  	<div class="content">
		  		<h1 class="padLeft">Nous contacter</h1>
				<div class="main oh">
					<?php if($status != 'succes') { ?>
						<form method="POST" action="contact.php">
							<fieldset class="w50">
						  		<fieldset>
						  			<label for="sexe" class="hidden">Sexe</label>
						  			<div class="select oh">
							  			<select name="sexe" id="sexe">
							  				<option value="M" <?php if($sexe == 'M') echo 'selected="selected"'; ?>>M</option>
							  				<option value="Mme" <?php if($sexe == 'Mme') echo 'selected="selected"'; ?>>Mme</option>
							  			</select>
							  		</div>
						  		</fieldset><fieldset class="<?php if($erreurNom != '') echo 'error'; ?>">
						  			<label for="nom">Nom: <span>*</span></label>
						  			<input type="text" name="nom" id="nom" placeholder='Dupont' value="<?php echo $nom; ?>">
						  		</fieldset>
						  	</fieldset><fieldset class="w50 <?php if($erreurPrenom != '') echo 'error'; ?>">
					  			<label for="prenom">Prénom: <span>*</span></label>
					  			<input type="text" name="prenom" id="prenom" placeholder='Jean' value="<?php echo $prenom; ?>">
					  		</fieldset><fieldset class="w50 <?php if($erreurEntreprise != '') echo 'error'; ?>">
					  			<label for="entreprise">Entreprise: <span>*</span></label>
					  			<input type="text" name="entreprise" id="entreprise" placeholder='Financia SAS' value="<?php echo $entreprise; ?>">
					  		</fieldset><fieldset class="w50 <?php if($erreurFonction != '') echo 'error'; ?>">
					  			<label for="fonction">Fonction: <span>*</span></label>
					  			<input type="text" name="fonction" id="fonction" placeholder='Directeur des achats' value="<?php echo $fonction; ?>">
					  		</fieldset><fieldset class="w50 <?php if($erreurMail != '') echo 'error'; ?>">
					  			<label for="mail">Email: <span>*</span></label>
					  			<input type="email" name="mail" id="mail" placeholder='jeandupont@financia.fr' value="<?php echo $mail; ?>">
					  		</fieldset><fieldset class="<?php if($erreurTel != '') echo 'error'; ?>">
					  			<label for="tel">Téléphone:</label>
					  			<input type="tel" name="tel" id="tel" placeholder="0240484350" value="<?php echo $tel; ?>" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$">
					  		</fieldset><fieldset class="w50">
					  			<label for="objet">Objet:</label>
					  			<div class="select objet">
						  			<select name="objet" id="objet">
						  				<option value="Contact" <?php if($objet == 'Contact') echo 'selected="selected"'; ?>>Contact</option>
						  				<option value="Coucou" <?php if($objet == 'Coucou') echo 'selected="selected"'; ?>>Coucou</option>
						  			</select>
						  		</div>
					  		</fieldset><fieldset class='message'>
					  			<label for="message">Votre message:</label> 
					  			<textarea name="message" id="message"><?php echo $message; ?></textarea>
					  		</fieldset>

					  		<input class="btn" type="submit" name="submitted" value="› Envoyer">

					  	</form>
					  	<p><span>*</span> Champs obligatoires</p>
					<?php }else{ ?>
						<strong>Merci!</strong><br/>
						<p>Votre message a bien été envoyé. Nous y répondrons dans les plus bref délais!</p>
					<?php } ?>

				  	<?php if($status == 'erreur'){ ?>
					  	<p class="blockError">
					  		<?php if($erreurEnvoi == '') { 
						  		echo 'Le formulaire comporte des erreurs :<br/>';
						  		if($erreurNom != '') echo '<span>> ' . $erreurNom .'</span><br/>';
						  		if($erreurPrenom != '') echo '<span>> ' . $erreurPrenom .'</span><br/>';
						  		if($erreurEntreprise != '') echo '<span>> ' . $erreurEntreprise .'</span><br/>';
						  		if($erreurFonction != '') echo '<span>> ' . $erreurFonction .'</span><br/>';
						  		if($erreurMail != '') echo '<span>> ' . $erreurMail .'</span><br/>';
						  		if($erreurTel != '') echo '<span>> ' . $erreurTel .'</span><br/>';
					  		}else{
					  			echo $erreurEnvoi;
					  		} ?>
					  	</p>
					<?php } ?>
			  	</div><aside class="border contact">
			  		<div id="map"></div>
		  			<h2 class="h1 smallH1 icon-map">Nos coordonnées</h2>
		  			<p class="adress">10 bis rue Sarrazin<br/>44000 Nantes<br/><br/>Tél.: 02 40 48 43 50 <span>&bull;</span> Fax: 02 40 48 50 50</p>
		  			<a class="lien" href="mailto:contact@mysascredit.com" title="Envoyer un e-mail"><span class="icon-enveloppe"></span>contact@mysascredit.com</a>
		  		</aside>
		  	</div>

		  	<footer>
		  		<p>MySasCredit est un produit de MCO Finance <span>-</span> ©2014 <span>-</span> <a href="#">Mentions légales</a> <span>-</span> <a href="#">Actualités</a> </p>
		  	</footer>
	  	
	  	</div>
	  	
	  	
		<script src="js/libs/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASm3CwaK9qtcZEWYa-iQwHaGi3gcosAJc&sensor=false"></script>
		<script src="js/min/script-min.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
