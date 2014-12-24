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
		  		<h1>Nous contacter</h1>
				<div class="main">
					<form method="POST" action="contact.php">
				  		<fieldset>
				  			<label for="sexe" class="hidden">Sexe</label>
				  			<select name="sexe" id="sexe">
				  				<option value="m" <?php if($sexe == 'm') echo 'selected="selected"'; ?>>M</option>
				  				<option value="f" <?php if($sexe == 'f') echo 'selected="selected"'; ?>>F</option>
				  			</select>
				  		</fieldset><fieldset class="<?php if($erreurNom != '') echo 'error'; ?>">
				  			<label for="nom">Nom: <span>*</span></label>
				  			<input type="text" name="nom" id="nom" placeholder='Dupont' value="<?php echo $nom; ?>">
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
				  			<input type="tel" name="tel" id="tel" placeholder="0240484350" value="<?php echo $tel; ?>">
				  		</fieldset><fieldset class="w50 <?php if($erreurObjet != '') echo 'error'; ?>">
				  			<label for="objet">Objet:</label>
				  			<select name="objet" id="objet">
				  				<option value="contact" <?php if($sexe == 'contact') echo 'selected="selected"'; ?>>Contact</option>
				  				<option value="contact" <?php if($sexe == 'contact') echo 'selected="selected"'; ?>>Contact</option>
				  			</select>
				  		</fieldset><fieldset class='message'>
				  			<label for="message">Votre message:</label> 
				  			<textarea name="message" id="message"><?php echo $message; ?></textarea>
				  		</fieldset>

				  		<input class="btn" type="submit" name="submitted" value="› Envoyer">

				  	</form>
				  	<p><span>*</span> Champs obligatoires</p>
			  	</div><aside class="border contact">
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
		<script src="js/min/script-min.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
